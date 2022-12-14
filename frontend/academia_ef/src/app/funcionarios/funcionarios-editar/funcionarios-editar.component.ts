import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SelectItem, MenuItem, MessageService } from 'primeng/api';
import { FuncionarioModel } from 'src/app/models/funcionario-model';
import { CargoInterface } from 'src/app/models/interfaces/cargo-interface';
import { SexoInterface } from 'src/app/models/interfaces/sexo-interface';
import { UnidadeInterface } from 'src/app/models/interfaces/unidade-interface';
import { CargoService } from 'src/app/services/cargo.service';
import { FuncionarioService } from 'src/app/services/funcionario.service';
import { SexoService } from 'src/app/services/sexo.service';
import { UnidadeService } from 'src/app/services/unidade.service';
import { Estados } from 'src/app/utils/estados-lista';

@Component({
  selector: 'app-funcionarios-editar',
  templateUrl: './funcionarios-editar.component.html'
})
export class FuncionariosEditarComponent implements OnInit {

  funcionario: FuncionarioModel = new FuncionarioModel();
  id: number = 0;

  cargos: CargoInterface[] = [];
  sexos: SexoInterface[] = [];
  unidades: UnidadeInterface[] = [];
  estados: Estados = new Estados();

  fixo: boolean = false;

  loading: boolean = false;
  home: MenuItem = { icon: 'pi pi-home', routerLink: '/' };
  items: MenuItem[] = [{ label: 'Funcionarios' }, { label: 'Editar Funcionario' }];

  constructor(private funcionarioService: FuncionarioService,
    private unidadeService: UnidadeService,
    private sexoService: SexoService,
    private cargoService: CargoService,
    private router: Router,
    private messageService: MessageService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = Number.parseInt(this.route.snapshot.params["parametro"]);

    this.buscarPlanos();
    this.buscarSexos();
    this.buscarUnidades();
    this.buscarPorId();
  }

  buscarPorId() {
    this.funcionarioService.buscarPorId(this.id).subscribe(
      obj => {
        this.funcionario.id = obj.id;
        this.funcionario.nome = obj.nome;
        this.funcionario.cpf = obj.cpf;
        this.funcionario.email = obj.email;
        this.funcionario.telefone = obj.telefone;
        this.funcionario.dataNascimento = new Date(obj.dataNascimento);
        this.funcionario.fixo = obj.fixo;

        this.funcionario.idCargo = obj.idCargo;
        this.funcionario.idSexo = obj.idSexo;
        this.funcionario.idUnidade = obj.idUnidade;

        this.funcionario.endereco.id = obj.endereco.id;
        this.funcionario.endereco.descricao = obj.endereco.descricao;
        this.funcionario.endereco.estado = obj.endereco.estado;
        this.funcionario.endereco.cidade = obj.endereco.cidade;
        this.funcionario.endereco.cep = obj.endereco.cep;

        this.loading = false;
      },
      () => {
        this.loading = false;
        this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Ocorreu algum erro ao tentar buscar o produto' });
      }
    );
  }

  buscarPlanos() {
    this.cargoService.buscarTodos().subscribe(
      list => {
        this.cargos = list;
      },
      () => {
        this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Ocorreu algum erro ao tentar buscar os Cargos' });
      }
    )
  }

  buscarSexos() {
    this.sexoService.buscarTodos().subscribe(
      list => {
        this.sexos = list;
      },
      () => {
        this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Ocorreu algum erro ao tentar buscar os Sexos' });
      }
    )
  }

  buscarUnidades() {
    this.unidadeService.buscarTodos().subscribe(
      list => {
        this.unidades = list;
      },
      () => {
        this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Ocorreu algum erro ao tentar buscar as Unidades' });
      }
    )
  }

  atualizar() {
    this.loading = true;
    this.prepararParaEnvio();

    this.funcionarioService.editar(this.funcionario).subscribe(
      () => {
        this.loading = false;
        this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: 'Atualiza????o realizada com sucesso!' });
      },
      () => {
        this.loading = false;
        this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Ocorreu algum erro na atualiza????o do Funcion??rio' });
      },
      () => { }
    )
  }

  prepararParaEnvio() {
    this.funcionario.nome = this.funcionario.nome.toUpperCase().trim();
    this.funcionario.cpf = this.funcionario.cpf.trim();
    this.funcionario.email = this.funcionario.email.toLowerCase().trim();
    this.funcionario.telefone = this.funcionario.telefone.trim();
  }

  voltar() {
    this.router.navigate(['funcionarios']);
  }

  validarAlteracoes() {
    let prosseguir = true;

    // Valida????o Dados B??sicos
    if (!(this.funcionario.nome)) {
      prosseguir = false;
      this.messageService.add({ severity: 'warn', summary: 'Erro', detail: '?? necess??rio preencher o campo Nome' });
    }

    if (!(this.funcionario.cpf)) {
      prosseguir = false;
      this.messageService.add({ severity: 'warn', summary: 'Erro', detail: '?? necess??rio preencher o campo CPF' });
    }

    if (!(this.funcionario.email)) {
      prosseguir = false;
      this.messageService.add({ severity: 'warn', summary: 'Erro', detail: '?? necess??rio preencher o campo Email' });
    }

    if (!(this.funcionario.dataNascimento)) {
      prosseguir = false;
      this.messageService.add({ severity: 'warn', summary: 'Erro', detail: '?? necess??rio preencher o campo de Data de Nascimento' });
    }

    if (this.funcionario.idSexo === 0) {
      prosseguir = false;
      this.messageService.add({ severity: 'warn', summary: 'Erro', detail: '?? necess??rio escolher algum dos Sexos' });
    }

    if (this.funcionario.idCargo === 0) {
      prosseguir = false;
      this.messageService.add({ severity: 'warn', summary: 'Erro', detail: '?? necess??rio escolher algum dos Cargos' });
    }

    if ((!(this.funcionario.idUnidade))) {
      if (this.funcionario.fixo) {
        prosseguir = false;
        this.messageService.add({ severity: 'warn', summary: 'Erro', detail: '?? necess??rio escolher alguma das Unidades' });
      }
    }

    if (!(this.funcionario.telefone)) {
      prosseguir = false;
      this.messageService.add({ severity: 'warn', summary: 'Erro', detail: '?? necess??rio preencher o campo Telefone' });
    }

    // Valida????o dados de Endere??o
    if (!(this.funcionario.endereco.descricao)) {
      prosseguir = false;
      this.messageService.add({ severity: 'warn', summary: 'Erro', detail: '?? necess??rio preencher o campo Descri????o' });
    }

    if (!(this.funcionario.endereco.cidade)) {
      prosseguir = false;
      this.messageService.add({ severity: 'warn', summary: 'Erro', detail: '?? necess??rio preencher o campo Cidade' });
    }

    if (!(this.funcionario.endereco.estado)) {
      prosseguir = false;
      this.messageService.add({ severity: 'warn', summary: 'Erro', detail: '?? necess??rio preencher o campo Estado' });
    }

    if (!(this.funcionario.endereco.cep)) {
      prosseguir = false;
      this.messageService.add({ severity: 'warn', summary: 'Erro', detail: '?? necess??rio preencher o campo CEP' });
    }

    if (prosseguir) {
      this.atualizar();
    }
  }

}

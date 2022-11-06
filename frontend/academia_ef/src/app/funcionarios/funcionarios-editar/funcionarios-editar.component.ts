import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SelectItem, MenuItem, MessageService } from 'primeng/api';
import { FuncionarioModel } from 'src/app/models/funcionario-model';
import { CargoService } from 'src/app/services/cargo.service';
import { FuncionarioService } from 'src/app/services/funcionario.service';
import { SexoService } from 'src/app/services/sexo.service';
import { UnidadeService } from 'src/app/services/unidade.service';

@Component({
  selector: 'app-funcionarios-editar',
  templateUrl: './funcionarios-editar.component.html',
  styleUrls: ['./funcionarios-editar.component.css']
})
export class FuncionariosEditarComponent implements OnInit {

  funcionario: FuncionarioModel = new FuncionarioModel();

  cargos: any[] = [];
  sexos: any[] = [];
  unidades: any[] = [];

  sexoSelecionado!: SelectItem;
  cargoSelecionado!: SelectItem;
  unidadeSelecionada!: SelectItem;

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
    this.buscarPlanos();
    this.buscarSexos();
    this.buscarUnidades();

    const id = this.route.snapshot.params["parametro"];

    this.funcionarioService.buscarPorId(Number.parseInt(id)).subscribe(
      obj => {
        this.funcionario.nome = obj.nome;
        this.funcionario.cpf = obj.cpf;
        this.funcionario.email = obj.email;
        this.funcionario.telefone = obj.telefone;
        this.funcionario.dataNascimento = obj.dataNascimento;

        this.funcionario.endereco.descricao = obj.endereco.descricao;
        this.funcionario.endereco.estado = obj.endereco.estado;
        this.funcionario.endereco.cidade = obj.endereco.cidade;
        this.funcionario.endereco.cep = obj.endereco.cep;

        this.loading = false;
      },
      () => {
        this.loading = false;
        this.messageService.add({ severity: 'danger', summary: 'Erro', detail: 'Ocorreu algum erro ao tentar buscar o produto' });
      }
    );
  }

  buscarPlanos() {
    this.cargoService.buscarTodos().subscribe(
      list => {
        this.cargos = list;
      },
      () => {
        this.messageService.add({ severity: 'danger', summary: 'Erro', detail: 'Ocorreu algum erro ao tentar buscar o produto' });
      }
    )
  }

  buscarSexos() {
    this.sexoService.buscarTodos().subscribe(
      list => {
        this.sexos = list;
      },
      () => {
        this.messageService.add({ severity: 'danger', summary: 'Erro', detail: 'Ocorreu algum erro ao tentar buscar o produto' });
      }
    )
  }

  buscarUnidades() {
    this.unidadeService.buscarTodos().subscribe(
      list => {
        this.unidades = list;
      },
      () => {
        this.messageService.add({ severity: 'danger', summary: 'Erro', detail: 'Ocorreu algum erro ao tentar buscar o produto' });
      }
    )
  }

  cadastrar() {
    this.loading = true;
    this.prepararParaEnvio();

    this.funcionarioService.editar(this.funcionario).subscribe(
      () => {
        this.loading = false;
        this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: 'funcionario inserido com sucesso!' });
        this.router.navigate(['funcionarios'])
      },
      () => {
        this.loading = false;
        this.messageService.add({ severity: 'danger', summary: 'Erro', detail: 'Ocorreu algum erro ao tentar inserir o funcionario' });
      },
      () => { }
    )
  }

  prepararParaEnvio() {
    this.funcionario.nome = this.funcionario.nome.trim();
    this.funcionario.cpf = this.funcionario.cpf.trim();
    this.funcionario.email = this.funcionario.email.trim();
    this.funcionario.telefone = this.funcionario.telefone.trim();
    this.funcionario.idUsuario = 1

    this.funcionario.idCargo = this.cargoSelecionado.value;
    this.funcionario.idSexo = this.sexoSelecionado.value;

    this.funcionario.idUnidade = this ?
      this.unidadeSelecionada.value : null;
  }

  voltar() {
    this.router.navigate(['alunos']);
  }

  validarCadastro() {
    let prosseguir = true;

    //Validação Dados Básicos
    // if (!(this.funcionario.nome)) {
    //   prosseguir = false;
    //   this.messageService.add({ severity: 'warn', summary: 'Erro', detail: 'É necessário preencher o campo "Nome"' });
    // }

    // if (!(this.funcionario.cpf)) {
    //   prosseguir = false;
    //   this.messageService.add({ severity: 'warn', summary: 'Erro', detail: 'É necessário preencher o campo "CPF"' });
    // }

    // if (!(this.funcionario.email)) {
    //   prosseguir = false;
    //   this.messageService.add({ severity: 'warn', summary: 'Erro', detail: 'É necessário preencher o campo "Email"' });
    // }

    // if (!(this.sexoSelecionado)) {
    //   prosseguir = false;
    //   this.messageService.add({ severity: 'warn', summary: 'Erro', detail: 'É necessário escolher algum dos Sexos' });
    // }

    // if (!(this.cargoSelecionado)) {
    //   prosseguir = false;
    //   this.messageService.add({ severity: 'warn', summary: 'Erro', detail: 'É necessário escolher algum dos Planos' });
    // }

    // if ((!(this.unidadeSelecionada))) {
    //   if (this.planoSelecionado && this.planoSelecionado.value == PlanoEnum.ESSENTIAL) {
    //     prosseguir = false;
    //     this.messageService.add({ severity: 'warn', summary: 'Erro', detail: 'É necessário escolher algum dos Planos' });
    //   }
    // }

    // if (!(this.funcionario.telefone)) {
    //   prosseguir = false;
    //   this.messageService.add({ severity: 'warn', summary: 'Erro', detail: 'É necessário preencher o campo "Telefone"' });
    // }

    //Validação dados de Endereço
    // if (!(this.funcionario.endereco.descricao)) {
    //   prosseguir = false;
    //   this.messageService.add({ severity: 'warn', summary: 'Erro', detail: 'É necessário preencher o campo "Nome"' });
    // }

    // if (!(this.funcionario.endereco.cidade)) {
    //   prosseguir = false;
    //   this.messageService.add({ severity: 'warn', summary: 'Erro', detail: 'É necessário preencher o campo "Nome"' });
    // }

    // if (!(this.funcionario.endereco.estado)) {
    //   prosseguir = false;
    //   this.messageService.add({ severity: 'warn', summary: 'Erro', detail: 'É necessário preencher o campo "Nome"' });
    // }

    // if (!(this.funcionario.endereco.cep)) {
    //   prosseguir = false;
    //   this.messageService.add({ severity: 'warn', summary: 'Erro', detail: 'É necessário preencher o campo "Nome"' });
    // }

    //Validação de senha
    // if (!(this.funcionario.usuario)) {
    //   prosseguir = false;
    //   this.messageService.add({ severity: 'warn', summary: 'Erro', detail: 'É necessário preencher o campo "Nome"' });
    // }
    // if (!(this.funcionario.nome)) {
    //   prosseguir = false;
    //   this.messageService.add({ severity: 'warn', summary: 'Erro', detail: 'É necessário preencher o campo "Nome"' });
    // }

    if (prosseguir) {
      this.cadastrar();
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem, MessageService } from 'primeng/api';
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
  selector: 'app-funcionarios-cadastrar',
  templateUrl: './funcionarios-cadastrar.component.html'
})
export class FuncionariosCadastrarComponent implements OnInit {

  novoFuncionario: FuncionarioModel = new FuncionarioModel();

  cargos: CargoInterface[] = [];
  sexos: SexoInterface[] = [];
  unidades: UnidadeInterface[] = [];
  estados: Estados = new Estados();

  fixo: boolean = false;
  senha: string = '';
  confirmacaoSenha: string = '';

  loading: boolean = false;
  home: MenuItem = { icon: 'pi pi-home', routerLink: '/' };
  items: MenuItem[] = [{ label: 'Funcionarios' }, { label: 'Cadastrar Funcionario' }];

  constructor(private funcionarioService: FuncionarioService,
    private unidadeService: UnidadeService,
    private sexoService: SexoService,
    private cargoService: CargoService,
    private router: Router,
    private messageService: MessageService) { }

  ngOnInit(): void {
    this.buscarPlanos();
    this.buscarSexos();
    this.buscarUnidades();
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

  cadastrar() {
    this.loading = true;
    this.prepararParaEnvio();

    this.funcionarioService.cadastrar(this.novoFuncionario).subscribe(
      () => {
        this.loading = false;
        this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: 'Funcion??rio inserido com sucesso!' });
        this.router.navigate(['funcionarios'])
      },
      () => {
        this.loading = false;
        this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Ocorreu algum erro ao tentar inserir o Funcion??rio' });
      },
      () => { }
    )
  }

  prepararParaEnvio() {
    this.novoFuncionario.nome = this.novoFuncionario.nome.toUpperCase().trim();
    this.novoFuncionario.cpf = this.novoFuncionario.cpf.trim();
    this.novoFuncionario.email = this.novoFuncionario.email.toLowerCase().trim();
    this.novoFuncionario.telefone = this.novoFuncionario.telefone.trim();
    this.novoFuncionario.usuario.senha = this.senha;

    this.novoFuncionario.idUnidade = this.novoFuncionario.fixo ?
      this.novoFuncionario.idUnidade : 0;
  }

  voltar() {
    this.router.navigate(['funcionarios']);
  }

  validarCadastro() {
    let prosseguir = true;

    // Valida????o Dados B??sicos
    if (!(this.novoFuncionario.nome)) {
      prosseguir = false;
      this.messageService.add({ severity: 'warn', summary: 'Erro', detail: '?? necess??rio preencher o campo "Nome"' });
    }

    if (!(this.novoFuncionario.cpf)) {
      prosseguir = false;
      this.messageService.add({ severity: 'warn', summary: 'Erro', detail: '?? necess??rio preencher o campo "CPF"' });
    }

    if (!(this.novoFuncionario.email)) {
      prosseguir = false;
      this.messageService.add({ severity: 'warn', summary: 'Erro', detail: '?? necess??rio preencher o campo "Email"' });
    }

    if (!(this.novoFuncionario.dataNascimento)) {
      prosseguir = false;
      this.messageService.add({ severity: 'warn', summary: 'Erro', detail: '?? necess??rio preencher o campo de Data de Nascimento' });
    }

    if (!(this.novoFuncionario.idSexo)) {
      prosseguir = false;
      this.messageService.add({ severity: 'warn', summary: 'Erro', detail: '?? necess??rio escolher algum dos Sexos' });
    }

    if (!(this.novoFuncionario.idCargo)) {
      prosseguir = false;
      this.messageService.add({ severity: 'warn', summary: 'Erro', detail: '?? necess??rio escolher algum dos Cargo' });
    }

    if ((!(this.novoFuncionario.idUnidade))) {
      if (this.novoFuncionario.fixo) {
        prosseguir = false;
        this.messageService.add({ severity: 'warn', summary: 'Erro', detail: '?? necess??rio escolher alguma das Unidades' });
      }
    }

    if (!(this.novoFuncionario.telefone)) {
      prosseguir = false;
      this.messageService.add({ severity: 'warn', summary: 'Erro', detail: '?? necess??rio preencher o campo "Telefone"' });
    }

    // Valida????o dados de Endere??o
    if (!(this.novoFuncionario.endereco.descricao)) {
      prosseguir = false;
      this.messageService.add({ severity: 'warn', summary: 'Erro', detail: '?? necess??rio preencher o campo Descri????o' });
    }

    if (!(this.novoFuncionario.endereco.cidade)) {
      prosseguir = false;
      this.messageService.add({ severity: 'warn', summary: 'Erro', detail: '?? necess??rio preencher o campo Cidade' });
    }

    if (!(this.novoFuncionario.endereco.estado)) {
      prosseguir = false;
      this.messageService.add({ severity: 'warn', summary: 'Erro', detail: '?? necess??rio preencher o campo Estado' });
    }

    if (!(this.novoFuncionario.endereco.cep)) {
      prosseguir = false;
      this.messageService.add({ severity: 'warn', summary: 'Erro', detail: '?? necess??rio preencher o campo CEP' });
    }

    //Valida????o de senha
    if (!(this.senha)) {
      prosseguir = false;
      this.messageService.add({ severity: 'warn', summary: 'Erro', detail: '?? necess??rio preencher o campo Senha' });
    }

    if (!(this.confirmacaoSenha)) {
      prosseguir = false;
      this.messageService.add({ severity: 'warn', summary: 'Erro', detail: '?? necess??rio preencher o campo Confirma????o de Senha' });
    }

    if (!(this.senha === this.confirmacaoSenha)) {
      prosseguir = false;
      this.messageService.add({ severity: 'warn', summary: 'Erro', detail: 'Os valores de senha e confirma????o de senha n??o se correspondem' });
    }

    if (prosseguir) {
      this.cadastrar();
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem, MessageService, SelectItem } from 'primeng/api';
import { PlanoEnum } from 'src/app/enums/planos-enum';
import { AlunoModel } from 'src/app/models/aluno-model';
import { PlanoInterface } from 'src/app/models/interfaces/plano-interface';
import { SexoInterface } from 'src/app/models/interfaces/sexo-interface';
import { UnidadeInterface } from 'src/app/models/interfaces/unidade-interface';
import { AlunoService } from 'src/app/services/aluno.service';
import { PlanoService } from 'src/app/services/plano.service';
import { SexoService } from 'src/app/services/sexo.service';
import { UnidadeService } from 'src/app/services/unidade.service';
import { Estados } from 'src/app/utils/estados-lista';

@Component({
  selector: 'app-alunos-cadastrar',
  templateUrl: './alunos-cadastrar.component.html',
  styleUrls: ['./alunos-cadastrar.component.css']
})
export class AlunosCadastrarComponent implements OnInit {

  novoAluno: AlunoModel = new AlunoModel();

  planos: PlanoInterface[] = [];
  sexos: SexoInterface[] = [];
  unidades: UnidadeInterface[] = [];
  estados: Estados = new Estados();

  senha: string = '';
  confirmacaoSenha: string = '';

  loading: boolean = false;
  home: MenuItem = { icon: 'pi pi-home', routerLink: '/' };
  items: MenuItem[] = [{ label: 'Alunos' }, { label: 'Cadastrar Aluno' }];

  constructor(private alunoService: AlunoService,
    private unidadeService: UnidadeService,
    private sexoService: SexoService,
    private planoService: PlanoService,
    private router: Router,
    private messageService: MessageService) { }

  ngOnInit(): void {
    this.buscarPlanos();
    this.buscarSexos();
    this.buscarUnidades();
  }

  buscarPlanos() {
    this.planoService.buscarTodos().subscribe(
      list => {
        this.planos = list;
      },
      () => {
        this.messageService.add({ severity: 'danger', summary: 'Erro', detail: 'Ocorreu algum erro ao tentar buscar os Planos' });
      }
    )
  }

  buscarSexos() {
    this.sexoService.buscarTodos().subscribe(
      list => {
        this.sexos = list;
      },
      () => {
        this.messageService.add({ severity: 'danger', summary: 'Erro', detail: 'Ocorreu algum erro ao tentar buscar os Sexos' });
      }
    )
  }

  buscarUnidades() {
    this.unidadeService.buscarTodos().subscribe(
      list => {
        this.unidades = list;
      },
      () => {
        this.messageService.add({ severity: 'danger', summary: 'Erro', detail: 'Ocorreu algum erro ao tentar buscar as Unidades' });
      }
    )
  }

  cadastrar() {
    this.loading = true;
    this.prepararParaEnvio();

    this.alunoService.cadastrar(this.novoAluno).subscribe(
      success => {
        this.loading = false;
        this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: 'Aluno inserido com sucesso!' });
        this.router.navigate(['alunos'])
      },
      () => {
        this.loading = false;
        this.messageService.add({ severity: 'danger', summary: 'Erro', detail: 'Ocorreu algum erro ao tentar inserir o aluno' });
      },
      () => { }
    )
  }

  prepararParaEnvio() {
    this.novoAluno.nome = this.novoAluno.nome.toUpperCase().trim();
    this.novoAluno.cpf = this.novoAluno.cpf.trim();
    this.novoAluno.email = this.novoAluno.email.toLowerCase().trim();
    this.novoAluno.telefone = this.novoAluno.telefone.trim();
    this.novoAluno.usuario.senha = this.senha;

    this.novoAluno.idUnidade = this.novoAluno.idPlano == PlanoEnum.ESSENTIAL ?
      this.novoAluno.idUnidade : 0;
  }

  voltar() {
    this.router.navigate(['alunos']);
  }

  validarCadastro() {
    let prosseguir = true;

    // Validação Dados Básicos
    if (!(this.novoAluno.nome)) {
      prosseguir = false;
      this.messageService.add({ severity: 'warn', summary: 'Erro', detail: 'É necessário preencher o campo Nome' });
    }

    if (!(this.novoAluno.cpf)) {
      prosseguir = false;
      this.messageService.add({ severity: 'warn', summary: 'Erro', detail: 'É necessário preencher o campo CPF' });
    }

    if (!(this.novoAluno.email)) {
      prosseguir = false;
      this.messageService.add({ severity: 'warn', summary: 'Erro', detail: 'É necessário preencher o campo Email' });
    }

    if (!(this.novoAluno.dataNascimento)) {
      prosseguir = false;
      this.messageService.add({ severity: 'warn', summary: 'Erro', detail: 'É necessário preencher o campo de Data de Nascimento' });
    }

    if (this.novoAluno.idSexo === 0) {
      prosseguir = false;
      this.messageService.add({ severity: 'warn', summary: 'Erro', detail: 'É necessário escolher algum dos Sexos' });
    }

    if (!(this.novoAluno.idPlano === 0)) {
      prosseguir = false;
      this.messageService.add({ severity: 'warn', summary: 'Erro', detail: 'É necessário escolher algum dos Planos' });
    }

    if ((!(this.novoAluno.idUnidade))) {
      if (this.novoAluno.idPlano == PlanoEnum.ESSENTIAL) {
        prosseguir = false;
        this.messageService.add({ severity: 'warn', summary: 'Erro', detail: 'É necessário escolher alguma das Unidades' });
      }
    }

    if (!(this.novoAluno.telefone)) {
      prosseguir = false;
      this.messageService.add({ severity: 'warn', summary: 'Erro', detail: 'É necessário preencher o campo Telefone' });
    }

    // Validação dados de Endereço
    if (!(this.novoAluno.endereco.descricao)) {
      prosseguir = false;
      this.messageService.add({ severity: 'warn', summary: 'Erro', detail: 'É necessário preencher o campo Descrição' });
    }

    if (!(this.novoAluno.endereco.cidade)) {
      prosseguir = false;
      this.messageService.add({ severity: 'warn', summary: 'Erro', detail: 'É necessário preencher o campo Cidade' });
    }

    if (!(this.novoAluno.endereco.estado)) {
      prosseguir = false;
      this.messageService.add({ severity: 'warn', summary: 'Erro', detail: 'É necessário preencher o campo Estado' });
    }

    if (!(this.novoAluno.endereco.cep)) {
      prosseguir = false;
      this.messageService.add({ severity: 'warn', summary: 'Erro', detail: 'É necessário preencher o campo CEP' });
    }

    //Validação de senha
    if (!(this.senha)) {
      prosseguir = false;
      this.messageService.add({ severity: 'warn', summary: 'Erro', detail: 'É necessário preencher o campo Senha' });
    }

    if (!(this.confirmacaoSenha)) {
      prosseguir = false;
      this.messageService.add({ severity: 'warn', summary: 'Erro', detail: 'É necessário preencher o campo Confirmação de Senha' });
    }

    if (!(this.senha === this.confirmacaoSenha)) {
      prosseguir = false;
      this.messageService.add({ severity: 'warn', summary: 'Erro', detail: 'Os valores de senha e confirmação de senha não se correspondem' });
    }

    if (prosseguir) {
      this.cadastrar();
    }
  }
}

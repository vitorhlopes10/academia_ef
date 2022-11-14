import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuItem, MessageService } from 'primeng/api';
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
  selector: 'app-alunos-editar',
  templateUrl: './alunos-editar.component.html'
})
export class AlunosEditarComponent implements OnInit {

  aluno: AlunoModel = new AlunoModel();
  id: number = 0;

  planos: PlanoInterface[] = [];
  sexos: SexoInterface[] = [];
  unidades: UnidadeInterface[] = [];
  estados: Estados = new Estados();

  loading: boolean = false;
  home: MenuItem = { icon: 'pi pi-home', routerLink: '/' };
  items: MenuItem[] = [{ label: 'Alunos' }, { label: 'Editar Aluno' }];

  constructor(private alunoService: AlunoService,
    private unidadeService: UnidadeService,
    private sexoService: SexoService,
    private planoService: PlanoService,
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
    this.loading = true;

    this.alunoService.buscarPorId(this.id).subscribe(
      obj => {
        this.aluno.id = obj.id;
        this.aluno.nome = obj.nome;
        this.aluno.cpf = obj.cpf;
        this.aluno.email = obj.email;
        this.aluno.telefone = obj.telefone;
        this.aluno.dataNascimento = new Date(obj.dataNascimento);

        this.aluno.idPlano = obj.idPlano;
        this.aluno.idSexo = obj.idSexo;
        this.aluno.idUnidade = obj.idUnidade;

        this.aluno.endereco.id = obj.endereco.id;
        this.aluno.endereco.descricao = obj.endereco.descricao;
        this.aluno.endereco.estado = obj.endereco.estado;
        this.aluno.endereco.cidade = obj.endereco.cidade;
        this.aluno.endereco.cep = obj.endereco.cep;

        this.loading = false;
      },
      () => {
        this.loading = false;
        this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Ocorreu algum erro ao tentar buscar o produto' });
      }
    );
  }

  buscarPlanos() {
    this.planoService.buscarTodos().subscribe(
      list => {
        this.planos = list;
      },
      () => {
        this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Ocorreu algum erro ao tentar buscar os Planos' });
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

    this.alunoService.editar(this.aluno).subscribe(
      () => {
        this.loading = false;
        this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: 'Atualização realizada com sucesso!' });
      },
      () => {
        this.loading = false;
        this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Ocorreu algum erro ao tentar atualizar o cadastro' });
      },
      () => { }
    )
  }

  prepararParaEnvio() {
    this.aluno.nome = this.aluno.nome.toUpperCase().trim();
    this.aluno.cpf = this.aluno.cpf.trim();
    this.aluno.email = this.aluno.email.toLocaleLowerCase().trim();
    this.aluno.telefone = this.aluno.telefone.trim();
    this.aluno.idUsuario = 1
  }

  voltar() {
    this.router.navigate(['alunos']);
  }

  validarAlteracoes() {
    let prosseguir = true;

    // Validação Dados Básicos
    if (!(this.aluno.nome)) {
      prosseguir = false;
      this.messageService.add({ severity: 'warn', summary: 'Erro', detail: 'É necessário preencher o campo Nome' });
    }

    if (!(this.aluno.cpf)) {
      prosseguir = false;
      this.messageService.add({ severity: 'warn', summary: 'Erro', detail: 'É necessário preencher o campo CPF' });
    }

    if (!(this.aluno.email)) {
      prosseguir = false;
      this.messageService.add({ severity: 'warn', summary: 'Erro', detail: 'É necessário preencher o campo Email' });
    }

    if (!(this.aluno.dataNascimento)) {
      prosseguir = false;
      this.messageService.add({ severity: 'warn', summary: 'Erro', detail: 'É necessário preencher o campo de Data de Nascimento' });
    }

    if (!(this.aluno.idSexo)) {
      prosseguir = false;
      this.messageService.add({ severity: 'warn', summary: 'Erro', detail: 'É necessário escolher algum dos Sexos' });
    }

    if (!(this.aluno.idPlano)) {
      prosseguir = false;
      this.messageService.add({ severity: 'warn', summary: 'Erro', detail: 'É necessário escolher algum dos Planos' });
    }

    if ((!(this.aluno.idUnidade))) {
      if (this.aluno.idPlano == PlanoEnum.ESSENTIAL) {
        prosseguir = false;
        this.messageService.add({ severity: 'warn', summary: 'Erro', detail: 'É necessário escolher alguma das Unidades' });
      }
    }

    if (!(this.aluno.telefone)) {
      prosseguir = false;
      this.messageService.add({ severity: 'warn', summary: 'Erro', detail: 'É necessário preencher o campo Telefone' });
    }

    // Validação dados de Endereço
    if (!(this.aluno.endereco.descricao)) {
      prosseguir = false;
      this.messageService.add({ severity: 'warn', summary: 'Erro', detail: 'É necessário preencher o campo Descrição' });
    }

    if (!(this.aluno.endereco.cidade)) {
      prosseguir = false;
      this.messageService.add({ severity: 'warn', summary: 'Erro', detail: 'É necessário preencher o campo Cidade' });
    }

    if (!(this.aluno.endereco.estado)) {
      prosseguir = false;
      this.messageService.add({ severity: 'warn', summary: 'Erro', detail: 'É necessário preencher o campo Estado' });
    }

    if (!(this.aluno.endereco.cep)) {
      prosseguir = false;
      this.messageService.add({ severity: 'warn', summary: 'Erro', detail: 'É necessário preencher o campo CEP' });
    }

    if (prosseguir) {
      this.atualizar();
    }
  }
}

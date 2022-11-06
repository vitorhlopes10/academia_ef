import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem, MessageService, SelectItem } from 'primeng/api';
import { PlanoEnum } from 'src/app/enums/planos-enum';
import { AlunoModel } from 'src/app/models/aluno-model';
import { AlunoService } from 'src/app/services/aluno.service';
import { PlanoService } from 'src/app/services/plano.service';
import { SexoService } from 'src/app/services/sexo.service';
import { UnidadeService } from 'src/app/services/unidade.service';

@Component({
  selector: 'app-alunos-cadastrar',
  templateUrl: './alunos-cadastrar.component.html',
  styleUrls: ['./alunos-cadastrar.component.css']
})
export class AlunosCadastrarComponent implements OnInit {

  novoAluno: AlunoModel = new AlunoModel();

  planos: any[] = [];
  sexos: any[] = [];
  unidades: any[] = [];

  sexoSelecionado!: SelectItem;
  planoSelecionado!: SelectItem;
  unidadeSelecionada!: SelectItem;

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
        list.forEach(item => {
          this.planos.push({ name: item.nome, value: item.id })
        });
      },
      () => {
        this.messageService.add({ severity: 'danger', summary: 'Erro', detail: 'Ocorreu algum erro ao tentar buscar os Planos' });
      }
    )
  }

  buscarSexos() {
    this.sexoService.buscarTodos().subscribe(
      list => {
        list.forEach(item => {
          this.sexos.push({ name: item.nome, value: item.id })
        });
      },
      () => {
        this.messageService.add({ severity: 'danger', summary: 'Erro', detail: 'Ocorreu algum erro ao tentar buscar os Sexos' });
      }
    )
  }

  buscarUnidades() {
    this.unidadeService.buscarTodos().subscribe(
      list => {
        list.forEach(item => {
          this.unidades.push({ name: item.nome, value: item.id })
        });
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
    this.novoAluno.nome = this.novoAluno.nome.trim();
    this.novoAluno.cpf = this.novoAluno.cpf.trim();
    this.novoAluno.email = this.novoAluno.email.trim();
    this.novoAluno.telefone = this.novoAluno.telefone.trim();
    this.novoAluno.idUsuario = 1

    this.novoAluno.idPlano = this.planoSelecionado.value;
    this.novoAluno.idSexo = this.sexoSelecionado.value;

    this.novoAluno.idUnidade = this.novoAluno.idPlano === PlanoEnum.PREMIUN ?
      this.unidadeSelecionada.value : null;
  }

  voltar() {
    this.router.navigate(['alunos']);
  }

  validarCadastro() {
    let prosseguir = true;
    this.prepararParaEnvio();

    //Validação Dados Básicos
    // if (!(this.novoAluno.nome)) {
    //   prosseguir = false;
    //   this.messageService.add({ severity: 'warn', summary: 'Erro', detail: 'É necessário preencher o campo "Nome"' });
    // }

    // if (!(this.novoAluno.cpf)) {
    //   prosseguir = false;
    //   this.messageService.add({ severity: 'warn', summary: 'Erro', detail: 'É necessário preencher o campo "CPF"' });
    // }

    // if (!(this.novoAluno.email)) {
    //   prosseguir = false;
    //   this.messageService.add({ severity: 'warn', summary: 'Erro', detail: 'É necessário preencher o campo "Email"' });
    // }

    // if (!(this.sexoSelecionado)) {
    //   prosseguir = false;
    //   this.messageService.add({ severity: 'warn', summary: 'Erro', detail: 'É necessário escolher algum dos Sexos' });
    // }

    // if (!(this.planoSelecionado)) {
    //   prosseguir = false;
    //   this.messageService.add({ severity: 'warn', summary: 'Erro', detail: 'É necessário escolher algum dos Planos' });
    // }

    // if ((!(this.unidadeSelecionada))) {
    //   if (this.planoSelecionado && this.planoSelecionado.value == PlanoEnum.ESSENTIAL) {
    //     prosseguir = false;
    //     this.messageService.add({ severity: 'warn', summary: 'Erro', detail: 'É necessário escolher algum dos Planos' });
    //   }
    // }

    // if (!(this.novoAluno.telefone)) {
    //   prosseguir = false;
    //   this.messageService.add({ severity: 'warn', summary: 'Erro', detail: 'É necessário preencher o campo "Telefone"' });
    // }

    //Validação dados de Endereço
    // if (!(this.novoAluno.endereco.descricao)) {
    //   prosseguir = false;
    //   this.messageService.add({ severity: 'warn', summary: 'Erro', detail: 'É necessário preencher o campo "Nome"' });
    // }

    // if (!(this.novoAluno.endereco.cidade)) {
    //   prosseguir = false;
    //   this.messageService.add({ severity: 'warn', summary: 'Erro', detail: 'É necessário preencher o campo "Nome"' });
    // }

    // if (!(this.novoAluno.endereco.estado)) {
    //   prosseguir = false;
    //   this.messageService.add({ severity: 'warn', summary: 'Erro', detail: 'É necessário preencher o campo "Nome"' });
    // }

    // if (!(this.novoAluno.endereco.cep)) {
    //   prosseguir = false;
    //   this.messageService.add({ severity: 'warn', summary: 'Erro', detail: 'É necessário preencher o campo "Nome"' });
    // }

    //Validação de senha
    // if (!(this.novoAluno.usuario)) {
    //   prosseguir = false;
    //   this.messageService.add({ severity: 'warn', summary: 'Erro', detail: 'É necessário preencher o campo "Nome"' });
    // }
    // if (!(this.novoAluno.nome)) {
    //   prosseguir = false;
    //   this.messageService.add({ severity: 'warn', summary: 'Erro', detail: 'É necessário preencher o campo "Nome"' });
    // }

    if (prosseguir) {
      this.cadastrar();
    }
  }
}

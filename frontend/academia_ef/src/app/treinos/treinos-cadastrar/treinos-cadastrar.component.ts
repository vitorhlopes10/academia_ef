import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem, MessageService } from 'primeng/api';
import { AlunoInterface } from 'src/app/models/interfaces/aluno-interface';
import { TreinoModel } from 'src/app/models/treino-model';
import { AlunoService } from 'src/app/services/aluno.service';
import { TreinoService } from 'src/app/services/treino.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-treinos-cadastrar',
  templateUrl: './treinos-cadastrar.component.html'
})
export class TreinosCadastrarComponent implements OnInit {

  novoTreino: TreinoModel = new TreinoModel();

  alunos: AlunoInterface[] = [];

  loading: boolean = false;
  home: MenuItem = { icon: 'pi pi-home', routerLink: '/' };
  items: MenuItem[] = [{ label: 'Treinos' }, { label: 'Cadastrar Treino' }];

  constructor(private treinoServico: TreinoService,
    private alunoService: AlunoService,
    private usuarioService: UsuarioService,
    private router: Router,
    private messageService: MessageService) { }

  ngOnInit(): void {
    this.buscarAlunos();
  }

  buscarAlunos() {
    this.loading = true;

    this.alunoService.buscarTodos().subscribe(
      list => {
        this.alunos = list.sort();
        this.loading = false;
      },
      () => {
        this.loading = false;
        this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Ocorreu um erro ao tentar buscar os Alunos' });
      }
    )
  }

  cadastrar() {
    this.loading = true;
    this.prepararParaEnvio();

    this.treinoServico.cadastrar(this.novoTreino).subscribe(
      () => {
        this.loading = false;
        this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: 'Treino inserido com sucesso!' });
        this.router.navigate(['treinos'])
      },
      () => {
        this.loading = false;
        this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Ocorreu um erro ao tentar inserir o Treino' });
      },
      () => { }
    )
  }

  prepararParaEnvio() {
    this.novoTreino.idFuncionario = Number.parseInt(this.usuarioService.getUsuarioSessao().id);
  }

  voltar() {
    this.router.navigate(['treinos']);
  }

  validarCadastro() {
    let prosseguir = true;

    if (!(this.novoTreino.descricao)) {
      prosseguir = false;
      this.messageService.add({ severity: 'warn', summary: 'Erro', detail: 'É necessário preencher o campo Descrição' });
    }

    if (!(this.novoTreino.idAluno)) {
      prosseguir = false;
      this.messageService.add({ severity: 'warn', summary: 'Erro', detail: 'É necessário escolher um Aluno' });
    }

    if (prosseguir) {
      this.cadastrar();
    }
  }
}

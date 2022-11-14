import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SelectItem, MenuItem, MessageService } from 'primeng/api';
import { AlunoInterface } from 'src/app/models/interfaces/aluno-interface';
import { TreinoModel } from 'src/app/models/treino-model';
import { AlunoService } from 'src/app/services/aluno.service';
import { TreinoService } from 'src/app/services/treino.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-treinos-editar',
  templateUrl: './treinos-editar.component.html'
})
export class TreinosEditarComponent implements OnInit {

  treino: TreinoModel = new TreinoModel();
  id: number = 0;

  alunos: AlunoInterface[] = [];

  loading: boolean = false;
  home: MenuItem = { icon: 'pi pi-home', routerLink: '/' };
  items: MenuItem[] = [{ label: 'Treinos' }, { label: 'Cadastrar Treino' }];


  constructor(private treinoServico: TreinoService,
    private alunoService: AlunoService,
    private usuarioService: UsuarioService,
    private router: Router,
    private messageService: MessageService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = Number.parseInt(this.route.snapshot.params["parametro"]);

    this.buscarAlunos();
    this.buscarPorId();
  }

  buscarPorId() {
    this.loading = true;

    this.treinoServico.buscarPorId(this.id).subscribe(
      obj => {
        this.treino.descricao = obj.descricao;
        this.treino.idAluno = obj.idAluno;

        this.loading = false;
      },
      () => {
        this.loading = false;
        this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Ocorreu algum erro ao tentar buscar o Treino' });
      }
    );
  }

  buscarAlunos() {
    this.loading = true;
    this.prepararParaEnvio();

    this.alunoService.buscarTodos().subscribe(
      list => {
        this.alunos = list;
        this.loading = false;
      },
      () => {
        this.loading = false;
        this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Ocorreu algum erro ao tentar buscar os Alunos' });
      }
    )
  }

  atualizar() {
    this.loading = true;

    this.treinoServico.editar(this.treino).subscribe(
      () => {
        this.loading = false;
        this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: 'Treino atualizado com sucesso!' });
      },
      () => {
        this.loading = false;
        this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Ocorreu algum erro ao tentar atualizar o Treino' });
      },
      () => { }
    )
  }

  prepararParaEnvio() {
    this.treino.id = this.id;
    this.treino.idFuncionario = Number.parseInt(this.usuarioService.getUsuarioSessao().id);
  }

  voltar() {
    this.router.navigate(['treinos']);
  }

  validarCadastro() {
    let prosseguir = true;

    if (!(this.treino.descricao)) {
      prosseguir = false;
      this.messageService.add({ severity: 'warn', summary: 'Erro', detail: 'É necessário preencher o campo Descrição' });
    }

    if (this.treino.idAluno == 0) {
      prosseguir = false;
      this.messageService.add({ severity: 'warn', summary: 'Erro', detail: 'É necessário escolher um Aluno' });
    }

    if (prosseguir) {
      this.atualizar();
    }
  }
}

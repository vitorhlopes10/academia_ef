import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, MenuItem, MessageService } from 'primeng/api';
import { TreinoFiltro } from '../models/filtros/treino-filtro';
import { TreinoInterface } from '../models/interfaces/treino-interface';
import { TreinoService } from '../services/treino.service';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-meus-treinos-aluno',
  templateUrl: './meus-treinos-aluno.component.html'
})
export class MeusTreinosAlunoComponent implements OnInit {

  treinos: TreinoInterface[] = [];
  filtro: TreinoFiltro = new TreinoFiltro();
  idAluno: number = 0;

  loading: boolean = false;
  home: MenuItem = { icon: 'pi pi-home', routerLink: '/' };
  items: MenuItem[] = [{ label: 'Meus Treinos' }];

  constructor(private treinoService: TreinoService,
    private usuarioService: UsuarioService,
    private router: Router,
    private messageService: MessageService) { }

  ngOnInit(): void {
    this.idAluno = Number.parseInt(this.usuarioService.getUsuarioSessao().id);
    this.buscarTreinos();
  }

  buscarTreinos() {
    this.loading = true;
    this.treinoService.buscarTodosPorAluno(this.idAluno).subscribe(
      list => {
        this.treinos = list;
        this.loading = false;
      },
      () => {
        this.loading = false;
        this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Ocorreu um erro na busca pelos Treinos' });
      },
      () => {}
    );
  }

  detalhes(id: number) {
    this.router.navigate([`meus-treinos/treino-detalhado/${id}`]);
  }

  limpar() {
    this.filtro = new TreinoFiltro();
  }

  buscar() {
    this.loading = true;
    this.filtro.idAluno = this.idAluno;

    if (!(this.filtro.dataInicial) && !(this.filtro.dataFinal)) {
      this.buscarTreinos();
      return;
    }

    this.treinoService.filtro(this.filtro).subscribe(
      list => {
        this.treinos = list;
        this.loading = false;
      },
      () => {
        this.loading = false;
        this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Ocorreu um erro na busca pelos Treinos' });
      }
    );
  }
}

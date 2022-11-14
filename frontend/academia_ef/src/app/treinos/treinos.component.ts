import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem, ConfirmationService, MessageService } from 'primeng/api';
import { TreinoFiltro } from '../models/filtros/treino-filtro';
import { TreinoInterface } from '../models/interfaces/treino-interface';
import { TreinoService } from '../services/treino.service';

@Component({
  selector: 'app-treinos',
  templateUrl: './treinos.component.html'
})
export class TreinosComponent implements OnInit {

  treinos: TreinoInterface[] = [];
  filtro: TreinoFiltro = new TreinoFiltro();

  loading: boolean = false;
  home: MenuItem = { icon: 'pi pi-home', routerLink: '/' };
  items: MenuItem[] = [{ label: 'Treinos' }];

  constructor(private treinoService: TreinoService,
    private router: Router,
    private confirmationService: ConfirmationService,
    private messageService: MessageService) { }

  ngOnInit(): void {
    this.buscarTreinos();
  }

  buscarTreinos() {
    this.loading = true;
    this.treinoService.buscarTodos().subscribe(
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

  cadastrar() {
    this.router.navigate(['treinos/cadastrar']);
  }

  detalhes(id: number) {
    this.router.navigate([`treinos/detalhes/${id}`]);
  }

  confirmarEdicao(id: number) {
    this.confirmationService.confirm({
      message: 'Você realmente deseja editar este item?',
      header: 'Confirmação de Edição',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.editar(id);
      },
      reject: () => {
        this.loading = false;
        this.messageService.add({ severity: 'warn', summary: 'Cancelado', detail: 'Você optou por não prosseguir com a edição' });
      }
    });
  }

  editar(id: number) {
    this.router.navigate([`treinos/editar/${id}`]);
  }

  confirmarDelecao(id: number) {
    this.confirmationService.confirm({
      message: 'Você realmente deseja deletar este item?',
      header: 'Confirmação de Deleção',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.loading = true;
        this.deletar(id);
      },
      reject: () => {
        this.loading = false;
        this.messageService.add({ severity: 'warn', summary: 'Cancelado', detail: 'Você optou por não prosseguir com a deleção' });
      }
    });
  }

  deletar(id: number) {
    this.treinoService.deletar(id).subscribe(
      () => {
        this.buscarTreinos();
        this.messageService.add({ severity: 'success', summary: 'Confirmado', detail: 'Treino deletado com sucesso' });
      },
      () => {
        this.loading = false;
        this.messageService.add({ severity: 'error', summary: 'Cancelado', detail: 'Ocorreu um erro na deleção do Treino' });
      }
    );
  }

  limpar() {
    this.filtro = new TreinoFiltro();
  }

  buscar() {
    this.loading = true;

    if (!(this.filtro.nomeAluno) && !(this.filtro.dataInicial) && !(this.filtro.dataFinal)) {
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

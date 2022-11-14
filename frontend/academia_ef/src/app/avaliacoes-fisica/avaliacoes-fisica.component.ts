import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MenuItem, MessageService } from 'primeng/api';
import { AvaliacaoFisicaFiltro } from '../models/filtros/avaliacao-fisica-filtro';
import { AvaliacaoFisicaInterface } from '../models/interfaces/avaliacao-fisica-interface';
import { Router } from '@angular/router';
import { AvaliacaoFisicaService } from '../services/avaliacao-fisica.service';

@Component({
  selector: 'app-avaliacoes-fisica',
  templateUrl: './avaliacoes-fisica.component.html'
})
export class AvaliacoesFisicaComponent implements OnInit {

  avaliacoesFisica: AvaliacaoFisicaInterface[] = [];
  filtro: AvaliacaoFisicaFiltro = new AvaliacaoFisicaFiltro();

  loading: boolean = false;
  home: MenuItem = { icon: 'pi pi-home', routerLink: '/' };
  items: MenuItem[] = [{ label: 'Avaliacões Fisica' }];

  constructor(private avaliacaoFisicaService: AvaliacaoFisicaService,
    private router: Router,
    private confirmationService: ConfirmationService,
    private messageService: MessageService) { }

  ngOnInit(): void {
    this.buscarAvaliacoesFisica();
  }

  buscarAvaliacoesFisica() {
    this.loading = true;
    this.avaliacaoFisicaService.buscarTodos().subscribe(
      list => {
        this.avaliacoesFisica = list;
        this.loading = false;
      },
      () => {
        this.loading = false;
        this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Ocorreu um erro na busca pelos Avaliações Fisica' });
      },
      () => { }
    );
  }

  cadastrar() {
    this.router.navigate(['avaliacoes-fisica/cadastrar']);
  }

  detalhes(id: number) {
    this.router.navigate([`avaliacoes-fisica/detalhes/${id}`]);
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
    this.router.navigate([`avaliacoes-fisica/editar/${id}`]);
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
    this.avaliacaoFisicaService.deletar(id).subscribe(
      () => {
        this.buscarAvaliacoesFisica();
        this.messageService.add({ severity: 'success', summary: 'Confirmado', detail: 'Avaliação Física deletado com sucesso' });
      },
      () => {
        this.loading = false;
        this.messageService.add({ severity: 'error', summary: 'Cancelado', detail: 'Ocorreu um erro na deleção da Avaliação Física' });
      }
    );
  }

  limpar() {
    this.filtro = new AvaliacaoFisicaFiltro();
  }

  buscar() {
    this.loading = true;

    if (!(this.filtro.nomeAluno) && !(this.filtro.dataInicial) && !(this.filtro.dataFinal)) {
      this.buscarAvaliacoesFisica();
      return
    }

    this.avaliacaoFisicaService.filtro(this.filtro).subscribe(
      list => {
        this.avaliacoesFisica = list;
        this.loading = false;
      },
      () => {
        this.avaliacoesFisica = [];
        this.loading = false;
      }
    );
  }
}

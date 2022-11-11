import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem, MessageService } from 'primeng/api';
import { AvaliacaoFisicaFiltro } from '../models/filtros/avaliacao-fisica-filtro';
import { AvaliacaoFisicaInterface } from '../models/interfaces/avaliacao-fisica-interface';
import { AvaliacaoFisicaService } from '../services/avaliacao-fisica.service';

@Component({
  selector: 'app-minhas-avaliacoes-fisica-aluno',
  templateUrl: './minhas-avaliacoes-fisica-aluno.component.html',
  styleUrls: ['./minhas-avaliacoes-fisica-aluno.component.css']
})
export class MinhasAvaliacoesFisicaAlunoComponent implements OnInit {

  avaliacoesFisica: AvaliacaoFisicaInterface[] = [];
  filtro: AvaliacaoFisicaFiltro = new AvaliacaoFisicaFiltro();
  idAluno: number = 0;

  loading: boolean = false;
  home: MenuItem = { icon: 'pi pi-home', routerLink: '/' };
  items: MenuItem[] = [{ label: 'Minhas Avaliacões Física' }];

  constructor(private avaliacaoFisicaService: AvaliacaoFisicaService,
    private router: Router,
    private messageService: MessageService) { }

  ngOnInit(): void {
    this.idAluno = 1;
    this.buscarAvaliacoesFisica();
  }

  buscarAvaliacoesFisica() {
    this.loading = true;

    this.avaliacaoFisicaService.buscarTodosPorAluno(this.idAluno).subscribe(
      list => {
        this.avaliacoesFisica = list;
        this.loading = false;
      },
      () => {
        this.loading = false;
        this.messageService.add({ severity: 'danger', summary: 'Erro', detail: 'Ocorreu um erro na busca pelas Avaliações Fisica' });
      },
      () => { }
    );
  }

  detalhes(id: number) {
    this.router.navigate([`minhas-avaliacoes-fisica/avaliacao-detalhada/${id}`]);
  }

  limpar() {
    this.filtro = new AvaliacaoFisicaFiltro();
  }

  buscar() {
    this.loading = true;
    this.filtro.idAluno = this.idAluno;

    if (!(this.filtro.dataInicial) && !(this.filtro.dataFinal)) {
      this.buscarAvaliacoesFisica();
      return;
    }

    this.avaliacaoFisicaService.filtro(this.filtro).subscribe(
      list => {
        this.avaliacoesFisica = list;
        this.loading = false;
      },
      () => {
        this.loading = false;
        this.messageService.add({ severity: 'danger', summary: 'Erro', detail: 'Ocorreu um erro na busca pelas Avaliações Fisica' });
      }
    );
  }
}

import { Component, OnInit } from '@angular/core';
import { AvaliacaoFisicaModel } from '../models/avaliacao-fisica-model';
import { AvaliacaoFisicaService } from '../services/avaliacao-fisica.service';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-avaliacoes-fisica',
  templateUrl: './avaliacoes-fisica.component.html',
  styleUrls: ['./avaliacoes-fisica.component.css']
})
export class AvaliacoesFisicaComponent implements OnInit {

  alunos: AvaliacaoFisicaModel[] = [];

  loading: boolean = false;
  home: MenuItem = {icon: 'pi pi-home', routerLink: '/'};
  items: MenuItem[] = [{label: 'Alunos'}];

  constructor(private avaliacaoFisicaService: AvaliacaoFisicaService) { }

  ngOnInit(): void {
    // this.buscarAvaliacoes();
  }

  // buscarAvaliacoes() {
  //   this.loading = true;
  //   this.buscarTodos().subscribe(
  //     success => {
  //       this.alunos = success;
  //       this.loading = false;
  //     },
  //     error => {
  //       console.log(error.message);
  //       this.loading = false;
  //     },
  //     () => {
  //       this.loading = false;
  //     }
  //   );
  // }

  // editAluno(aluno: AlunoModel) {

  // }

  // deleteAluno(id: number) {

  // }

}

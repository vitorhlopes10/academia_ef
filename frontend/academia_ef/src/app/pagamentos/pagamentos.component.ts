import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem, ConfirmationService, MessageService } from 'primeng/api';
import { AlunoFiltro } from '../models/filtros/aluno-filtro';
import { PagamentoFiltro } from '../models/filtros/pagamento-filtro';
import { AlunoInterface } from '../models/interfaces/aluno-interface';
import { AlunoService } from '../services/aluno.service';

@Component({
  selector: 'app-pagamentos',
  templateUrl: './pagamentos.component.html',
  styleUrls: ['./pagamentos.component.css']
})
export class PagamentosComponent implements OnInit {

  alunos: AlunoInterface[] = [];
  filtro: AlunoFiltro = new AlunoFiltro();

  loading: boolean = false;
  home: MenuItem = { icon: 'pi pi-home', routerLink: '/' };
  items: MenuItem[] = [{ label: 'Alunos' }];

  constructor(private alunoService: AlunoService,
    private router: Router,
    private messageService: MessageService) { }

  ngOnInit(): void {
    this.buscarAlunos();
  }

  buscarAlunos() {
    this.loading = true;
    this.alunoService.buscarTodos().subscribe(
      list => {
        this.alunos = list;
        this.loading = false;
      },
      () => {
        this.loading = false;
        this.messageService.add({ severity: 'Erro', summary: 'Cancelado', detail: 'Ocorreu um erro na busca pelos Alunos' });
      }
    );
  }

  buscar() {
    if (!(this.filtro.cpf) && !(this.filtro.nome) && !(this.filtro.matricula)) {
      this.buscarAlunos();
      return
    }

    this.loading = true;
    this.alunoService.filtro(this.filtro).subscribe(
      list => {
        this.alunos = list;
        this.loading = false;
      },
      () => {
        this.loading = false;
        this.messageService.add({ severity: 'Erro', summary: 'Cancelado', detail: 'Ocorreu um erro na busca pelos Alunos' });
      }
    );
  }

  limpar() {
    this.filtro.cpf = '';
    this.filtro.nome = '';
    this.filtro.matricula = '';
  }

  verificar(id: number) {
    this.router.navigate([`pagamentos/pagamentos-detalhados/${id}`]);
  }
}

import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { PagamentoFiltro } from '../models/filtros/pagamento-filtro';
import { PagamentoMensalidadeInterface } from '../models/interfaces/pagamento-mensalidade-interface';
import { PagamentoMensalidadeService } from '../services/pagamento-mensalidade.service';

@Component({
  selector: 'app-meus-pagamentos-aluno',
  templateUrl: './meus-pagamentos-aluno.component.html',
  styleUrls: ['./meus-pagamentos-aluno.component.css']
})
export class MeusPagamentosAlunoComponent implements OnInit {

  pagamentos: PagamentoMensalidadeInterface[] = [];
  idAluno: number = 0;
  statusMensalidade: string = '';

  filtro: PagamentoFiltro = new PagamentoFiltro();

  loading: boolean = false;
  home: MenuItem = { icon: 'pi pi-home', routerLink: '/' };
  items: MenuItem[] = [{ label: 'Meus Pagamentos' }];

  constructor(private pagamentoMensalidadeService: PagamentoMensalidadeService,
    private messageService: MessageService) { }

  ngOnInit(): void {
    this.idAluno = 1;
    this.buscarPagamentos();
  }

  buscarPagamentos() {
    this.loading = true;
    this.pagamentoMensalidadeService.buscarTodosPorAluno(this.idAluno).subscribe(
      list => {
        this.pagamentos = list;

        const hoje = new Date();
        const diaDataVencimento = this.pagamentos[0].acordoMensalidade.diaDataVencimento;

        const ocorreuPagamentoDoMes = this.pagamentos
          .some(pagamento => new Date(pagamento.dataPagamento).getMonth() === hoje.getMonth() &&
            new Date(pagamento.dataPagamento).getFullYear() === hoje.getFullYear());

        if (ocorreuPagamentoDoMes) {
          this.statusMensalidade = 'EM_DIA';
        } else if (!(ocorreuPagamentoDoMes) && hoje.getDate() > diaDataVencimento) {
          this.statusMensalidade = 'PENDENTE';
        } else {
          this.statusMensalidade = 'EM_DEBITO';
        }

        this.loading = false;
      },
      () => {
        this.loading = false;
        this.messageService.add({ severity: 'danger', summary: 'Cancelado', detail: 'Ocorreu um erro na busca pelos Pagamentos' });
      }
    );
  }

  limpar() {
    this.filtro = new PagamentoFiltro();
  }

  buscar() {
    this.loading = true;
    this.filtro.idAluno = this.idAluno;

    if (!(this.filtro.dataInicial) && !(this.filtro.dataFinal)) {
      this.buscarPagamentos();
      return;
    }

    this.pagamentoMensalidadeService.filtro(this.filtro).subscribe(
      list => {
        this.pagamentos = list;
        this.loading = false;
      },
      () => {
        this.loading = false;
        this.messageService.add({ severity: 'danger', summary: 'Erro', detail: 'Ocorreu um erro na busca pelo Pagamento' });
      }
    );
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuItem, ConfirmationService, MessageService } from 'primeng/api';
import { PagamentoFiltro } from 'src/app/models/filtros/pagamento-filtro';
import { PagamentoMensalidadeInterface } from 'src/app/models/interfaces/pagamento-mensalidade-interface';
import { PagamentoMensalidadeModel } from 'src/app/models/pagamento-mensalidade-model';
import { PagamentoMensalidadeService } from 'src/app/services/pagamento-mensalidade.service';

@Component({
  selector: 'app-pagamentos-detalhados',
  templateUrl: './pagamentos-detalhados.component.html',
  styleUrls: ['./pagamentos-detalhados.component.css']
})
export class PagamentosDetalhadosComponent implements OnInit {

  pagamentoDetalhado!: PagamentoMensalidadeInterface;
  novoPagamento: PagamentoMensalidadeModel = new PagamentoMensalidadeModel();
  pagamentos: PagamentoMensalidadeInterface[] = [];
  filtro: PagamentoFiltro = new PagamentoFiltro();

  idAluno: number = 0;

  mostrarModalVisualizacao: boolean = false;
  mostrarModalRegistroPagamento: boolean = false;
  loading: boolean = false;
  home: MenuItem = { icon: 'pi pi-home', routerLink: '/' };
  items: MenuItem[] = [{ label: 'Alunos' }, { label: 'Pagamentos por Aluno' }];

  constructor(private pagamentoMensalidadeService: PagamentoMensalidadeService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.idAluno = this.route.snapshot.params["parametro"];
    this.buscarPagamentos();
  }

  buscarPagamentos() {
    this.loading = true;
    this.pagamentoMensalidadeService.buscarTodosPorAluno(this.idAluno).subscribe(
      list => {
        this.pagamentos = list;
        this.loading = false;
      },
      () => {
        this.loading = false;
        this.messageService.add({ severity: 'danger', summary: 'Cancelado', detail: 'Ocorreu um erro na busca pelos pagamentos' });
      }
    );
  }

  abrirModalRegistroPagamento() {
    this.mostrarModalRegistroPagamento = true;
  }

  fecharModalDeRegistro() {
    this.mostrarModalRegistroPagamento = false;
  }

  confirmarRegistroDePagamento() {
    this.confirmationService.confirm({
      message: 'Você realmente confirma esse pagamento?',
      header: 'Confirmação de Registro de Pagamento',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.loading = true;
        this.cadastrar();
      },
      reject: () => {
        this.messageService.add({ severity: 'warn', summary: 'Cancelado', detail: 'Você optou por não prosseguir com o registro de pagamento' });
      }
    });
  }

  abrirModalDetalhesDoPagamento(id: number) {
    this.mostrarModalVisualizacao = true;
    this.buscarPorId(id);
  }

  fecharModalDeVisualizacao() {
    this.mostrarModalVisualizacao = false;
  }

  cadastrar() {
    this.loading = true;

    this.pagamentoMensalidadeService.cadastrar(this.novoPagamento).subscribe(
      () => {
        this.loading = false;
        this.messageService.add({ severity: 'danger', summary: 'Erro', detail: 'Ocorreu um erro no registro do Pagamento' });
        this.buscarPagamentos();
      }, 
      () => {
        this.loading = false;
        this.messageService.add({ severity: 'danger', summary: 'Erro', detail: 'Ocorreu um erro no registro do Pagamento' });
      }
    )
  }

  confirmarDelecao(id: number) {
    this.confirmationService.confirm({
      message: 'Você realmente deseja deletar este pagamento?',
      header: 'Confirmação de Deleção de Pagamento',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.loading = true;
        this.deletar(id);
      },
      reject: () => {
        this.messageService.add({ severity: 'warn', summary: 'Cancelado', detail: 'Você optou por não prosseguir com a deleção' });
      }
    });
  }

  deletar(id: number) {
    this.pagamentoMensalidadeService.deletar(id).subscribe(
      () => {
        this.buscarPagamentos();
        this.messageService.add({ severity: 'success', summary: 'Confirmado', detail: 'Pagamento deletado com sucesso' });
        this.loading = false;
      },
      () => {
        this.loading = false;
        this.messageService.add({ severity: 'danger', summary: 'Erro', detail: 'Ocorreu um erro na deleção do Pagamento' });
      }
    );
  }

  limpar() {
    this.filtro.dataInicial = new Date();
    this.filtro.dataFinal = new Date();
  }

  buscar() {
    this.loading = true;
    this.filtro.idAluno = this.idAluno;

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

  buscarPorId(id: number) {
    this.loading = true;

    this.pagamentoMensalidadeService.buscarPorId(id).subscribe(
      obj => {
        this.pagamentoDetalhado = obj;
        this.loading = false;
      },
      () => {
        this.loading = false;
        this.messageService.add({ severity: 'danger', summary: 'Erro', detail: 'Ocorreu um erro na busca pelo Pagamento' });
      }
    );
  }
}

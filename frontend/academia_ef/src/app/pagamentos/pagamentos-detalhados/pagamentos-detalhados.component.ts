import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuItem, ConfirmationService, MessageService } from 'primeng/api';
import { PagamentoFiltro } from 'src/app/models/filtros/pagamento-filtro';
import { PagamentoMensalidadeInterface } from 'src/app/models/interfaces/pagamento-mensalidade-interface';
import { PagamentoMensalidadeModel } from 'src/app/models/pagamento-mensalidade-model';
import { AlunoService } from 'src/app/services/aluno.service';
import { PagamentoMensalidadeService } from 'src/app/services/pagamento-mensalidade.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-pagamentos-detalhados',
  templateUrl: './pagamentos-detalhados.component.html'
})
export class PagamentosDetalhadosComponent implements OnInit {

  novoPagamento: PagamentoMensalidadeModel = new PagamentoMensalidadeModel();
  pagamentos: PagamentoMensalidadeInterface[] = [];

  filtro: PagamentoFiltro = new PagamentoFiltro();

  idAluno: number = 0;
  nomeAluno: string = '';
  idAcordoMensalidade: number = 0;
  valorPlano: number = 0;

  loading: boolean = false;
  home: MenuItem = { icon: 'pi pi-home', routerLink: '/' };
  items: MenuItem[] = [{ label: 'Alunos' }, { label: 'Pagamentos por Aluno' }];

  constructor(private pagamentoMensalidadeService: PagamentoMensalidadeService,
    private alunoService: AlunoService,
    private usuarioService: UsuarioService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.idAluno = Number.parseInt(this.route.snapshot.params["parametro"]);
    this.buscarPagamentos();
    this.buscarAluno();
  }

  buscarAluno() {
    this.alunoService.buscarPorId(this.idAluno).subscribe(
      obj => {
        this.nomeAluno = obj.nome;
        this.valorPlano = obj.plano.valor;
        this.idAcordoMensalidade = obj.idAcordoMensalidade;
      },
      () => {
        this.messageService.add({ severity: 'error', summary: 'Cancelado', detail: 'Ocorreu um erro na busca pelos pagamentos' });
      }
    );
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
        this.messageService.add({ severity: 'error', summary: 'Cancelado', detail: 'Ocorreu um erro na busca pelos pagamentos' });
      }
    );
  }

  confirmarRegistroDePagamento() {
    this.confirmationService.confirm({
      message: `Deseja confirmar o Registro de Pagamento do mês atual do(a) aluno(a): ${this.nomeAluno}`,
      header: 'Confirmação de Registro de Pagamento',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.loading = true;
        this.registrarPagamento();
      },
      reject: () => {
        this.messageService.add({ severity: 'warn', summary: 'Cancelado', detail: 'Você optou por não prosseguir com o registro de pagamento' });
      }
    });
  }

  registrarPagamento() {
    this.loading = true;

    this.novoPagamento.valorPago = this.valorPlano;
    this.novoPagamento.idAcordoMensalidade = this.idAcordoMensalidade;
    this.novoPagamento.idFuncionario = Number.parseInt(this.usuarioService.getUsuarioSessao().id);

    this.pagamentoMensalidadeService.registrarPagamento(this.novoPagamento).subscribe(
      () => {
        this.loading = false;
        this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: 'O Pagamento foi registrado com sucesso' });
        this.buscarPagamentos();
      },
      () => {
        this.loading = false;
        this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Ocorreu um erro no registro do Pagamento' });
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
        this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Ocorreu um erro na deleção do Pagamento' });
      }
    );
  }

  limpar() {
    this.filtro = new PagamentoFiltro;
  }

  buscar() {
    this.loading = true;
    this.filtro.idAluno = this.idAluno;

    if (!(this.filtro.dataFinal) && !(this.filtro.dataInicial)) {
      this.buscarPagamentos();
      return
    }

    this.pagamentoMensalidadeService.filtro(this.filtro).subscribe(
      list => {
        this.pagamentos = list;
        this.loading = false;
      },
      () => {
        this.loading = false;
        this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Ocorreu um erro na busca pelo Pagamento' });
      }
    );
  }
}

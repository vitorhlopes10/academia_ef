import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { PatrimonioService } from '../services/patrimonio.service';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { PatrimonioInterface } from '../models/interfaces/patrimonio-interface';

@Component({
  selector: 'app-patrimonio',
  templateUrl: './patrimonio.component.html',
  styleUrls: ['./patrimonio.component.css']
})
export class PatrimonioComponent implements OnInit {

  patrimonio: PatrimonioInterface[] = [];
  valorTotalPatrimonio: number = 0;
  nomeProduto: string = '';

  loading: boolean = false;
  home: MenuItem = { icon: 'pi pi-home', routerLink: '/' };
  items: MenuItem[] = [{ label: 'Patrimônio' }];

  constructor(private patrimonioService: PatrimonioService,
    private router: Router,
    private confirmationService: ConfirmationService,
    private messageService: MessageService) { }

  ngOnInit(): void {
    this.buscarPatrimonio();
  }

  buscarPatrimonio() {
    this.loading = true;
    this.patrimonioService.buscarTodos().subscribe(
      success => {
        this.patrimonio = success;
        this.valorTotalPatrimonio = 0;

        const valoresPorProduto = this.patrimonio.map(x => x.valorPago);
        valoresPorProduto.forEach(x => this.valorTotalPatrimonio += x);

        this.loading = false;
      },
      () => {
        this.patrimonio = [];
        this.valorTotalPatrimonio = 0;
        this.loading = false;
      }
    );
  }

  cadastrar() {
    this.router.navigate(['patrimonio/cadastrar']);
  }

  detalhes(id: number) {
    this.router.navigate([`patrimonio/detalhes/${id}`]);
  }

  confirmarEdicao(id: number) {
    this.confirmationService.confirm({
      message: 'Você realmente deseja editar este item?',
      header: 'Confirmação de Edição',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.loading = true;
        this.editar(id);
      },
      reject: () => {
        this.messageService.add({ severity: 'warn', summary: 'Cancelado', detail: 'Você optou por não prosseguir com a edição' });
      }
    });
  }

  editar(id: number) {
    this.router.navigate([`patrimonio/editar/${id}`]);
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
        this.messageService.add({ severity: 'warn', summary: 'Cancelado', detail: 'Você optou por não prosseguir com a deleção' });
      }
    });
  }

  deletar(id: number) {
    this.patrimonioService.deletar(id).subscribe(
      () => {
        this.buscarPatrimonio();
        this.messageService.add({ severity: 'success', summary: 'Confirmado', detail: 'Item deletado com sucesso' });
        this.loading = false;
      },
      () => {
        this.messageService.add({ severity: 'danger', summary: 'Cancelado', detail: 'Ocorreu um erro na deleção do item' });
      }
    );
  }

  limpar() {
    this.nomeProduto = '';
  }

  buscar() {
    if (!(this.nomeProduto)) {
      this.buscarPatrimonio();
      return
    }

    this.loading = true;
    this.patrimonioService.filtro(this.nomeProduto.trim()).subscribe(
      success => {
        this.patrimonio = success;
        this.loading = false;
      },
      () => {
        this.patrimonio = [];
        this.valorTotalPatrimonio = 0;
        this.loading = false;
      }
    );
  }
}

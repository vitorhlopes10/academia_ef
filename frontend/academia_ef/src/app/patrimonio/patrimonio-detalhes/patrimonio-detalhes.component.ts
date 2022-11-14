import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService, MenuItem, MessageService } from 'primeng/api';
import { PatrimonioModel } from 'src/app/models/patrimonio-model';
import { PatrimonioService } from 'src/app/services/patrimonio.service';

@Component({
  selector: 'app-patrimonio-detalhes',
  templateUrl: './patrimonio-detalhes.component.html'
})
export class PatrimonioDetalhesComponent implements OnInit {

  itemProduto: PatrimonioModel = new PatrimonioModel();

  loading: boolean = false;
  home: MenuItem = { icon: 'pi pi-home', routerLink: '/' };
  items: MenuItem[] = [{ label: 'Patrimônio' }, { label: 'Visualizar Item Patrimônio' }];

  constructor(private patrimonioService: PatrimonioService,
    private router: Router,
    private messageService: MessageService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.loading = true;
    const id = this.route.snapshot.params["parametro"];

    this.patrimonioService.buscarPorId(Number.parseInt(id)).subscribe(
      success => {
        this.itemProduto.nome = success.nome;
        this.itemProduto.descricao = success.descricao;
        this.itemProduto.valorPago = success.valorPago;

        this.loading = false;
      },
      () => {
        this.loading = false;
        this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Ocorreu algum erro ao tentar buscar o produto' });
      }
    );
  }

  voltar() {
    this.router.navigate(['patrimonio']);
  }
}

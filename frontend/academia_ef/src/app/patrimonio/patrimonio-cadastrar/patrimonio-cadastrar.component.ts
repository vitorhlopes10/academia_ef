import { Component, OnInit } from '@angular/core';
import { PatrimonioModel } from 'src/app/models/patrimonio-model';
import { MenuItem, MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { PatrimonioService } from 'src/app/services/patrimonio.service';

@Component({
  selector: 'app-patrimonio-cadastrar',
  templateUrl: './patrimonio-cadastrar.component.html',
  styleUrls: ['./patrimonio-cadastrar.component.css']
})
export class PatrimonioCadastrarComponent implements OnInit {

  itemProduto: PatrimonioModel = new PatrimonioModel();

  loading: boolean = false;
  home: MenuItem = { icon: 'pi pi-home', routerLink: '/' };
  items: MenuItem[] = [{ label: 'Patrimônio' }, { label: 'Cadastrar Item Patrimônio' }];

  constructor(private patrimonioService: PatrimonioService,
    private router: Router,
    private messageService: MessageService) { }

  ngOnInit(): void {
  }

  validarCadastro() {
    let prosseguir = true;

    if (!(this.itemProduto.nome)) {
      prosseguir = false;
      this.messageService.add({ severity: 'warn', summary: 'Erro', detail: 'É necessário preencher o campo "Nome"' });
    }

    if (!(this.itemProduto.descricao)) {
      prosseguir = false;
      this.messageService.add({ severity: 'warn', summary: 'Erro', detail: 'É necessário preencher o campo "Descrição"' });
    }

    if (!(this.itemProduto.valorPago) || this.itemProduto.valorPago <= 0) {
      prosseguir = false;
      this.messageService.add({ severity: 'warn', summary: 'Erro', detail: 'O campo "Valor Pago" está vazio ou não foi preenchido com um valor maior que 0' });
    }

    if (prosseguir) {
      this.cadastrar();
    }
  }

  cadastrar() {
    this.loading = true;

    this.itemProduto.nome = this.itemProduto.nome.trim().toUpperCase(); 
    this.itemProduto.descricao = this.itemProduto.descricao.trim().toUpperCase(); 
    this.itemProduto.idUsuario = 1;

    this.patrimonioService.cadastrar(this.itemProduto).subscribe(
      () => {
        this.loading = false;
        this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: 'Produto adicionado ao patrimônio com sucesso!' });
        this.router.navigate(['patrimonio']);
      },
      () => {
        this.loading = false;
        this.messageService.add({ severity: 'danger', summary: 'Erro', detail: 'Ocorreu algum erro ao tentar inserir o produto' });
      },
      () => { }
    )
  }

  voltar() {
    this.router.navigate(['patrimonio']);
  }
}

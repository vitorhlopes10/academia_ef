import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuItem, MessageService } from 'primeng/api';
import { PatrimonioModel } from 'src/app/models/patrimonio-model';
import { PatrimonioService } from 'src/app/services/patrimonio.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-patrimonio-editar',
  templateUrl: './patrimonio-editar.component.html'
})
export class PatrimonioEditarComponent implements OnInit {

  itemProduto: PatrimonioModel = new PatrimonioModel();

  loading: boolean = false;
  home: MenuItem = { icon: 'pi pi-home', routerLink: '/' };
  items: MenuItem[] = [{ label: 'Patrimônio' }, { label: 'Editar Item Patrimônio' }];

  constructor(private patrimonioService: PatrimonioService,
    private router: Router,
    private usuarioService: UsuarioService,
    private messageService: MessageService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.loading = true;
    const id = this.route.snapshot.params["parametro"];

    this.patrimonioService.buscarPorId(Number.parseInt(id)).subscribe(
      obj => {
        this.itemProduto.id = obj.id;
        this.itemProduto.nome = obj.nome;
        this.itemProduto.descricao = obj.descricao;
        this.itemProduto.valorPago = obj.valorPago;

        this.loading = false;
      },
      () => {
        this.loading = false;
        this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Ocorreu algum erro ao tentar buscar o produto' });
      }
    );
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
      this.editar();
    }
  }

  editar() {
    this.loading = true;

    this.itemProduto.nome = this.itemProduto.nome.trim().toUpperCase(); 
    this.itemProduto.descricao = this.itemProduto.descricao.trim().toUpperCase(); 
    this.itemProduto.idFuncionario = Number.parseInt(this.usuarioService.getUsuarioSessao().id);

    this.patrimonioService.editar(this.itemProduto).subscribe(
      () => {
        this.loading = false;
        this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: 'Produto editado com sucesso!' });
        this.router.navigate(['patrimonio'])
      },
      () => {
        this.loading = false;
        this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Ocorreu algum erro ao tentar editar o produto' });
      },
      () => { }
    )
  }

  voltar() {
    this.router.navigate(['patrimonio']);
  }
}

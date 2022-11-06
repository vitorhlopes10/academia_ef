import { Component, OnInit } from '@angular/core';
import { FuncionarioService } from '../services/funcionario.service';
import { ConfirmationService, MenuItem, MessageService } from 'primeng/api';
import { FuncionarioFiltro } from '../models/filtros/funcionario-filtro';
import { Router } from '@angular/router';
import { FuncionarioInterface } from '../models/interfaces/funcionario-model';

@Component({
  selector: 'app-funcionarios',
  templateUrl: './funcionarios.component.html',
  styleUrls: ['./funcionarios.component.css']
})
export class FuncionariosComponent implements OnInit {

  funcionarios: FuncionarioInterface[] = [];
  filtro: FuncionarioFiltro = new FuncionarioFiltro();

  loading: boolean = false;
  home: MenuItem = { icon: 'pi pi-home', routerLink: '/' };
  items: MenuItem[] = [{ label: 'Funcionarios' }];

  constructor(private funcionarioService: FuncionarioService,
    private router: Router,
    private confirmationService: ConfirmationService,
    private messageService: MessageService) { }

  ngOnInit(): void {
    this.buscarFuncionarios();
  }

  buscarFuncionarios() {
    this.loading = true;
    this.funcionarioService.buscarTodos().subscribe(
      success => {
        this.funcionarios = success;
        this.loading = false;
      },
      error => {
        this.loading = false;
      },
      () => {
        this.loading = false;
      }
    );
  }

  cadastrar() {
    this.router.navigate(['funcionarios/cadastrar']);
  }

  detalhes(id: number) {
    this.router.navigate([`funcionarios/detalhes/${id}`]);
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
    this.router.navigate([`funcionarios/editar/${id}`]);
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
    this.funcionarioService.deletar(id).subscribe(
      () => {
        this.buscarFuncionarios();
        this.messageService.add({ severity: 'success', summary: 'Confirmado', detail: 'Item deletado com sucesso' });
        this.loading = false;
      },
      () => {
        this.messageService.add({ severity: 'danger', summary: 'Cancelado', detail: 'Ocorreu um erro na deleção do item' });
      }
    );
  }

  limpar() {
    this.filtro.cpf = '';
    this.filtro.nome = '';
    this.filtro.matricula = '';
  }

  buscar() {
    if (!(this.filtro.cpf) && !(this.filtro.nome) && !(this.filtro.matricula)) {
      this.buscarFuncionarios();
      return
    }

    this.loading = true;
    this.funcionarioService.filtro(this.filtro).subscribe(
      list => {
        this.funcionarios = list;
        this.loading = false;
      },
      () => {
        this.funcionarios = [];
        this.loading = false;
      }
    );
  }

  ativar(id: number) {

  }

  inativar(id: number) {

  }
}

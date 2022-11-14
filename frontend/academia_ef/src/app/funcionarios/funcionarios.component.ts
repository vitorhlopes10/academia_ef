import { Component, OnInit } from '@angular/core';
import { FuncionarioService } from '../services/funcionario.service';
import { ConfirmationService, MenuItem, MessageService } from 'primeng/api';
import { FuncionarioFiltro } from '../models/filtros/funcionario-filtro';
import { Router } from '@angular/router';
import { FuncionarioInterface } from '../models/interfaces/funcionario-model';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-funcionarios',
  templateUrl: './funcionarios.component.html'
})
export class FuncionariosComponent implements OnInit {

  funcionarios: FuncionarioInterface[] = [];
  filtro: FuncionarioFiltro = new FuncionarioFiltro();

  loading: boolean = false;
  home: MenuItem = { icon: 'pi pi-home', routerLink: '/' };
  items: MenuItem[] = [{ label: 'Funcionarios' }];

  constructor(private funcionarioService: FuncionarioService,
    private usuarioService: UsuarioService,
    private router: Router,
    private confirmationService: ConfirmationService,
    private messageService: MessageService) { }

  ngOnInit(): void {
    this.buscarFuncionarios();
  }

  buscarFuncionarios() {
    this.loading = true;
    this.funcionarioService.buscarTodos().subscribe(
      list => {
        //Setando mascara do CPF
        list.forEach(x => x.cpf = x.cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4"))
        const idUsuarioSessao = Number.parseInt(this.usuarioService.getUsuarioSessao().id);

        this.funcionarios = list.filter(x => !(x.id === idUsuarioSessao));
        this.loading = false;
      },
      () => {
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

  confirmarAtivacao(id: number) {
    this.confirmationService.confirm({
      message: 'Você realmente deseja ativar esse Funcionário?',
      header: 'Confirmação de Ativação',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.loading = true;
        this.ativar(id);
      },
      reject: () => {
        this.messageService.add({ severity: 'warn', summary: 'Cancelado', detail: 'Você optou por não prosseguir com a ativação' });
      }
    });
  }

  confirmarInativacao(id: number) {
    this.confirmationService.confirm({
      message: 'Você realmente deseja inativar esse Funcionário?',
      header: 'Confirmação de Inativação',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.loading = true;
        this.inativar(id);
      },
      reject: () => {
        this.messageService.add({ severity: 'warn', summary: 'Cancelado', detail: 'Você optou por não prosseguir com a inativação' });
      }
    });
  }

  ativar(id: number) {
    this.funcionarioService.ativar(id).subscribe(
      () => {
        this.buscarFuncionarios();
        this.messageService.add({ severity: 'success', summary: 'Confirmado', detail: 'Funcionário ativado com sucesso' });
        this.loading = false;
      },
      () => {
        this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Ocorreu um erro na ativação do Funcionário' });
      }
    );
  }

  inativar(id: number) {
    this.funcionarioService.inativar(id).subscribe(
      () => {
        this.buscarFuncionarios();
        this.messageService.add({ severity: 'success', summary: 'Confirmado', detail: 'Funcionário inativado com sucesso' });
        this.loading = false;
      },
      () => {
        this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Ocorreu um erro na inativação do Funcionário' });
      }
    );
  }

  limpar() {
    this.filtro = new FuncionarioFiltro();
  }

  buscar() {
    if (!(this.filtro.cpf) && !(this.filtro.nome) && !(this.filtro.matricula)) {
      this.buscarFuncionarios();
      return
    }

    this.loading = true;
    this.funcionarioService.filtro(this.filtro).subscribe(
      list => {
        list.forEach(x => x.cpf = x.cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4"))

        this.funcionarios = list;
        this.loading = false;
      },
      () => {
        this.funcionarios = [];
        this.loading = false;
      }
    );
  }
}

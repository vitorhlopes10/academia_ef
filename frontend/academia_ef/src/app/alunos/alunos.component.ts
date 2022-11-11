import { Component, OnInit } from '@angular/core';
import { AlunoService } from '../services/aluno.service';
import { ConfirmationService, MenuItem, MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { AlunoFiltro } from '../models/filtros/aluno-filtro';
import { AlunoInterface } from '../models/interfaces/aluno-interface';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  alunos: AlunoInterface[] = [];
  filtro: AlunoFiltro = new AlunoFiltro();

  loading: boolean = false;
  home: MenuItem = { icon: 'pi pi-home', routerLink: '/' };
  items: MenuItem[] = [{ label: 'Alunos' }];

  constructor(private alunoService: AlunoService,
    private router: Router,
    private confirmationService: ConfirmationService,
    private messageService: MessageService) { }

  ngOnInit(): void {
    this.buscarAlunos();
  }

  buscarAlunos() {
    this.loading = true;
    this.alunoService.buscarTodos().subscribe(
      list => {
        //Setando mascara do CPF
        list.forEach(x => x.cpf = x.cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4"))
        
        this.alunos = list;
        this.loading = false;
      },
      () => {
        this.loading = false;
        this.messageService.add({ severity: 'danger', summary: 'Erro', detail: 'Ocorreu um erro na busca pelos Alunos' });
      },
      () => {
        this.loading = false;
      }
    );
  }

  cadastrar() {
    this.router.navigate(['alunos/cadastrar']);
  }

  detalhes(id: number) {
    this.router.navigate([`alunos/detalhes/${id}`]);
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
    this.router.navigate([`alunos/editar/${id}`]);
  }

  confirmarInativacao(id: number) {
    this.confirmationService.confirm({
      message: 'Você realmente deseja inativar esse Aluno?',
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

  confirmarAtivacao(id: number) {
    this.confirmationService.confirm({
      message: 'Você realmente deseja ativar esse Aluno?',
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

  inativar(id: number) {
    this.alunoService.inativar(id).subscribe(
      () => {
        this.buscarAlunos();
        this.messageService.add({ severity: 'success', summary: 'Confirmado', detail: 'Aluno inativado com sucesso' });
        this.loading = false;
      },
      () => {
        this.messageService.add({ severity: 'danger', summary: 'Cancelado', detail: 'Ocorreu um erro na inativação do Aluno' });
      }
    );
  }

  ativar(id: number) {
    this.alunoService.ativar(id).subscribe(
      () => {
        this.buscarAlunos();
        this.messageService.add({ severity: 'success', summary: 'Confirmado', detail: 'Aluno ativado com sucesso' });
        this.loading = false;
      },
      () => {
        this.messageService.add({ severity: 'danger', summary: 'Cancelado', detail: 'Ocorreu um erro na ativação do Aluno' });
      }
    );
  }

  limpar() {
    this.filtro = new AlunoFiltro();
  }

  buscar() {
    if (!(this.filtro.cpf) && !(this.filtro.nome) && !(this.filtro.matricula)) {
      this.buscarAlunos();
      return
    }

    this.loading = true;
    this.alunoService.filtro(this.filtro).subscribe(
      list => {
        list.forEach(x => x.cpf = x.cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4"))

        this.alunos = list;
        this.loading = false;
      }
    );
  }
}

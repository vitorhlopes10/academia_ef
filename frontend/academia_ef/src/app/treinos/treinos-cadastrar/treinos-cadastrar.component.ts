import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SelectItem, MenuItem, MessageService } from 'primeng/api';
import { TreinoModel } from 'src/app/models/treino-model';
import { AlunoService } from 'src/app/services/aluno.service';
import { TreinoService } from 'src/app/services/treino.service';

@Component({
  selector: 'app-treinos-cadastrar',
  templateUrl: './treinos-cadastrar.component.html',
  styleUrls: ['./treinos-cadastrar.component.css']
})
export class TreinosCadastrarComponent implements OnInit {

  novoTreino: TreinoModel = new TreinoModel();

  alunos: any[] = [];

  alunoSelecionado!: SelectItem;
  fixo: boolean = false;

  loading: boolean = false;
  home: MenuItem = { icon: 'pi pi-home', routerLink: '/' };
  items: MenuItem[] = [{ label: 'Treinos' }, { label: 'Cadastrar Treino' }];

  constructor(private treinoServico: TreinoService,
    private alunoService: AlunoService,
    private router: Router,
    private messageService: MessageService) { }

  ngOnInit(): void {
    this.buscarAlunos();
  }

  buscarAlunos() {
    this.alunoService.buscarTodos().subscribe(
      list => {
        list.forEach(item => {
          this.alunos.push({ name: item.nome, value: item.id })
        });
      },
      () => {
        this.messageService.add({ severity: 'danger', summary: 'Erro', detail: 'Ocorreu algum erro ao tentar buscar os Cargos' });
      }
    )
  }

  cadastrar() {
    this.loading = true;

    this.treinoServico.cadastrar(this.novoTreino).subscribe(
      success => {
        this.loading = false;
        this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: 'Funcionario inserido com sucesso!' });
        this.router.navigate(['funcionarios'])
      },
      () => {
        this.loading = false;
        this.messageService.add({ severity: 'danger', summary: 'Erro', detail: 'Ocorreu algum erro ao tentar inserir o Funcionario' });
      },
      () => { }
    )
  }

  voltar() {
    this.router.navigate(['treinos']);
  }

  validarCadastro() {
    let prosseguir = true;

    if (!(this.novoTreino.descricao)) {
      prosseguir = false;
      this.messageService.add({ severity: 'warn', summary: 'Erro', detail: 'É necessário preencher o campo "Nome"' });
    }

    if (!(this.alunoSelecionado)) {
      prosseguir = false;
      this.messageService.add({ severity: 'warn', summary: 'Erro', detail: 'É necessário escolher algum dos Sexos' });
    }

    if (prosseguir) {
      this.cadastrar();
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SelectItem, MenuItem, MessageService } from 'primeng/api';
import { AvaliacaoFisicaModel } from 'src/app/models/avaliacao-fisica-model';
import { AlunoService } from 'src/app/services/aluno.service';
import { AvaliacaoFisicaService } from 'src/app/services/avaliacao-fisica.service';
import { BiotipoService } from 'src/app/services/biotipo.service';

@Component({
  selector: 'app-avaliacoes-fisica-cadastrar',
  templateUrl: './avaliacoes-fisica-cadastrar.component.html',
  styleUrls: ['./avaliacoes-fisica-cadastrar.component.css']
})
export class AvaliacoesFisicaCadastrarComponent implements OnInit {

  novaAvaliacaoFisica: AvaliacaoFisicaModel = new AvaliacaoFisicaModel();

  alunos: any[] = [];
  biotipos: any[] = [];

  alunoSelecionado!: SelectItem;
  biotipoSelecionado!: SelectItem;

  loading: boolean = false;
  home: MenuItem = { icon: 'pi pi-home', routerLink: '/' };
  items: MenuItem[] = [{ label: 'Avaliações Fisica' }, { label: 'Cadastrar Avaliação Fisica' }];

  constructor(private avaliacaoFisicaService: AvaliacaoFisicaService,
    private alunoService: AlunoService,
    private biotipoService: BiotipoService,
    private router: Router,
    private messageService: MessageService) { }

  ngOnInit(): void {
    this.buscarAlunos();
    this.buscarBiotipos();
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

  buscarBiotipos() {
    this.biotipoService.buscarTodos().subscribe(
      list => {
        list.forEach(item => {
          this.biotipos.push({ name: item.tipo, value: item.id })
        });
      },
      () => {
        this.messageService.add({ severity: 'danger', summary: 'Erro', detail: 'Ocorreu algum erro ao tentar buscar os Cargos' });
      }
    )
  }

  cadastrar() {
    this.loading = true;

    this.avaliacaoFisicaService.cadastrar(this.novaAvaliacaoFisica).subscribe(
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

    if (!(this.novaAvaliacaoFisica.abdomen)) {
      prosseguir = false;
      this.messageService.add({ severity: 'warn', summary: 'Erro', detail: 'É necessário preencher o campo "Nome"' });
    }

    if (!(this.novaAvaliacaoFisica.altura)) {
      prosseguir = false;
      this.messageService.add({ severity: 'warn', summary: 'Erro', detail: 'É necessário preencher o campo "Nome"' });
    }

    if (!(this.novaAvaliacaoFisica.antebraco)) {
      prosseguir = false;
      this.messageService.add({ severity: 'warn', summary: 'Erro', detail: 'É necessário preencher o campo "Nome"' });
    }

    if (!(this.novaAvaliacaoFisica.cintura)) {
      prosseguir = false;
      this.messageService.add({ severity: 'warn', summary: 'Erro', detail: 'É necessário preencher o campo "Nome"' });
    }

    if (!(this.novaAvaliacaoFisica.coxa)) {
      prosseguir = false;
      this.messageService.add({ severity: 'warn', summary: 'Erro', detail: 'É necessário preencher o campo "Nome"' });
    }

    if (!(this.novaAvaliacaoFisica.idade)) {
      prosseguir = false;
      this.messageService.add({ severity: 'warn', summary: 'Erro', detail: 'É necessário preencher o campo "Nome"' });
    }

    if (!(this.novaAvaliacaoFisica.larguraBracoContraido)) {
      prosseguir = false;
      this.messageService.add({ severity: 'warn', summary: 'Erro', detail: 'É necessário preencher o campo "Nome"' });
    }

    if (!(this.novaAvaliacaoFisica.larguraBracoRelaxado)) {
      prosseguir = false;
      this.messageService.add({ severity: 'warn', summary: 'Erro', detail: 'É necessário preencher o campo "Nome"' });
    }

    if (!(this.novaAvaliacaoFisica.larguraEntreOmbros)) {
      prosseguir = false;
      this.messageService.add({ severity: 'warn', summary: 'Erro', detail: 'É necessário preencher o campo "Nome"' });
    }

    if (!(this.novaAvaliacaoFisica.panturrilha)) {
      prosseguir = false;
      this.messageService.add({ severity: 'warn', summary: 'Erro', detail: 'É necessário preencher o campo "Nome"' });
    }

    if (!(this.novaAvaliacaoFisica.peso)) {
      prosseguir = false;
      this.messageService.add({ severity: 'warn', summary: 'Erro', detail: 'É necessário preencher o campo "Nome"' });
    }

    if (!(this.novaAvaliacaoFisica.quadril)) {
      prosseguir = false;
      this.messageService.add({ severity: 'warn', summary: 'Erro', detail: 'É necessário preencher o campo "Nome"' });
    }

    if (!(this.novaAvaliacaoFisica.torax)) {
      prosseguir = false;
      this.messageService.add({ severity: 'warn', summary: 'Erro', detail: 'É necessário preencher o campo "Nome"' });
    }

    if (!(this.alunoSelecionado)) {
      prosseguir = false;
      this.messageService.add({ severity: 'warn', summary: 'Erro', detail: 'É necessário escolher algum dos Sexos' });
    }

    if (!(this.biotipoSelecionado)) {
      prosseguir = false;
      this.messageService.add({ severity: 'warn', summary: 'Erro', detail: 'É necessário escolher algum dos Sexos' });
    }

    if (prosseguir) {
      this.cadastrar();
    }
  }
}

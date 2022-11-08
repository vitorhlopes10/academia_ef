import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SelectItem, MenuItem, MessageService } from 'primeng/api';
import { AvaliacaoFisicaModel } from 'src/app/models/avaliacao-fisica-model';
import { AlunoService } from 'src/app/services/aluno.service';
import { AvaliacaoFisicaService } from 'src/app/services/avaliacao-fisica.service';
import { BiotipoService } from 'src/app/services/biotipo.service';

@Component({
  selector: 'app-avaliacoes-fisica-editar',
  templateUrl: './avaliacoes-fisica-editar.component.html',
  styleUrls: ['./avaliacoes-fisica-editar.component.css']
})
export class AvaliacoesFisicaEditarComponent implements OnInit {
  
  avaliacaoFisica: AvaliacaoFisicaModel = new AvaliacaoFisicaModel();

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
    private messageService: MessageService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.buscarAlunos();
    this.buscarBiotipos();

    const id = this.route.snapshot.params["parametro"];

    this.avaliacaoFisicaService.buscarPorId(Number.parseInt(id)).subscribe(
      obj => {
        this.loading = false;
      },
      () => {
        this.loading = false;
        this.messageService.add({ severity: 'danger', summary: 'Erro', detail: 'Ocorreu algum erro ao tentar buscar o produto' });
      }
    );
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

  editar() {
    this.loading = true;

    this.avaliacaoFisicaService.editar(this.avaliacaoFisica).subscribe(
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

    if (!(this.avaliacaoFisica.abdomen)) {
      prosseguir = false;
      this.messageService.add({ severity: 'warn', summary: 'Erro', detail: 'É necessário preencher o campo "Nome"' });
    }

    if (!(this.avaliacaoFisica.altura)) {
      prosseguir = false;
      this.messageService.add({ severity: 'warn', summary: 'Erro', detail: 'É necessário preencher o campo "Nome"' });
    }

    if (!(this.avaliacaoFisica.antebraco)) {
      prosseguir = false;
      this.messageService.add({ severity: 'warn', summary: 'Erro', detail: 'É necessário preencher o campo "Nome"' });
    }

    if (!(this.avaliacaoFisica.cintura)) {
      prosseguir = false;
      this.messageService.add({ severity: 'warn', summary: 'Erro', detail: 'É necessário preencher o campo "Nome"' });
    }

    if (!(this.avaliacaoFisica.coxa)) {
      prosseguir = false;
      this.messageService.add({ severity: 'warn', summary: 'Erro', detail: 'É necessário preencher o campo "Nome"' });
    }

    if (!(this.avaliacaoFisica.idade)) {
      prosseguir = false;
      this.messageService.add({ severity: 'warn', summary: 'Erro', detail: 'É necessário preencher o campo "Nome"' });
    }

    if (!(this.avaliacaoFisica.larguraBracoContraido)) {
      prosseguir = false;
      this.messageService.add({ severity: 'warn', summary: 'Erro', detail: 'É necessário preencher o campo "Nome"' });
    }

    if (!(this.avaliacaoFisica.larguraBracoRelaxado)) {
      prosseguir = false;
      this.messageService.add({ severity: 'warn', summary: 'Erro', detail: 'É necessário preencher o campo "Nome"' });
    }

    if (!(this.avaliacaoFisica.larguraEntreOmbros)) {
      prosseguir = false;
      this.messageService.add({ severity: 'warn', summary: 'Erro', detail: 'É necessário preencher o campo "Nome"' });
    }

    if (!(this.avaliacaoFisica.panturrilha)) {
      prosseguir = false;
      this.messageService.add({ severity: 'warn', summary: 'Erro', detail: 'É necessário preencher o campo "Nome"' });
    }

    if (!(this.avaliacaoFisica.peso)) {
      prosseguir = false;
      this.messageService.add({ severity: 'warn', summary: 'Erro', detail: 'É necessário preencher o campo "Nome"' });
    }

    if (!(this.avaliacaoFisica.quadril)) {
      prosseguir = false;
      this.messageService.add({ severity: 'warn', summary: 'Erro', detail: 'É necessário preencher o campo "Nome"' });
    }

    if (!(this.avaliacaoFisica.torax)) {
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
      this.editar();
    }
  }
}

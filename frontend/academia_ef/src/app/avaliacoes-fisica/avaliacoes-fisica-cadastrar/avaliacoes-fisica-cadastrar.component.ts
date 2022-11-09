import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem, MessageService } from 'primeng/api';
import { AvaliacaoFisicaModel } from 'src/app/models/avaliacao-fisica-model';
import { AlunoInterface } from 'src/app/models/interfaces/aluno-interface';
import { BiotipoInterface } from 'src/app/models/interfaces/biotipo-interface';
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

  alunos: AlunoInterface[] = [];
  biotipos: BiotipoInterface[] = [];

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
        this.alunos = list;
      },
      () => {
        this.messageService.add({ severity: 'danger', summary: 'Erro', detail: 'Ocorreu algum erro ao tentar buscar os Alunos' });
      }
    )
  }

  buscarBiotipos() {
    this.biotipoService.buscarTodos().subscribe(
      list => {
        this.biotipos = list;
      },
      () => {
        this.messageService.add({ severity: 'danger', summary: 'Erro', detail: 'Ocorreu algum erro ao tentar buscar os Biotipos' });
      }
    )
  }

  cadastrar() {
    this.loading = true;
    this.prepararParaEnvio();

    this.avaliacaoFisicaService.cadastrar(this.novaAvaliacaoFisica).subscribe(
      () => {
        this.loading = false;
        this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: 'Avaliação Física inserida com sucesso!' });
        this.router.navigate(['avaliacoes-fisicas']);
      },
      () => {
        this.loading = false;
        this.messageService.add({ severity: 'danger', summary: 'Erro', detail: 'Ocorreu algum erro ao tentar inserir a Avaliação Física' });
      },
      () => { }
    )
  }

  prepararParaEnvio() {
    this.novaAvaliacaoFisica.idFuncionario = 1;
  }

  voltar() {
    this.router.navigate(['avaliacoes-fisicas']);
  }

  validarCadastro() {
    let prosseguir = true;

    if (!(this.novaAvaliacaoFisica.abdomen)) {
      prosseguir = false;
      this.messageService.add({ severity: 'warn', summary: 'Erro', detail: 'É necessário preencher o campo Abdômen' });
    }

    if (!(this.novaAvaliacaoFisica.altura)) {
      prosseguir = false;
      this.messageService.add({ severity: 'warn', summary: 'Erro', detail: 'É necessário preencher o campo Altura' });
    }

    if (!(this.novaAvaliacaoFisica.antebraco)) {
      prosseguir = false;
      this.messageService.add({ severity: 'warn', summary: 'Erro', detail: 'É necessário preencher o campo Antebraço' });
    }

    if (!(this.novaAvaliacaoFisica.cintura)) {
      prosseguir = false;
      this.messageService.add({ severity: 'warn', summary: 'Erro', detail: 'É necessário preencher o campo Cintura' });
    }

    if (!(this.novaAvaliacaoFisica.coxa)) {
      prosseguir = false;
      this.messageService.add({ severity: 'warn', summary: 'Erro', detail: 'É necessário preencher o campo Coxa' });
    }

    if (!(this.novaAvaliacaoFisica.idade)) {
      prosseguir = false;
      this.messageService.add({ severity: 'warn', summary: 'Erro', detail: 'É necessário preencher o campo Idade' });
    }

    if (!(this.novaAvaliacaoFisica.larguraBracoContraido)) {
      prosseguir = false;
      this.messageService.add({ severity: 'warn', summary: 'Erro', detail: 'É necessário preencher o campo Lagura braço contraído' });
    }

    if (!(this.novaAvaliacaoFisica.larguraBracoRelaxado)) {
      prosseguir = false;
      this.messageService.add({ severity: 'warn', summary: 'Erro', detail: 'É necessário preencher o campo Largura braço relaxado' });
    }

    if (!(this.novaAvaliacaoFisica.larguraEntreOmbros)) {
      prosseguir = false;
      this.messageService.add({ severity: 'warn', summary: 'Erro', detail: 'É necessário preencher o campo Largura entre os ombros' });
    }

    if (!(this.novaAvaliacaoFisica.panturrilha)) {
      prosseguir = false;
      this.messageService.add({ severity: 'warn', summary: 'Erro', detail: 'É necessário preencher o campo Panturrilha' });
    }

    if (!(this.novaAvaliacaoFisica.peso)) {
      prosseguir = false;
      this.messageService.add({ severity: 'warn', summary: 'Erro', detail: 'É necessário preencher o campo Peso' });
    }

    if (!(this.novaAvaliacaoFisica.quadril)) {
      prosseguir = false;
      this.messageService.add({ severity: 'warn', summary: 'Erro', detail: 'É necessário preencher o campo Quadril' });
    }

    if (!(this.novaAvaliacaoFisica.torax)) {
      prosseguir = false;
      this.messageService.add({ severity: 'warn', summary: 'Erro', detail: 'É necessário preencher o campo Torax' });
    }

    if (!(this.novaAvaliacaoFisica.idAluno)) {
      prosseguir = false;
      this.messageService.add({ severity: 'warn', summary: 'Erro', detail: 'É necessário escolher um Aluno' });
    }

    if (!(this.novaAvaliacaoFisica.idBiotipo)) {
      prosseguir = false;
      this.messageService.add({ severity: 'warn', summary: 'Erro', detail: 'É necessário escolher um Biotipo' });
    }

    if (prosseguir) {
      this.cadastrar();
    }
  }
}

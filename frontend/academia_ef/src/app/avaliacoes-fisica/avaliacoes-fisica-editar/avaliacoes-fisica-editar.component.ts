import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuItem, MessageService } from 'primeng/api';
import { AvaliacaoFisicaModel } from 'src/app/models/avaliacao-fisica-model';
import { AlunoInterface } from 'src/app/models/interfaces/aluno-interface';
import { BiotipoInterface } from 'src/app/models/interfaces/biotipo-interface';
import { AlunoService } from 'src/app/services/aluno.service';
import { AvaliacaoFisicaService } from 'src/app/services/avaliacao-fisica.service';
import { BiotipoService } from 'src/app/services/biotipo.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-avaliacoes-fisica-editar',
  templateUrl: './avaliacoes-fisica-editar.component.html'
})
export class AvaliacoesFisicaEditarComponent implements OnInit {
  
  avaliacaoFisica: AvaliacaoFisicaModel = new AvaliacaoFisicaModel();
  id: number = 0;

  alunos: AlunoInterface[] = [];
  biotipos: BiotipoInterface[] = [];

  loading: boolean = false;
  home: MenuItem = { icon: 'pi pi-home', routerLink: '/' };
  items: MenuItem[] = [{ label: 'Avaliações Fisica' }, { label: 'Editar Avaliação Fisica' }];

  constructor(private avaliacaoFisicaService: AvaliacaoFisicaService,
    private alunoService: AlunoService,
    private biotipoService: BiotipoService,
    private usuarioService: UsuarioService,
    private router: Router,
    private messageService: MessageService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = Number.parseInt(this.route.snapshot.params["parametro"]);

    this.buscarAlunos();
    this.buscarBiotipos();
    this.buscarPorId();
  }

  buscarPorId() {
    this.loading = true;

    this.avaliacaoFisicaService.buscarPorId(this.id).subscribe(
      obj => {
        this.avaliacaoFisica.id = obj.id;
        this.avaliacaoFisica.idade = obj.idade;
        this.avaliacaoFisica.peso = obj.peso;
        this.avaliacaoFisica.altura = obj.altura;
        this.avaliacaoFisica.larguraEntreOmbros = obj.larguraEntreOmbros;
        this.avaliacaoFisica.larguraBracoRelaxado = obj.larguraBracoRelaxado;
        this.avaliacaoFisica.larguraBracoContraido = obj.larguraBracoContraido;
        this.avaliacaoFisica.antebraco = obj.antebraco;
        this.avaliacaoFisica.torax = obj.torax;
        this.avaliacaoFisica.panturrilha = obj.panturrilha;
        this.avaliacaoFisica.cintura = obj.cintura;
        this.avaliacaoFisica.abdomen = obj.abdomen;
        this.avaliacaoFisica.quadril = obj.quadril;
        this.avaliacaoFisica.coxa = obj.coxa;

        this.avaliacaoFisica.idBiotipo = obj.idBiotipo;
        this.avaliacaoFisica.idAluno = obj.idAluno;
        
        this.loading = false;
      },
      () => {
        this.loading = false;
        this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Ocorreu algum erro ao tentar buscar a Avaliação Física' });
      }
    );
  }

  buscarAlunos() {
    this.alunoService.buscarTodos().subscribe(
      list => {
        this.alunos = list;
      },
      () => {
        this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Ocorreu algum erro ao tentar buscar os Alunos' });
      }
    )
  }

  buscarBiotipos() {
    this.biotipoService.buscarTodos().subscribe(
      list => {
        this.biotipos = list;
      },
      () => {
        this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Ocorreu algum erro ao tentar buscar os Biotipos' });
      }
    )
  }

  atualizar() {
    this.loading = true;
    this.prepararParaEnvio();

    this.avaliacaoFisicaService.editar(this.avaliacaoFisica).subscribe(
      () => {
        this.loading = false;
        this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: 'Avaliação Física atualizada com sucesso' });
      },
      () => {
        this.loading = false;
        this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Ocorreu algum erro na edição da Avaliação Física' });
      },
      () => { }
    )
  }

  prepararParaEnvio() {
    this.avaliacaoFisica.idFuncionario = Number.parseInt(this.usuarioService.getUsuarioSessao().id);
  }

  voltar() {
    this.router.navigate(['avaliacoes-fisica']);
  }

  validarCadastro() {
    let prosseguir = true;

    if (!(this.avaliacaoFisica.abdomen)) {
      prosseguir = false;
      this.messageService.add({ severity: 'warn', summary: 'Erro', detail: 'É necessário preencher o campo Abdômen' });
    }

    if (!(this.avaliacaoFisica.altura)) {
      prosseguir = false;
      this.messageService.add({ severity: 'warn', summary: 'Erro', detail: 'É necessário preencher o campo Altura' });
    }

    if (!(this.avaliacaoFisica.antebraco)) {
      prosseguir = false;
      this.messageService.add({ severity: 'warn', summary: 'Erro', detail: 'É necessário preencher o campo Antebraço' });
    }

    if (!(this.avaliacaoFisica.cintura)) {
      prosseguir = false;
      this.messageService.add({ severity: 'warn', summary: 'Erro', detail: 'É necessário preencher o campo Cintura' });
    }

    if (!(this.avaliacaoFisica.coxa)) {
      prosseguir = false;
      this.messageService.add({ severity: 'warn', summary: 'Erro', detail: 'É necessário preencher o campo Coxa' });
    }

    if (!(this.avaliacaoFisica.idade)) {
      prosseguir = false;
      this.messageService.add({ severity: 'warn', summary: 'Erro', detail: 'É necessário preencher o campo Idade' });
    }

    if (!(this.avaliacaoFisica.larguraBracoContraido)) {
      prosseguir = false;
      this.messageService.add({ severity: 'warn', summary: 'Erro', detail: 'É necessário preencher o campo Lagura braço contraído' });
    }

    if (!(this.avaliacaoFisica.larguraBracoRelaxado)) {
      prosseguir = false;
      this.messageService.add({ severity: 'warn', summary: 'Erro', detail: 'É necessário preencher o campo Largura braço relaxado' });
    }

    if (!(this.avaliacaoFisica.larguraEntreOmbros)) {
      prosseguir = false;
      this.messageService.add({ severity: 'warn', summary: 'Erro', detail: 'É necessário preencher o campo Largura entre os ombros' });
    }

    if (!(this.avaliacaoFisica.panturrilha)) {
      prosseguir = false;
      this.messageService.add({ severity: 'warn', summary: 'Erro', detail: 'É necessário preencher o campo Panturrilha' });
    }

    if (!(this.avaliacaoFisica.peso)) {
      prosseguir = false;
      this.messageService.add({ severity: 'warn', summary: 'Erro', detail: 'É necessário preencher o campo Peso' });
    }

    if (!(this.avaliacaoFisica.quadril)) {
      prosseguir = false;
      this.messageService.add({ severity: 'warn', summary: 'Erro', detail: 'É necessário preencher o campo Quadril' });
    }

    if (!(this.avaliacaoFisica.torax)) {
      prosseguir = false;
      this.messageService.add({ severity: 'warn', summary: 'Erro', detail: 'É necessário preencher o campo Torax' });
    }

    if (!(this.avaliacaoFisica.idAluno)) {
      prosseguir = false;
      this.messageService.add({ severity: 'warn', summary: 'Erro', detail: 'É necessário escolher um Aluno' });
    }

    if (!(this.avaliacaoFisica.idBiotipo)) {
      prosseguir = false;
      this.messageService.add({ severity: 'warn', summary: 'Erro', detail: 'É necessário escolher um Biotipo' });
    }

    if (prosseguir) {
      this.atualizar();
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuItem, MessageService, SelectItem } from 'primeng/api';
import { PlanoEnum } from 'src/app/enums/planos-enum';
import { AlunoModel } from 'src/app/models/aluno-model';
import { PlanoInterface } from 'src/app/models/interfaces/plano-interface';
import { SexoInterface } from 'src/app/models/interfaces/sexo-interface';
import { UnidadeInterface } from 'src/app/models/interfaces/unidade-interface';
import { AlunoService } from 'src/app/services/aluno.service';
import { PlanoService } from 'src/app/services/plano.service';
import { SexoService } from 'src/app/services/sexo.service';
import { UnidadeService } from 'src/app/services/unidade.service';

@Component({
  selector: 'app-alunos-editar',
  templateUrl: './alunos-editar.component.html',
  styleUrls: ['./alunos-editar.component.css']
})
export class AlunosEditarComponent implements OnInit {

  aluno: AlunoModel = new AlunoModel();

  planos: PlanoInterface[] = [];
  sexos: SexoInterface[] = [];
  unidades: any[] = [];

  sexoSelecionado!: SexoInterface;
  planoSelecionado!: PlanoInterface;
  unidadeSelecionada!: UnidadeInterface;

  loading: boolean = false;
  home: MenuItem = { icon: 'pi pi-home', routerLink: '/' };
  items: MenuItem[] = [{ label: 'Alunos' }, { label: 'Editar Aluno' }];

  constructor(private alunoService: AlunoService,
    private unidadeService: UnidadeService,
    private sexoService: SexoService,
    private planoService: PlanoService,
    private router: Router,
    private messageService: MessageService,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.buscarPlanos();
    this.buscarSexos();
    this.buscarUnidades();

    const id = this.route.snapshot.params["parametro"];

    this.alunoService.buscarPorId(Number.parseInt(id)).subscribe(
      obj => {
        this.aluno.nome = obj.nome;
        this.aluno.cpf = obj.cpf;
        this.aluno.email = obj.email;
        this.aluno.telefone = obj.telefone;
        this.aluno.dataNascimento = new Date(obj.dataNascimento);
        this.aluno.idPlano = obj.idPlano;
        this.aluno.idSexo= obj.idSexo;
        this.aluno.idUnidade = obj.idUnidade;

        this.aluno.endereco.descricao = obj.endereco.descricao;
        this.aluno.endereco.estado = obj.endereco.estado;
        this.aluno.endereco.cidade = obj.endereco.cidade;
        this.aluno.endereco.cep = obj.endereco.cep;

        this.sexoSelecionado = obj.sexo;
        this.planoSelecionado = obj.plano;
        this.unidadeSelecionada = obj.unidade;
        
        this.loading = false;
      },
      () => {
        this.loading = false;
        this.messageService.add({ severity: 'danger', summary: 'Erro', detail: 'Ocorreu algum erro ao tentar buscar o produto' });
      }
    );
  }

  buscarPlanos() {
    this.planoService.buscarTodos().subscribe(
      list => {
        this.planos = list;
      },
      () => {
        this.messageService.add({ severity: 'danger', summary: 'Erro', detail: 'Ocorreu algum erro ao tentar buscar os Planos' });
      }
    )
  }

  buscarSexos() {
    this.sexoService.buscarTodos().subscribe(
      list => {
        this.sexos = list;
      },
      () => {
        this.messageService.add({ severity: 'danger', summary: 'Erro', detail: 'Ocorreu algum erro ao tentar buscar os Sexos' });
      }
    )
  }

  buscarUnidades() {
    this.unidadeService.buscarTodos().subscribe(
      list => {
        list.forEach(item => {
          this.unidades.push({ label: item.nome, value: item.id })
        });
      },
      () => {
        this.messageService.add({ severity: 'danger', summary: 'Erro', detail: 'Ocorreu algum erro ao tentar buscar as Unidades' });
      }
    )
  }

  update(event: any) {
console.log('teste');
  }

  cadastrar() {
    this.loading = true;
    this.prepararParaEnvio();

    this.alunoService.editar(this.aluno).subscribe(
      () => {
        this.loading = false;
        this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: 'Aluno inserido com sucesso!' });
        this.router.navigate(['alunos'])
      },
      () => {
        this.loading = false;
        this.messageService.add({ severity: 'danger', summary: 'Erro', detail: 'Ocorreu algum erro ao tentar inserir o aluno' });
      },
      () => { }
    )
  }

  prepararParaEnvio() {
    this.aluno.nome = this.aluno.nome.trim();
    this.aluno.cpf = this.aluno.cpf.trim();
    this.aluno.email = this.aluno.email.trim();
    this.aluno.telefone = this.aluno.telefone.trim();
    this.aluno.idUsuario = 1

    this.aluno.idPlano = this.planoSelecionado.id;
    this.aluno.idSexo = this.sexoSelecionado.id;

    if(this.aluno.idPlano === PlanoEnum.PREMIUN) {
      this.aluno.idUnidade = 0;
    }
    else {
      this.aluno.idUnidade = this.unidadeSelecionada.id
    }
  }

  voltar() {
    this.router.navigate(['alunos']);
  }

  validarCadastro() {
    let prosseguir = true;

        //Validação Dados Básicos
    // if (!(this.novoAluno.nome)) {
    //   prosseguir = false;
    //   this.messageService.add({ severity: 'warn', summary: 'Erro', detail: 'É necessário preencher o campo "Nome"' });
    // }

    // if (!(this.novoAluno.cpf)) {
    //   prosseguir = false;
    //   this.messageService.add({ severity: 'warn', summary: 'Erro', detail: 'É necessário preencher o campo "CPF"' });
    // }

    // if (!(this.novoAluno.email)) {
    //   prosseguir = false;
    //   this.messageService.add({ severity: 'warn', summary: 'Erro', detail: 'É necessário preencher o campo "Email"' });
    // }

    // if (!(this.sexoSelecionado)) {
    //   prosseguir = false;
    //   this.messageService.add({ severity: 'warn', summary: 'Erro', detail: 'É necessário escolher algum dos Sexos' });
    // }

    // if (!(this.planoSelecionado)) {
    //   prosseguir = false;
    //   this.messageService.add({ severity: 'warn', summary: 'Erro', detail: 'É necessário escolher algum dos Planos' });
    // }

    // if ((!(this.unidadeSelecionada))) {
    //   if (this.planoSelecionado && this.planoSelecionado.value == PlanoEnum.ESSENTIAL) {
    //     prosseguir = false;
    //     this.messageService.add({ severity: 'warn', summary: 'Erro', detail: 'É necessário escolher algum dos Planos' });
    //   }
    // }

    // if (!(this.novoAluno.telefone)) {
    //   prosseguir = false;
    //   this.messageService.add({ severity: 'warn', summary: 'Erro', detail: 'É necessário preencher o campo "Telefone"' });
    // }

    //Validação dados de Endereço
    // if (!(this.novoAluno.endereco.descricao)) {
    //   prosseguir = false;
    //   this.messageService.add({ severity: 'warn', summary: 'Erro', detail: 'É necessário preencher o campo "Nome"' });
    // }

    // if (!(this.novoAluno.endereco.cidade)) {
    //   prosseguir = false;
    //   this.messageService.add({ severity: 'warn', summary: 'Erro', detail: 'É necessário preencher o campo "Nome"' });
    // }

    // if (!(this.novoAluno.endereco.estado)) {
    //   prosseguir = false;
    //   this.messageService.add({ severity: 'warn', summary: 'Erro', detail: 'É necessário preencher o campo "Nome"' });
    // }

    // if (!(this.novoAluno.endereco.cep)) {
    //   prosseguir = false;
    //   this.messageService.add({ severity: 'warn', summary: 'Erro', detail: 'É necessário preencher o campo "Nome"' });
    // }

    //Validação de senha
    // if (!(this.novoAluno.usuario)) {
    //   prosseguir = false;
    //   this.messageService.add({ severity: 'warn', summary: 'Erro', detail: 'É necessário preencher o campo "Nome"' });
    // }
    // if (!(this.novoAluno.nome)) {
    //   prosseguir = false;
    //   this.messageService.add({ severity: 'warn', summary: 'Erro', detail: 'É necessário preencher o campo "Nome"' });
    // }

    if (prosseguir) {
      this.cadastrar();
    }
  }
}

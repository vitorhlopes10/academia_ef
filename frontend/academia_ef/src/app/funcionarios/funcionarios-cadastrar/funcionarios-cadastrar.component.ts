import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SelectItem, MenuItem, MessageService } from 'primeng/api';
import { FuncionarioModel } from 'src/app/models/funcionario-model';
import { CargoService } from 'src/app/services/cargo.service';
import { FuncionarioService } from 'src/app/services/funcionario.service';
import { SexoService } from 'src/app/services/sexo.service';
import { UnidadeService } from 'src/app/services/unidade.service';

@Component({
  selector: 'app-funcionarios-cadastrar',
  templateUrl: './funcionarios-cadastrar.component.html',
  styleUrls: ['./funcionarios-cadastrar.component.css']
})
export class FuncionariosCadastrarComponent implements OnInit {

  novoFuncionario: FuncionarioModel = new FuncionarioModel();

  cargos: any[] = [];
  sexos: any[] = [];
  unidades: any[] = [];

  sexoSelecionado!: SelectItem;
  cargoSelecionado!: SelectItem;
  unidadeSelecionada!: SelectItem;
  fixo: boolean = false;

  loading: boolean = false;
  home: MenuItem = { icon: 'pi pi-home', routerLink: '/' };
  items: MenuItem[] = [{ label: 'Funcionarios' }, { label: 'Cadastrar Funcionario' }];

  constructor(private funcionarioService: FuncionarioService,
    private unidadeService: UnidadeService,
    private sexoService: SexoService,
    private cargoService: CargoService,
    private router: Router,
    private messageService: MessageService) { }

  ngOnInit(): void {
    this.buscarPlanos();
    this.buscarSexos();
    this.buscarUnidades();
  }

  buscarPlanos() {
    this.cargoService.buscarTodos().subscribe(
      list => {
        list.forEach(item => {
          this.cargos.push({ name: item.nome, value: item.id })
        });
      },
      () => {
        this.messageService.add({ severity: 'danger', summary: 'Erro', detail: 'Ocorreu algum erro ao tentar buscar os Cargos' });
      }
    )
  }

  buscarSexos() {
    this.sexoService.buscarTodos().subscribe(
      list => {
        list.forEach(item => {
          this.sexos.push({ name: item.nome, value: item.id })
        });
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
          this.unidades.push({ name: item.nome, value: item.id })
        });
      },
      () => {
        this.messageService.add({ severity: 'danger', summary: 'Erro', detail: 'Ocorreu algum erro ao tentar buscar as Unidades' });
      }
    )
  }

  cadastrar() {
    this.loading = true;
    this.prepararParaEnvio();

    this.funcionarioService.cadastrar(this.novoFuncionario).subscribe(
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

  prepararParaEnvio() {
    this.novoFuncionario.nome = this.novoFuncionario.nome.trim();
    this.novoFuncionario.cpf = this.novoFuncionario.cpf.trim();
    this.novoFuncionario.email = this.novoFuncionario.email.trim();
    this.novoFuncionario.telefone = this.novoFuncionario.telefone.trim();
    this.novoFuncionario.idUsuario = 1

    this.novoFuncionario.idCargo = this.cargoSelecionado.value;
    this.novoFuncionario.idSexo = this.sexoSelecionado.value;

    this.novoFuncionario.idUnidade = this.novoFuncionario.fixo ?
      this.unidadeSelecionada.value : null;
  }

  voltar() {
    this.router.navigate(['funcionarios']);
  }

  validarCadastro() {
    let prosseguir = true;
    this.prepararParaEnvio();

    //Validação Dados Básicos
    // if (!(this.novoFuncionario.nome)) {
    //   prosseguir = false;
    //   this.messageService.add({ severity: 'warn', summary: 'Erro', detail: 'É necessário preencher o campo "Nome"' });
    // }

    // if (!(this.novoFuncionario.cpf)) {
    //   prosseguir = false;
    //   this.messageService.add({ severity: 'warn', summary: 'Erro', detail: 'É necessário preencher o campo "CPF"' });
    // }

    // if (!(this.novoFuncionario.email)) {
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

    // if (!(this.novoFuncionario.telefone)) {
    //   prosseguir = false;
    //   this.messageService.add({ severity: 'warn', summary: 'Erro', detail: 'É necessário preencher o campo "Telefone"' });
    // }

    //Validação dados de Endereço
    // if (!(this.novoFuncionario.endereco.descricao)) {
    //   prosseguir = false;
    //   this.messageService.add({ severity: 'warn', summary: 'Erro', detail: 'É necessário preencher o campo "Nome"' });
    // }

    // if (!(this.novoFuncionario.endereco.cidade)) {
    //   prosseguir = false;
    //   this.messageService.add({ severity: 'warn', summary: 'Erro', detail: 'É necessário preencher o campo "Nome"' });
    // }

    // if (!(this.novoFuncionario.endereco.estado)) {
    //   prosseguir = false;
    //   this.messageService.add({ severity: 'warn', summary: 'Erro', detail: 'É necessário preencher o campo "Nome"' });
    // }

    // if (!(this.novoFuncionario.endereco.cep)) {
    //   prosseguir = false;
    //   this.messageService.add({ severity: 'warn', summary: 'Erro', detail: 'É necessário preencher o campo "Nome"' });
    // }

    //Validação de senha
    // if (!(this.novoFuncionario.usuario)) {
    //   prosseguir = false;
    //   this.messageService.add({ severity: 'warn', summary: 'Erro', detail: 'É necessário preencher o campo "Nome"' });
    // }
    // if (!(this.novoFuncionario.nome)) {
    //   prosseguir = false;
    //   this.messageService.add({ severity: 'warn', summary: 'Erro', detail: 'É necessário preencher o campo "Nome"' });
    // }

    if (prosseguir) {
      this.cadastrar();
    }
  }
}

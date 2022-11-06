import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SelectItem, MenuItem, MessageService } from 'primeng/api';
import { TreinoModel } from 'src/app/models/treino-model';
import { AlunoService } from 'src/app/services/aluno.service';
import { TreinoService } from 'src/app/services/treino.service';

@Component({
  selector: 'app-treinos-editar',
  templateUrl: './treinos-editar.component.html',
  styleUrls: ['./treinos-editar.component.css']
})
export class TreinosEditarComponent implements OnInit {

  treino: TreinoModel = new TreinoModel();

  alunos: any[] = [];

  alunoSelecionado!: SelectItem;
  fixo: boolean = false;

  loading: boolean = false;
  home: MenuItem = { icon: 'pi pi-home', routerLink: '/' };
  items: MenuItem[] = [{ label: 'Treinos' }, { label: 'Cadastrar Treino' }];


  constructor(private treinoServico: TreinoService,
    private alunoService: AlunoService,
    private router: Router,
    private messageService: MessageService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.buscarAlunos();

    const id = this.route.snapshot.params["parametro"];

    this.treinoServico.buscarPorId(Number.parseInt(id)).subscribe(
      obj => {
        this.treino.descricao = obj.descricao;
        this.treino.idAluno = obj.idAluno;

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
          this.alunos.push({ name: item.nome, value: item.id });
        });
      },
      () => {
        this.messageService.add({ severity: 'danger', summary: 'Erro', detail: 'Ocorreu algum erro ao tentar buscar os Cargos' });
      }
    )
  }

  cadastrar() {
    this.loading = true;

    this.treinoServico.editar(this.treino).subscribe(
      () => {
        this.loading = false;
        this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: 'funcionario inserido com sucesso!' });
        this.router.navigate(['funcionarios'])
      },
      () => {
        this.loading = false;
        this.messageService.add({ severity: 'danger', summary: 'Erro', detail: 'Ocorreu algum erro ao tentar inserir o funcionario' });
      },
      () => { }
    )
  }

  voltar() {
    this.router.navigate(['alunos']);
  }

  validarCadastro() {
    let prosseguir = true;

    if (prosseguir) {
      this.cadastrar();
    }
  }
}

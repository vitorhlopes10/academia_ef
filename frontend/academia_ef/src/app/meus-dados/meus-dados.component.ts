import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MenuItem, MessageService } from 'primeng/api';
import { AlunoService } from '../services/aluno.service';
import { FuncionarioService } from '../services/funcionario.service';

@Component({
  selector: 'app-meus-dados',
  templateUrl: './meus-dados.component.html',
  styleUrls: ['./meus-dados.component.css']
})
export class MeusDadosComponent implements OnInit {

  meusDados: any;;
  id: number = 0;

  isAluno: boolean = false;
  isFuncionario: boolean = false;

  loading: boolean = false;
  home: MenuItem = { icon: 'pi pi-home', routerLink: '/' };
  items: MenuItem[] = [{ label: 'Meus Dados' }];

  constructor(private alunoService: AlunoService,
    private funcionarioService: FuncionarioService,
    private messageService: MessageService,
    private router: Router) { }

  ngOnInit(): void {
    this.id = 1

    if (true) {
      this.buscarAluno();
    } else {
      this.buscarFuncionario();
    }
  }

  buscarAluno() {
    this.alunoService.buscarPorId(this.id).subscribe(
      obj => {
        this.meusDados = obj;
        this.meusDados.dataNascimento = new Date(obj.dataNascimento);

        this.isAluno = Object.keys(this.meusDados).some(x => x === 'plano');

        this.loading = false;
      },
      () => {
        this.loading = false;
        this.messageService.add({ severity: 'danger', summary: 'Erro', detail: 'Ocorreu algum erro ao tentar seus Dados Pessoais' });
      }
    );
  }

  buscarFuncionario() {
    this.funcionarioService.buscarPorId(this.id).subscribe(
      obj => {
        this.meusDados = obj;
        this.meusDados.dataNascimento = new Date(obj.dataNascimento);

        this.isFuncionario = Object.keys(this.meusDados).some(x => x === 'cargo');

        this.loading = false;
      },
      () => {
        this.loading = false;
        this.messageService.add({ severity: 'danger', summary: 'Erro', detail: 'Ocorreu algum erro ao tentar seus Dados Pessoais' });
      }
    );
  }

  voltar() {
    this.router.navigate(['home']);
  }
}

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MenuItem, MessageService, SelectItem } from 'primeng/api';
import { AlunoInterface } from 'src/app/models/interfaces/aluno-interface';
import { AlunoService } from 'src/app/services/aluno.service';

@Component({
  selector: 'app-alunos-detalhes',
  templateUrl: './alunos-detalhes.component.html',
  styleUrls: ['./alunos-detalhes.component.css']
})
export class AlunosDetalhesComponent implements OnInit {

  aluno!: AlunoInterface;

  planos: any[] = [];
  sexos: any[] = [];
  unidades: any[] = [];

  sexoSelecionado!: SelectItem;
  planoSelecionado!: SelectItem;
  unidadeSelecionada!: SelectItem;

  loading: boolean = false;
  home: MenuItem = { icon: 'pi pi-home', routerLink: '/' };
  items: MenuItem[] = [{ label: 'Alunos' }, { label: 'Visualizar Aluno' }];

  constructor(private alunoService: AlunoService,
    private router: Router,
    private messageService: MessageService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.loading = true;
    const id = this.route.snapshot.params["parametro"];

    this.alunoService.buscarPorId(Number.parseInt(id)).subscribe(
      obj => {
        this.loading = false;
        this.aluno = obj;
      },
      () => {
        this.loading = false;
        this.messageService.add({ severity: 'danger', summary: 'Erro', detail: 'Ocorreu algum erro ao tentar buscar o produto' });
      }
    );
  }

  voltar() {
    this.router.navigate(['alunos']);
  }
}

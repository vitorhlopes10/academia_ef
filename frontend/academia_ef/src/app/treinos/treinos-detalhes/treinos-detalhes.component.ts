import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SelectItem, MenuItem, MessageService } from 'primeng/api';
import { TreinoInterface } from 'src/app/models/interfaces/treino-interface';
import { TreinoService } from 'src/app/services/treino.service';

@Component({
  selector: 'app-treinos-detalhes',
  templateUrl: './treinos-detalhes.component.html',
  styleUrls: ['./treinos-detalhes.component.css']
})
export class TreinosDetalhesComponent implements OnInit {

  treino!: TreinoInterface;

  alunos: any[] = [];

  alunoSelecionado!: SelectItem;

  loading: boolean = false;
  home: MenuItem = { icon: 'pi pi-home', routerLink: '/' };
  items: MenuItem[] = [{ label: 'Treinos' }, { label: 'Visualizar Treino' }];

  constructor(private treinoService: TreinoService,
    private router: Router,
    private messageService: MessageService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.loading = true;
    const id = this.route.snapshot.params["parametro"];

    this.treinoService.buscarPorId(Number.parseInt(id)).subscribe(
      obj => {
        this.loading = false;
        this.treino = obj;
      },
      () => {
        this.loading = false;
        this.messageService.add({ severity: 'danger', summary: 'Erro', detail: 'Ocorreu algum erro ao tentar buscar o funcionario' });
      }
    );
  }

  voltar() {
    this.router.navigate(['treinos']);
  }
}

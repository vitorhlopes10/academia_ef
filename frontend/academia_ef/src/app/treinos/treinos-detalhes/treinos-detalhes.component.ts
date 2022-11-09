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
  id: number = 0;

  alunos: any[] = [];

  loading: boolean = false;
  home: MenuItem = { icon: 'pi pi-home', routerLink: '/' };
  items: MenuItem[] = [{ label: 'Treinos' }, { label: 'Visualizar Treino' }];

  constructor(private treinoService: TreinoService,
    private router: Router,
    private messageService: MessageService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = Number.parseInt(this.route.snapshot.params["parametro"]);

    this.buscarPorId();
  }

  buscarPorId() {
    this.loading = true;

    this.treinoService.buscarPorId(this.id).subscribe(
      obj => {
        this.loading = false;
        this.treino = obj;
      },
      () => {
        this.loading = false;
        this.messageService.add({ severity: 'danger', summary: 'Erro', detail: 'Ocorreu algum erro ao tentar buscar o Treino' });
      }
    );
  }

  voltar() {
    this.router.navigate(['treinos']);
  }
}

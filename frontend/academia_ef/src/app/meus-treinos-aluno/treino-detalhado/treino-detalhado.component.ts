import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MenuItem, MessageService } from 'primeng/api';
import { TreinoInterface } from 'src/app/models/interfaces/treino-interface';
import { TreinoService } from 'src/app/services/treino.service';

@Component({
  selector: 'app-treino-detalhado',
  templateUrl: './treino-detalhado.component.html',
  styleUrls: ['./treino-detalhado.component.css']
})
export class TreinoDetalhadoComponent implements OnInit {

  treino!: TreinoInterface;
  dataTreino: string = '';
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

        const strDateConvertida = new Date(this.treino.dataCriacao);

        this.dataTreino = `${strDateConvertida.getDate()}/${strDateConvertida.getMonth()}/${strDateConvertida.getFullYear()}`;
      },
      () => {
        this.loading = false;
        this.messageService.add({ severity: 'danger', summary: 'Erro', detail: 'Ocorreu algum erro ao tentar buscar o Treino' });
      }
    );
  }

  voltar() {
    this.router.navigate(['meus-treinos']);
  }
}

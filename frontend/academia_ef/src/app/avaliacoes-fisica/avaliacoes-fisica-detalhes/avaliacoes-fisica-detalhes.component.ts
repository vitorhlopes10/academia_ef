import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MenuItem, MessageService } from 'primeng/api';
import { AlunoInterface } from 'src/app/models/interfaces/aluno-interface';
import { AvaliacaoFisicaInterface } from 'src/app/models/interfaces/avaliacao-fisica-interface';
import { BiotipoInterface } from 'src/app/models/interfaces/biotipo-interface';
import { AvaliacaoFisicaService } from 'src/app/services/avaliacao-fisica.service';

@Component({
  selector: 'app-avaliacoes-fisica-detalhes',
  templateUrl: './avaliacoes-fisica-detalhes.component.html',
  styleUrls: ['./avaliacoes-fisica-detalhes.component.css']
})
export class AvaliacoesFisicaDetalhesComponent implements OnInit {

  avaliacaoFisica!: AvaliacaoFisicaInterface;
  id: number = 0;

  alunos: AlunoInterface[] = [];
  biotipos: BiotipoInterface[] = [];

  loading: boolean = false;
  home: MenuItem = { icon: 'pi pi-home', routerLink: '/' };
  items: MenuItem[] = [{ label: 'Avaliações Fisica' }, { label: 'Visualizar Avaliação Fisica' }];

  constructor(private avaliacaoFisicaService: AvaliacaoFisicaService,
    private router: Router,
    private messageService: MessageService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["parametro"];

    this.buscarPorId();
  }

  buscarPorId() {
    this.loading = true;

    this.avaliacaoFisicaService.buscarPorId(this.id).subscribe(
      obj => {
        this.avaliacaoFisica = obj;
        this.loading = false;
      },
      () => {
        this.loading = false;
        this.messageService.add({ severity: 'danger', summary: 'Erro', detail: 'Ocorreu algum erro ao tentar buscar o Avaliação Física' });
      }
    );
  }

  voltar() {
    this.router.navigate(['avaliacoes-fisica']);
  }
}

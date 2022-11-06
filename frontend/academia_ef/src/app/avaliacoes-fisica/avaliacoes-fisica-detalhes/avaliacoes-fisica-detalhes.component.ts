import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SelectItem, MenuItem, MessageService } from 'primeng/api';
import { AvaliacaoFisicaInterface } from 'src/app/models/interfaces/avaliacao-fisica-interface';
import { AvaliacaoFisicaService } from 'src/app/services/avaliacao-fisica.service';
import { TreinoService } from 'src/app/services/treino.service';

@Component({
  selector: 'app-avaliacoes-fisica-detalhes',
  templateUrl: './avaliacoes-fisica-detalhes.component.html',
  styleUrls: ['./avaliacoes-fisica-detalhes.component.css']
})
export class AvaliacoesFisicaDetalhesComponent implements OnInit {

  avaliacaoFisica!: AvaliacaoFisicaInterface;

  alunos: any[] = [];
  biotipos: any[] = [];

  alunoSelecionado!: SelectItem;
  biotipoSelecionado!: SelectItem;

  loading: boolean = false;
  home: MenuItem = { icon: 'pi pi-home', routerLink: '/' };
  items: MenuItem[] = [{ label: 'Avaliações Fisica' }, { label: 'Visualizar Avaliação Fisica' }];

  constructor(private avaliacaoFisicaService: AvaliacaoFisicaService,
    private router: Router,
    private messageService: MessageService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.loading = true;
    const id = this.route.snapshot.params["parametro"];

    this.avaliacaoFisicaService.buscarPorId(Number.parseInt(id)).subscribe(
      obj => {
        this.loading = false;
        this.avaliacaoFisica = obj;
      },
      () => {
        this.loading = false;
        this.messageService.add({ severity: 'danger', summary: 'Erro', detail: 'Ocorreu algum erro ao tentar buscar o Avaliação Física' });
      }
    );
  }

  voltar() {
    this.router.navigate(['treinos']);
  }
}

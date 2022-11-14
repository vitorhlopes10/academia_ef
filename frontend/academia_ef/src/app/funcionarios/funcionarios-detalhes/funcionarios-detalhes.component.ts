import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MenuItem, MessageService } from 'primeng/api';
import { FuncionarioInterface } from 'src/app/models/interfaces/funcionario-model';
import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-funcionarios-detalhes',
  templateUrl: './funcionarios-detalhes.component.html'
})
export class FuncionariosDetalhesComponent implements OnInit {

  funcionario!: FuncionarioInterface;

  loading: boolean = false;
  home: MenuItem = { icon: 'pi pi-home', routerLink: '/' };
  items: MenuItem[] = [{ label: 'Funcionarios' }, { label: 'Visualizar Funcionario' }];

  constructor(private funcionarioService: FuncionarioService,
    private router: Router,
    private messageService: MessageService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.loading = true;
    const id = this.route.snapshot.params["parametro"];

    this.funcionarioService.buscarPorId(Number.parseInt(id)).subscribe(
      obj => {
        this.loading = false;
        this.funcionario = obj;
        this.funcionario.dataNascimento = new Date(obj.dataNascimento);
      },
      () => {
        this.loading = false;
        this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Ocorreu algum erro ao tentar buscar o funcionario' });
      }
    );
  }

  voltar() {
    this.router.navigate(['funcionarios']);
  }
}

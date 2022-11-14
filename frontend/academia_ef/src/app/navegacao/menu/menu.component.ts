import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, MenuItem } from 'primeng/api';
import { UsuarioService } from 'src/app/services/usuario.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  items: MenuItem[] = [];

  constructor(private usuarioService: UsuarioService,
    private router: Router,
    private confirmationService: ConfirmationService) { }

  ngOnInit() {
    const usuario = this.usuarioService.getUsuarioSessao();

    switch (usuario.tipoDeUsuario) {
      case 'ALUNO':
        this.montrarMenuAluno();
        break;
      case 'INSTRUTOR':
        this.montarMenuInstrutor();
        break;
      case 'GERENTE':
        this.montarMenuGerente();
        break;
      default:
        break;
    }
  }

  confirmarLogout() {
    this.confirmationService.confirm({
      message: 'Deseja realmente fazer o Logout?',
      header: 'Confirmação de Logout',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.logout();
      }
    });
  }

  logout() {
    this.usuarioService.logout();
    this.router.navigate([`login`]);
  }

  montarMenuGerente() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-fw pi-home',
        routerLink: '/home'
      },
      {
        label: 'Meus Dados',
        icon: 'pi pi-fw pi-database',
        routerLink: '/meus-dados'
      },
      {
        label: 'Alunos',
        icon: 'pi pi-fw pi-users',
        routerLink: '/alunos'
      },
      {
        label: 'Funcionários',
        icon: 'pi pi-fw pi-briefcase',
        routerLink: '/funcionarios'
      },
      {
        label: 'Pagamentos',
        icon: 'pi pi-fw pi-dollar',
        routerLink: '/pagamentos'
      },
      {
        label: 'Patrimônio',
        icon: 'pi pi-fw pi-money-bill',
        routerLink: '/patrimonio'
      },
      {
        label: 'Sobre',
        icon: 'pi pi-fw pi-info-circle',
        routerLink: '/sobre'
      }
    ];
  }

  montarMenuInstrutor() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-fw pi-home',
        routerLink: '/home'
      },
      {
        label: 'Meus Dados',
        icon: 'pi pi-fw pi-database',
        routerLink: '/meus-dados'
      },
      {
        label: 'Treinos',
        icon: 'pi pi-fw pi-bolt',
        routerLink: '/treinos'
      },
      {
        label: 'Avaliações Física',
        icon: 'pi pi-fw pi-chart-bar',
        routerLink: '/avaliacoes-fisica'
      },
      {
        label: 'Sobre',
        icon: 'pi pi-fw pi-info-circle',
        routerLink: '/sobre'
      }
    ];
  }

  montrarMenuAluno() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-fw pi-home',
        routerLink: '/home'
      },
      {
        label: 'Meus Dados',
        icon: 'pi pi-fw pi-database',
        routerLink: '/meus-dados'
      },
      {
        label: 'Meus Treinos',
        icon: 'pi pi-fw pi-bolt',
        routerLink: '/meus-treinos'
      },
      {
        label: 'Minhas Avaliações',
        icon: 'pi pi-fw pi-chart-bar',
        routerLink: '/minhas-avaliacoes-fisica'
      },
      {
        label: 'Meus Pagamentos',
        icon: 'pi pi-fw pi-chart-bar',
        routerLink: '/meus-pagamentos'
      },
      {
        label: 'Sobre',
        icon: 'pi pi-fw pi-info-circle',
        routerLink: '/sobre'
      }
    ];
  }
}

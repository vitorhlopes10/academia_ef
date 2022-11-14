import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlunosCadastrarComponent } from './alunos/alunos-cadastrar/alunos-cadastrar.component';
import { AlunosDetalhesComponent } from './alunos/alunos-detalhes/alunos-detalhes.component';
import { AlunosEditarComponent } from './alunos/alunos-editar/alunos-editar.component';
import { AlunosComponent } from './alunos/alunos.component';
import { AuthGuard } from './auth.guard';
import { AvaliacoesFisicaCadastrarComponent } from './avaliacoes-fisica/avaliacoes-fisica-cadastrar/avaliacoes-fisica-cadastrar.component';
import { AvaliacoesFisicaDetalhesComponent } from './avaliacoes-fisica/avaliacoes-fisica-detalhes/avaliacoes-fisica-detalhes.component';
import { AvaliacoesFisicaEditarComponent } from './avaliacoes-fisica/avaliacoes-fisica-editar/avaliacoes-fisica-editar.component';
import { AvaliacoesFisicaComponent } from './avaliacoes-fisica/avaliacoes-fisica.component';
import { FuncionariosCadastrarComponent } from './funcionarios/funcionarios-cadastrar/funcionarios-cadastrar.component';
import { FuncionariosDetalhesComponent } from './funcionarios/funcionarios-detalhes/funcionarios-detalhes.component';
import { FuncionariosEditarComponent } from './funcionarios/funcionarios-editar/funcionarios-editar.component';
import { FuncionariosComponent } from './funcionarios/funcionarios.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MeusDadosComponent } from './meus-dados/meus-dados.component';
import { MeusPagamentosAlunoComponent } from './meus-pagamentos-aluno/meus-pagamentos-aluno.component';
import { MeusTreinosAlunoComponent } from './meus-treinos-aluno/meus-treinos-aluno.component';
import { TreinoDetalhadoComponent } from './meus-treinos-aluno/treino-detalhado/treino-detalhado.component';
import { AvaliacaoFisicaDetalhadaComponent } from './minhas-avaliacoes-fisica-aluno/avaliacao-fisica-detalhada/avaliacao-fisica-detalhada.component';
import { MinhasAvaliacoesFisicaAlunoComponent } from './minhas-avaliacoes-fisica-aluno/minhas-avaliacoes-fisica-aluno.component';
import { PagamentosDetalhadosComponent } from './pagamentos/pagamentos-detalhados/pagamentos-detalhados.component';
import { PagamentosComponent } from './pagamentos/pagamentos.component';
import { PatrimonioCadastrarComponent } from './patrimonio/patrimonio-cadastrar/patrimonio-cadastrar.component';
import { PatrimonioDetalhesComponent } from './patrimonio/patrimonio-detalhes/patrimonio-detalhes.component';
import { PatrimonioEditarComponent } from './patrimonio/patrimonio-editar/patrimonio-editar.component';
import { PatrimonioComponent } from './patrimonio/patrimonio.component';
import { SobreComponent } from './sobre/sobre.component';
import { TreinosCadastrarComponent } from './treinos/treinos-cadastrar/treinos-cadastrar.component';
import { TreinosDetalhesComponent } from './treinos/treinos-detalhes/treinos-detalhes.component';
import { TreinosEditarComponent } from './treinos/treinos-editar/treinos-editar.component';
import { TreinosComponent } from './treinos/treinos.component';
import { NotFoundComponent } from './navegacao/not-found/not-found.component';
import { LoginGuard } from './login.guard';
import { AuthAlunoGuard } from './auth-aluno.guard';
import { AuthGerenteGuard } from './auth-gerente.guard copy';
import { AuthInstrutorGuard } from './auth-instrutor.guard';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, canActivate: [LoginGuard] },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'notfound', component: NotFoundComponent, canActivate: [AuthGuard] },

  { path: 'meus-dados', component: MeusDadosComponent, canActivate: [AuthGuard] },

  { path: 'meus-treinos', component: MeusTreinosAlunoComponent, canActivate: [AuthGuard, AuthAlunoGuard] },
  { path: 'meus-treinos/treino-detalhado/:parametro', component: TreinoDetalhadoComponent, canActivate: [AuthGuard, AuthAlunoGuard] },

  { path: 'minhas-avaliacoes-fisica', component: MinhasAvaliacoesFisicaAlunoComponent, canActivate: [AuthGuard, AuthAlunoGuard] },
  { path: 'minhas-avaliacoes-fisica/avaliacao-detalhada/:parametro', component: AvaliacaoFisicaDetalhadaComponent, canActivate: [AuthGuard, AuthAlunoGuard] },

  { path: 'meus-pagamentos', component: MeusPagamentosAlunoComponent, canActivate: [AuthGuard, AuthAlunoGuard] },

  { path: 'alunos', component: AlunosComponent, canActivate: [AuthGuard, AuthGerenteGuard] },
  { path: 'alunos/cadastrar', component: AlunosCadastrarComponent, canActivate: [AuthGuard, AuthGerenteGuard] },
  { path: 'alunos/detalhes/:parametro', component: AlunosDetalhesComponent, canActivate: [AuthGuard, AuthGerenteGuard] },
  { path: 'alunos/editar/:parametro', component: AlunosEditarComponent, canActivate: [AuthGuard, AuthGerenteGuard] },

  { path: 'funcionarios', component: FuncionariosComponent, canActivate: [AuthGuard, AuthGerenteGuard] },
  { path: 'funcionarios/cadastrar', component: FuncionariosCadastrarComponent, canActivate: [AuthGuard, AuthGerenteGuard] },
  { path: 'funcionarios/detalhes/:parametro', component: FuncionariosDetalhesComponent, canActivate: [AuthGuard, AuthGerenteGuard] },
  { path: 'funcionarios/editar/:parametro', component: FuncionariosEditarComponent, canActivate: [AuthGuard, AuthGerenteGuard] },

  { path: 'treinos', component: TreinosComponent, canActivate: [AuthGuard, AuthInstrutorGuard] },
  { path: 'treinos/cadastrar', component: TreinosCadastrarComponent, canActivate: [AuthGuard, AuthInstrutorGuard] },
  { path: 'treinos/detalhes/:parametro', component: TreinosDetalhesComponent, canActivate: [AuthGuard, AuthInstrutorGuard] },
  { path: 'treinos/editar/:parametro', component: TreinosEditarComponent, canActivate: [AuthGuard, AuthInstrutorGuard] },

  { path: 'avaliacoes-fisica', component: AvaliacoesFisicaComponent, canActivate: [AuthGuard, AuthInstrutorGuard] },
  { path: 'avaliacoes-fisica/cadastrar', component: AvaliacoesFisicaCadastrarComponent, canActivate: [AuthGuard, AuthInstrutorGuard] },
  { path: 'avaliacoes-fisica/detalhes/:parametro', component: AvaliacoesFisicaDetalhesComponent, canActivate: [AuthGuard, AuthInstrutorGuard] },
  { path: 'avaliacoes-fisica/editar/:parametro', component: AvaliacoesFisicaEditarComponent, canActivate: [AuthGuard, AuthInstrutorGuard] },

  { path: 'pagamentos', component: PagamentosComponent, canActivate: [AuthGuard, AuthGerenteGuard] },
  { path: 'pagamentos/pagamentos-detalhados/:parametro', component: PagamentosDetalhadosComponent, canActivate: [AuthGuard, AuthGerenteGuard] },

  { path: 'patrimonio', component: PatrimonioComponent, canActivate: [AuthGuard, AuthGerenteGuard] },
  { path: 'patrimonio/cadastrar', component: PatrimonioCadastrarComponent, canActivate: [AuthGuard, AuthGerenteGuard] },
  { path: 'patrimonio/detalhes/:parametro', component: PatrimonioDetalhesComponent, canActivate: [AuthGuard, AuthGerenteGuard] },
  { path: 'patrimonio/editar/:parametro', component: PatrimonioEditarComponent, canActivate: [AuthGuard, AuthGerenteGuard] },

  { path: 'sobre', component: SobreComponent, canActivate: [AuthGuard] },

  { path:'**', redirectTo:'/notfound' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

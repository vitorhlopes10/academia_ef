import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlunosCadastrarComponent } from './alunos/alunos-cadastrar/alunos-cadastrar.component';
import { AlunosDetalhesComponent } from './alunos/alunos-detalhes/alunos-detalhes.component';
import { AlunosEditarComponent } from './alunos/alunos-editar/alunos-editar.component';
import { AlunosComponent } from './alunos/alunos.component';
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
import { MenuComponent } from './menu/menu.component';
import { MeusDadosComponent } from './meus-dados/meus-dados.component';
import { MeusPagamentosAlunoComponent } from './meus-pagamentos-aluno/meus-pagamentos-aluno.component';
import { PagamentoDetalheComponent } from './meus-pagamentos-aluno/pagamento-detalhe/pagamento-detalhe.component';
import { MeusTreinosAlunoComponent } from './meus-treinos-aluno/meus-treinos-aluno.component';
import { TreinoAtualDetalhesComponent } from './meus-treinos-aluno/treino-atual-detalhes/treino-atual-detalhes.component';
import { AvaliacaoFisicaAtualDetalhesComponent } from './minhas-avaliacoes-fisica-aluno/avaliacao-fisica-atual-detalhes/avaliacao-fisica-atual-detalhes.component';
import { MinhasAvaliacoesFisicaAlunoComponent } from './minhas-avaliacoes-fisica-aluno/minhas-avaliacoes-fisica-aluno.component';
import { PagamentosDetalhadosComponent } from './pagamentos/pagamentos-detalhados/pagamentos-detalhados.component';
import { PagamentosComponent } from './pagamentos/pagamentos.component';
import { PatrimonioCadastrarComponent } from './patrimonio/patrimonio-cadastrar/patrimonio-cadastrar.component';
import { PatrimonioDetalhesComponent } from './patrimonio/patrimonio-detalhes/patrimonio-detalhes.component';
import { PatrimonioEditarComponent } from './patrimonio/patrimonio-editar/patrimonio-editar.component';
import { PatrimonioComponent } from './patrimonio/patrimonio.component';
import { RodapeComponent } from './rodape/rodape.component';
import { SobreComponent } from './sobre/sobre.component';
import { TreinosCadastrarComponent } from './treinos/treinos-cadastrar/treinos-cadastrar.component';
import { TreinosDetalhesComponent } from './treinos/treinos-detalhes/treinos-detalhes.component';
import { TreinosEditarComponent } from './treinos/treinos-editar/treinos-editar.component';
import { TreinosComponent } from './treinos/treinos.component';

const routes: Routes = [
  { path: '', redirectTo:'/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'rodape', component: RodapeComponent },
  
  { path: 'meus-dados', component: MeusDadosComponent },

  { path: 'meus-treinos', component: MeusTreinosAlunoComponent },
  { path: 'meus-treinos/treino-atual-detalhes/:parametro', component: TreinoAtualDetalhesComponent },

  { path: 'minhas-avaliacoes-fisica', component: MinhasAvaliacoesFisicaAlunoComponent },
  { path: 'minhas-avaliacoes-fisica/avaliacao-fisica-atual-detalhes/:parametro', component: AvaliacaoFisicaAtualDetalhesComponent },

  { path: 'meus-pagamentos', component: MeusPagamentosAlunoComponent },
  { path: 'meus-pagamentos/meus-pagamentos-detalhes/:parametro', component: PagamentoDetalheComponent },

  { path: 'alunos', component: AlunosComponent },
  { path: 'alunos/cadastrar', component: AlunosCadastrarComponent },
  { path: 'alunos/detalhes/:parametro', component: AlunosDetalhesComponent },
  { path: 'alunos/editar/:parametro', component: AlunosEditarComponent },

  { path: 'funcionarios', component: FuncionariosComponent },
  { path: 'funcionarios/cadastrar', component: FuncionariosCadastrarComponent },
  { path: 'funcionarios/detalhes/:parametro', component: FuncionariosDetalhesComponent },
  { path: 'funcionarios/editar/:parametro', component: FuncionariosEditarComponent },

  { path: 'treinos', component: TreinosComponent },
  { path: 'treinos/cadastrar', component: TreinosCadastrarComponent },
  { path: 'treinos/detalhes/:parametro', component: TreinosDetalhesComponent },
  { path: 'treinos/editar/:parametro', component: TreinosEditarComponent },

  { path: 'avaliacoes-fisica', component: AvaliacoesFisicaComponent },
  { path: 'avaliacoes-fisica/cadastrar', component: AvaliacoesFisicaCadastrarComponent },
  { path: 'avaliacoes-fisica/detalhes/:parametro', component: AvaliacoesFisicaDetalhesComponent },
  { path: 'avaliacoes-fisica/editar/:parametro', component: AvaliacoesFisicaEditarComponent },

  { path: 'pagamentos', component: PagamentosComponent },
  { path: 'pagamentos/pagamentos-detalhados/:parametro', component: PagamentosDetalhadosComponent },

  { path: 'patrimonio', component: PatrimonioComponent },
  { path: 'patrimonio/cadastrar', component: PatrimonioCadastrarComponent },
  { path: 'patrimonio/detalhes/:parametro', component: PatrimonioDetalhesComponent },
  { path: 'patrimonio/editar/:parametro', component: PatrimonioEditarComponent },

  { path: 'sobre', component: SobreComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

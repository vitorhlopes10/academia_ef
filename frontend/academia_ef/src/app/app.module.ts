import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { RodapeComponent } from './rodape/rodape.component';
import { SobreComponent } from './sobre/sobre.component';
import { AlunosComponent } from './alunos/alunos.component';
import { FuncionariosComponent } from './funcionarios/funcionarios.component';
import { PatrimonioComponent } from './patrimonio/patrimonio.component';
import { PatrimonioCadastrarComponent } from './patrimonio/patrimonio-cadastrar/patrimonio-cadastrar.component';
import { PatrimonioEditarComponent } from './patrimonio/patrimonio-editar/patrimonio-editar.component';
import { PatrimonioDetalhesComponent } from './patrimonio/patrimonio-detalhes/patrimonio-detalhes.component'
import { HttpClientModule } from '@angular/common/http';
import { PagamentosComponent } from './pagamentos/pagamentos.component';
import { AvaliacoesFisicaComponent } from './avaliacoes-fisica/avaliacoes-fisica.component';
import { TreinosComponent } from './treinos/treinos.component';

import {TableModule} from 'primeng/table';
import {BreadcrumbModule} from 'primeng/breadcrumb';
import {MenubarModule} from 'primeng/menubar';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ToastModule} from 'primeng/toast';
import {InputNumberModule} from 'primeng/inputnumber';
import {DropdownModule} from 'primeng/dropdown';
import {CalendarModule} from 'primeng/calendar';
import {InputMaskModule} from 'primeng/inputmask';
import {CheckboxModule} from 'primeng/checkbox';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {FieldsetModule} from 'primeng/fieldset';
import {DialogModule} from 'primeng/dialog';

import { ConfirmationService, MessageService } from 'primeng/api';
import { AlunosCadastrarComponent } from './alunos/alunos-cadastrar/alunos-cadastrar.component';
import { AlunosEditarComponent } from './alunos/alunos-editar/alunos-editar.component';
import { AlunosDetalhesComponent } from './alunos/alunos-detalhes/alunos-detalhes.component';
import { FuncionariosEditarComponent } from './funcionarios/funcionarios-editar/funcionarios-editar.component';
import { FuncionariosDetalhesComponent } from './funcionarios/funcionarios-detalhes/funcionarios-detalhes.component';
import { TreinosCadastrarComponent } from './treinos/treinos-cadastrar/treinos-cadastrar.component';
import { TreinosEditarComponent } from './treinos/treinos-editar/treinos-editar.component';
import { TreinosDetalhesComponent } from './treinos/treinos-detalhes/treinos-detalhes.component';
import { AvaliacoesFisicaDetalhesComponent } from './avaliacoes-fisica/avaliacoes-fisica-detalhes/avaliacoes-fisica-detalhes.component';
import { AvaliacoesFisicaCadastrarComponent } from './avaliacoes-fisica/avaliacoes-fisica-cadastrar/avaliacoes-fisica-cadastrar.component';
import { AvaliacoesFisicaEditarComponent } from './avaliacoes-fisica/avaliacoes-fisica-editar/avaliacoes-fisica-editar.component';
import { MeusDadosComponent } from './meus-dados/meus-dados.component';
import { FuncionariosCadastrarComponent } from './funcionarios/funcionarios-cadastrar/funcionarios-cadastrar.component';
import { MeusTreinosAlunoComponent } from './meus-treinos-aluno/meus-treinos-aluno.component';
import { MinhasAvaliacoesFisicaAlunoComponent } from './minhas-avaliacoes-fisica-aluno/minhas-avaliacoes-fisica-aluno.component';
import { TreinoAtualDetalhesComponent } from './meus-treinos-aluno/treino-atual-detalhes/treino-atual-detalhes.component';
import { AvaliacaoFisicaAtualDetalhesComponent } from './minhas-avaliacoes-fisica-aluno/avaliacao-fisica-atual-detalhes/avaliacao-fisica-atual-detalhes.component';
import { PagamentosDetalhadosComponent } from './pagamentos/pagamentos-detalhados/pagamentos-detalhados.component';
import { MeusPagamentosAlunoComponent } from './meus-pagamentos-aluno/meus-pagamentos-aluno.component';
import { PagamentoDetalheComponent } from './meus-pagamentos-aluno/pagamento-detalhe/pagamento-detalhe.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    MenuComponent,
    RodapeComponent,
    SobreComponent,
    AlunosComponent,
    FuncionariosComponent,
    PatrimonioComponent,
    PagamentosComponent,
    AvaliacoesFisicaComponent,
    TreinosComponent,
    PatrimonioDetalhesComponent,
    PatrimonioCadastrarComponent,
    PatrimonioEditarComponent,
    AlunosCadastrarComponent,
    AlunosEditarComponent,
    AlunosDetalhesComponent,
    FuncionariosEditarComponent,
    FuncionariosDetalhesComponent,
    FuncionariosCadastrarComponent,
    TreinosCadastrarComponent,
    TreinosEditarComponent,
    TreinosDetalhesComponent,
    AvaliacoesFisicaDetalhesComponent,
    AvaliacoesFisicaCadastrarComponent,
    AvaliacoesFisicaEditarComponent,
    MeusDadosComponent,
    MeusTreinosAlunoComponent,
    MinhasAvaliacoesFisicaAlunoComponent,
    TreinoAtualDetalhesComponent,
    AvaliacaoFisicaAtualDetalhesComponent,
    PagamentosDetalhadosComponent,
    MeusPagamentosAlunoComponent,
    PagamentoDetalheComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    TableModule,
    BreadcrumbModule,
    MenubarModule,
    InputTextModule,
    ButtonModule,
    ConfirmDialogModule,
    BrowserAnimationsModule,
    ToastModule,
    InputNumberModule,
    DropdownModule,
    CalendarModule,
    InputMaskModule,
    CheckboxModule,
    InputTextareaModule,
    FieldsetModule,
    DialogModule
    ],
  providers: [
    ConfirmationService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

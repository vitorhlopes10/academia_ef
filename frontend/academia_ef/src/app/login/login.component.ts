import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { StatusUsuarioEnum } from '../enums/status-usuario';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: string = '';
  senha: string = '';

  constructor(private usuarioService: UsuarioService,
    private messageService: MessageService,
    private router: Router) { }

  ngOnInit(): void {
  }

  autenticar() {
    if (!(this.login || this.senha)) {
      this.messageService.add({severity:'warn', summary: 'Atenção', detail: 'Preencha os campos de Login e Senha' });   
      return;  
    }

    if (!(this.login)) {
      this.messageService.add({severity:'warn', summary: 'Atenção', detail: 'Preencha o campos de Login' });   
      return;  
    }

    if (!(this.senha)) {
      this.messageService.add({severity:'warn', summary: 'Atenção', detail: 'Preencha o campos de Senha' });   
      return;  
    }

    this.login = this.login.replace('.', '').replace('.', '').replace('-', '');

    this.usuarioService.login(this.login, this.senha).subscribe(
      usuario => {
        if (usuario.idStatusUsuario == StatusUsuarioEnum.INATIVO) {
          this.messageService.add({severity:'warn', summary: 'Atenção', detail: 'O usuário se encontra Inativo' });
          return;
        }

        let tipoDeUsuario = '';
        let id = 0

        if (usuario.aluno) {
          tipoDeUsuario = 'ALUNO';
          id = usuario.aluno.id;
        }

        if (usuario.funcionario) {
          tipoDeUsuario = usuario.funcionario.cargo.nome.toUpperCase();
          id = usuario.funcionario.id;
        }
        
        window.localStorage.setItem('id', id.toString());
        window.localStorage.setItem('login', usuario.login);
        window.localStorage.setItem('tipoDeUsuario', tipoDeUsuario);

        this.router.navigate(['home']);
      },
      error => {
        this.messageService.add({severity:'warn', summary: 'Atenção', detail: error.error });
      }
    )
  }
}

import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { UsuarioService } from './services/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class AuthAlunoGuard implements CanActivate {

  constructor(private usuarioService: UsuarioService) { }

  canActivate(): boolean {
    const status = this.usuarioService.getStatusDaSessao();

    if(!status) {
      return false
    }

    const tipoDeUsuario = this.usuarioService.getUsuarioSessao().tipoDeUsuario;
    return tipoDeUsuario === 'ALUNO';
  }
}
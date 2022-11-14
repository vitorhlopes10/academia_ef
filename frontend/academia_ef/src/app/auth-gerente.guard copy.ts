import { Injectable } from '@angular/core';
import { CanActivate, CanLoad } from '@angular/router';
import { TipoDeUsuarioEnum } from './enums/tipo-de-usuario-enum';
import { UsuarioService } from './services/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGerenteGuard implements CanActivate {

  constructor(private usuarioService: UsuarioService) { }

  canActivate(): boolean {
    const status = this.usuarioService.getStatusDaSessao();

    if(!status) {
      return false
    }

    const tipoDeUsuario = this.usuarioService.getUsuarioSessao().tipoDeUsuario;
    return tipoDeUsuario === 'GERENTE';
  }
}
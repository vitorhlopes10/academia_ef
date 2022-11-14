import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { UsuarioService } from './services/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private usuarioService: UsuarioService) { }

  canActivate(): boolean {
    const status = this.usuarioService.getStatusDaSessao();
    return !status;
  }
}
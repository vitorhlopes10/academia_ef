import { Injectable } from '@angular/core';
import { CanActivate, CanLoad } from '@angular/router';
import { UsuarioService } from './services/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {

  constructor(private usuarioService: UsuarioService) { }

  canLoad(): boolean {
    return this.usuarioService.getStatusDaSessao();
  }

  canActivate(): boolean {
    return this.usuarioService.getStatusDaSessao();
  }
}
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsuarioInterface } from '../models/interfaces/usuario-interface';
import { UsuarioModel } from '../models/usuario-model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  configUrl = 'https://localhost:7170';

  login(login: string, senha: string): Observable<UsuarioInterface> {
    return this.http.get<UsuarioInterface>(`${this.configUrl}/Usuarios/Login/${login}/${senha}`);
  }

  getUsuarioSessao(): any{
    const usuario = {
      id: window.localStorage.getItem('id'),
      login: window.localStorage.getItem('login'),
      tipoDeUsuario: window.localStorage.getItem('tipoDeUsuario'),
    }

    return usuario;
  }

  logout(): any{
      window.localStorage.clear();
  }

  getStatusDaSessao() {
    return !!(window.localStorage.getItem('id') && 
    window.localStorage.getItem('login') && 
    window.localStorage.getItem('tipoDeUsuario'));
  }
}

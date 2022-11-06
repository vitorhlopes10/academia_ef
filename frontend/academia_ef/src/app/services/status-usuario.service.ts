import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StatusUsuarioModel } from '../models/status-usuario-model';

@Injectable({
  providedIn: 'root'
})
export class StatusUsuarioService {

  constructor(private http: HttpClient) { }

  configUrl = 'https://localhost:7170';

  buscarPorId(id: number): Observable<StatusUsuarioModel> {
    return this.http.get<StatusUsuarioModel>(`${this.configUrl}/StatusUsuario/${id}`);
  }

  buscarTodos(): Observable<StatusUsuarioModel[]> {
    return this.http.get<StatusUsuarioModel[]>(`${this.configUrl}/StatusUsuario`);
  }
}

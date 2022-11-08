import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FuncionarioFiltro } from '../models/filtros/funcionario-filtro';
import { FuncionarioModel } from '../models/funcionario-model';
import { FuncionarioInterface } from '../models/interfaces/funcionario-model';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  constructor(private http: HttpClient) { }

  configUrl = 'https://localhost:7170';

  buscarPorId(id: number): Observable<FuncionarioInterface> {
    return this.http.get<FuncionarioInterface>(`${this.configUrl}/Funcionarios/${id}`);
  }

  buscarTodos(): Observable<FuncionarioInterface[]> {
    return this.http.get<FuncionarioInterface[]>(`${this.configUrl}/Funcionarios`);
  }

  filtro(filtro: FuncionarioFiltro): Observable<FuncionarioInterface[]> {
    return this.http.get<FuncionarioInterface[]>(`${this.configUrl}/Funcionarios/Filtro/${filtro}`);
  }

  ativar(id: number): Observable<any> {
    return this.http.delete<Observable<any>>(`${this.configUrl}/Funcionarios/${id}`);
  }

  inativar(id: number): Observable<any> {
    return this.http.delete<Observable<any>>(`${this.configUrl}/Funcionarios/${id}`);
  }

  cadastrar(obj: FuncionarioModel) {
    return this.http.post<Observable<FuncionarioModel>>(`${this.configUrl}/Funcionarios`, obj)
  }

  editar(obj: FuncionarioModel) {
    return this.http.put<Observable<FuncionarioModel>>(`${this.configUrl}/Funcionarios`, obj)
  }
}
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
    const cpf = filtro.cpf.replace('.', '').replace('.', '').replace('-', '');
    const nome = filtro.nome.trim();
    const matricula = filtro.matricula.trim();
 
    return this.http.get<FuncionarioInterface[]>(`${this.configUrl}/Funcionarios/Filtro?cpf=${cpf}&nome=${nome}&matricula=${matricula}`);
  }

  ativar(id: number): Observable<any> {
    return this.http.post<Observable<any>>(`${this.configUrl}/Funcionarios/Ativar/${id}`, null);
  }

  inativar(id: number): Observable<any> {
    return this.http.post<Observable<any>>(`${this.configUrl}/Funcionarios/Inativar/${id}`, null);
  }

  cadastrar(obj: FuncionarioModel) {
    return this.http.post<Observable<FuncionarioModel>>(`${this.configUrl}/Funcionarios`, obj)
  }

  editar(obj: FuncionarioModel) {
    return this.http.put<Observable<FuncionarioModel>>(`${this.configUrl}/Funcionarios`, obj)
  }
}

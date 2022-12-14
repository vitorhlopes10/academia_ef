import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AlunoModel } from '../models/aluno-model';
import { AlunoFiltro } from '../models/filtros/aluno-filtro';
import { AlunoInterface } from '../models/interfaces/aluno-interface';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  constructor(private http: HttpClient) { }

  configUrl = 'https://localhost:7170';

  buscarPorId(id: number): Observable<AlunoInterface> {
    return this.http.get<AlunoInterface>(`${this.configUrl}/Alunos/${id}`);
  }

  buscarTodos(): Observable<AlunoInterface[]> {
    return this.http.get<AlunoInterface[]>(`${this.configUrl}/Alunos`);
  }

  filtro(filtro: AlunoFiltro): Observable<AlunoInterface[]> {
    const cpf = filtro.cpf.replace('.', '').replace('.', '').replace('-', '');
    const nome = filtro.nome.trim();
    const matricula = filtro.matricula.trim();

    return this.http.get<AlunoInterface[]>(`${this.configUrl}/Alunos/Filtro?cpf=${cpf}&nome=${nome}&matricula=${matricula}`);
  }

  ativar(id: number): Observable<any> {
    return this.http.post<Observable<any>>(`${this.configUrl}/Alunos/Ativar/${id}`, null);
  }

  inativar(id: number): Observable<any> {
    return this.http.post<Observable<any>>(`${this.configUrl}/Alunos/Inativar/${id}`, null);
  }

  cadastrar(obj: AlunoModel) {
    return this.http.post<Observable<AlunoModel>>(`${this.configUrl}/Alunos`, obj)
  }

  editar(obj: AlunoModel) {
    return this.http.put<Observable<AlunoModel>>(`${this.configUrl}/Alunos`, obj)
  }
}

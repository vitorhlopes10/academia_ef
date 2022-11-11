import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TreinoFiltro } from '../models/filtros/treino-filtro';
import { TreinoInterface } from '../models/interfaces/treino-interface';
import { TreinoModel } from '../models/treino-model';

@Injectable({
  providedIn: 'root'
})
export class TreinoService {

  constructor(private http: HttpClient) { }

  configUrl = 'https://localhost:7170';

  buscarPorId(id: number): Observable<TreinoInterface> {
    return this.http.get<TreinoInterface>(`${this.configUrl}/Treinos/${id}`);
  }

  buscarTodos(): Observable<TreinoInterface[]> {
    return this.http.get<TreinoInterface[]>(`${this.configUrl}/Treinos`);
  }

  buscarTodosPorAluno(idAluno: number): Observable<TreinoInterface[]> {
    return this.http.get<TreinoInterface[]>(`${this.configUrl}/Treinos/PorAluno/${idAluno}`);
  }

  filtro(filtro: TreinoFiltro): Observable<TreinoInterface[]> {
    const dateInicial = filtro.dataInicial ? `${filtro.dataInicial.getDate()}-${filtro.dataInicial.getMonth() + 1}-${filtro.dataInicial.getFullYear()}` : '';
    const dateFinal = filtro.dataFinal ? `${filtro.dataFinal.getDate()}-${filtro.dataFinal.getMonth() + 1}-${filtro.dataFinal.getFullYear()}` : '';
    const nomeAluno = filtro.nomeAluno ? filtro.nomeAluno?.trim() : '';
    const idAluno = filtro.idAluno;

    return this.http.get<TreinoInterface[]>(`${this.configUrl}/Treinos/Filtro?nomeAluno=${nomeAluno}&dataInicial=${dateInicial}&dataFinal=${dateFinal}`);
  }

  deletar(id: number): Observable<any> {
    return this.http.delete<Observable<any>>(`${this.configUrl}/Treinos/${id}`);
  }

  cadastrar(obj: TreinoModel) {
    return this.http.post<Observable<TreinoModel>>(`${this.configUrl}/Treinos`, obj)
  }

  editar(obj: TreinoModel) {
    return this.http.put<Observable<TreinoModel>>(`${this.configUrl}/Treinos`, obj)
  }
}

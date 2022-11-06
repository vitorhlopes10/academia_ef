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

  filtro(filtro: TreinoFiltro): Observable<TreinoInterface[]> {
    return this.http.get<TreinoInterface[]>(`${this.configUrl}/Treinos/Filtro/${filtro}`);
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

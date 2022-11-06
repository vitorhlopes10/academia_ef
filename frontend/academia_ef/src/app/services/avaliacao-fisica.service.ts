import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AvaliacaoFisicaModel } from '../models/avaliacao-fisica-model';
import { AvaliacaoFisicaFiltro } from '../models/filtros/avaliacao-fisica-filtro';
import { AvaliacaoFisicaInterface } from '../models/interfaces/avaliacao-fisica-interface';

@Injectable({
  providedIn: 'root'
})
export class AvaliacaoFisicaService {

  constructor(private http: HttpClient) { }

  configUrl = 'https://localhost:7170';

  buscarPorId(id: number): Observable<AvaliacaoFisicaInterface> {
    return this.http.get<AvaliacaoFisicaInterface>(`${this.configUrl}/AvaliacoesFisica/${id}`);
  }

  buscarTodos(): Observable<AvaliacaoFisicaInterface[]> {
    return this.http.get<AvaliacaoFisicaInterface[]>(`${this.configUrl}/AvaliacoesFisica`);
  }

  filtro(filtro: AvaliacaoFisicaFiltro): Observable<AvaliacaoFisicaInterface[]> {
    return this.http.get<AvaliacaoFisicaInterface[]>(`${this.configUrl}/AvaliacoesFisica/Filtro/${filtro}`);
  }

  deletar(id: number): Observable<any> {
    return this.http.delete<Observable<any>>(`${this.configUrl}/AvaliacoesFisica/${id}`);
  }

  cadastrar(obj: AvaliacaoFisicaModel) {
    return this.http.post<Observable<AvaliacaoFisicaModel>>(`${this.configUrl}/AvaliacoesFisica`, obj)
  }

  editar(obj: AvaliacaoFisicaModel) {
    return this.http.put<Observable<AvaliacaoFisicaModel>>(`${this.configUrl}/AvaliacoesFisica`, obj)
  }
}

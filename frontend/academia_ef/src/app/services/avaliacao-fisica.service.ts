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

  buscarTodosPorAluno(idAluno: number): Observable<AvaliacaoFisicaInterface[]> {
    return this.http.get<AvaliacaoFisicaInterface[]>(`${this.configUrl}/AvaliacoesFisica/PorAluno/${idAluno}`);
  }

  filtro(filtro: AvaliacaoFisicaFiltro): Observable<AvaliacaoFisicaInterface[]> {
    const dateInicial = filtro.dataInicial ? `${filtro.dataInicial.getDate()}-${filtro.dataInicial.getMonth() + 1}-${filtro.dataInicial.getFullYear()}` : '';
    const dateFinal = filtro.dataFinal ? `${filtro.dataFinal.getDate()}-${filtro.dataFinal.getMonth() + 1}-${filtro.dataFinal.getFullYear()}` : '';
    const nomeAluno = filtro.nomeAluno ? filtro.nomeAluno?.trim() : '';
    const idAluno = filtro.idAluno;

    return this.http
      .get<AvaliacaoFisicaInterface[]>(
        `${this.configUrl}/AvaliacoesFisica/Filtro?nomeAluno=${nomeAluno}&dataInicial=${dateInicial}&dataFinal=${dateFinal}`);
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

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PagamentoFiltro } from '../models/filtros/pagamento-filtro';
import { PagamentoMensalidadeInterface } from '../models/interfaces/pagamento-mensalidade-interface';
import { PagamentoMensalidadeModel } from '../models/pagamento-mensalidade-model';

@Injectable({
  providedIn: 'root'
})
export class PagamentoMensalidadeService {

  constructor(private http: HttpClient) { }

  configUrl = 'https://localhost:7170';

  buscarPorId(id: number): Observable<PagamentoMensalidadeInterface> {
    return this.http.get<PagamentoMensalidadeInterface>(`${this.configUrl}/PagamentosMensalidades/${id}`);
  }

  buscarTodos(): Observable<PagamentoMensalidadeInterface[]> {
    return this.http.get<PagamentoMensalidadeInterface[]>(`${this.configUrl}/PagamentosMensalidades`);
  }

  buscarTodosPorAluno(idAluno: number): Observable<PagamentoMensalidadeInterface[]> {
    return this.http.get<PagamentoMensalidadeInterface[]>(`${this.configUrl}/PagamentosMensalidades/PorAluno/${idAluno}`);
  }

  filtro(filtro: PagamentoFiltro): Observable<PagamentoMensalidadeInterface[]> {
    return this.http.get<PagamentoMensalidadeInterface[]>(`${this.configUrl}/PagamentosMensalidades/Filtro/${filtro}`);
  }

  deletar(id: number): Observable<any> {
    return this.http.delete<Observable<any>>(`${this.configUrl}/PagamentosMensalidades/${id}`);
  }

  registrarPagamento(obj: PagamentoMensalidadeModel) {
    return this.http.post<Observable<PagamentoMensalidadeModel>>(`${this.configUrl}/PagamentosMensalidades`, obj)
  }

  editar(obj: PagamentoMensalidadeModel) {
    return this.http.put<Observable<PagamentoMensalidadeModel>>(`${this.configUrl}/PagamentosMensalidades`, obj)
  }
}

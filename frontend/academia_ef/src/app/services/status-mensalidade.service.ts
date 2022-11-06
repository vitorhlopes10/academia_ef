import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StatusMensalidadeModel } from '../models/status-mensalidade-model';

@Injectable({
  providedIn: 'root'
})
export class StatusMensalidadeService {

  constructor(private http: HttpClient) { }

  configUrl = 'https://localhost:7170';

  buscarPorId(id: number): Observable<StatusMensalidadeModel> {
    return this.http.get<StatusMensalidadeModel>(`${this.configUrl}/StatusMensalidade/${id}`);
  }

  buscarTodos(): Observable<StatusMensalidadeModel[]> {
    return this.http.get<StatusMensalidadeModel[]>(`${this.configUrl}/StatusMensalidade`);
  }
}

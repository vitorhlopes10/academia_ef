import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PatrimonioInterface } from '../models/interfaces/patrimonio-interface';
import { PatrimonioModel } from '../models/patrimonio-model';

@Injectable({
  providedIn: 'root'
})
export class PatrimonioService {

  constructor(private http: HttpClient) { }

  configUrl = 'https://localhost:7170';

  buscarPorId(id: number): Observable<PatrimonioInterface> {
    return this.http.get<PatrimonioInterface>(`${this.configUrl}/Patrimonio/${id}`);
  }

  buscarTodos(): Observable<PatrimonioInterface[]> {
    return this.http.get<PatrimonioInterface[]>(`${this.configUrl}/Patrimonio`);
  }

  filtro(nome: string): Observable<PatrimonioInterface[]> {
    return this.http.get<PatrimonioInterface[]>(`${this.configUrl}/Patrimonio/Filtro/${nome}`);
  }

  deletar(id: number): Observable<any> {
    return this.http.delete<Observable<any>>(`${this.configUrl}/Patrimonio/${id}`);
  }

  cadastrar(obj: PatrimonioModel) {
    return this.http.post<Observable<PatrimonioModel>>(`${this.configUrl}/Patrimonio`, obj)
  }

  editar(obj: PatrimonioModel) {
    return this.http.put<Observable<PatrimonioModel>>(`${this.configUrl}/Patrimonio`, obj)
  }
}

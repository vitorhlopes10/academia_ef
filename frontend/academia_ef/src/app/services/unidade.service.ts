import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UnidadeInterface } from '../models/interfaces/unidade-interface';
import { UnidadeModel } from '../models/unidade-model';

@Injectable({
  providedIn: 'root'
})
export class UnidadeService {

  constructor(private http: HttpClient) { }

  configUrl = 'https://localhost:7170';

  buscarPorId(id: number): Observable<UnidadeInterface> {
    return this.http.get<UnidadeInterface>(`${this.configUrl}/Unidades/${id}`);
  }

  buscarTodos(): Observable<UnidadeInterface[]> {
    return this.http.get<UnidadeInterface[]>(`${this.configUrl}/Unidades`);
  }
}

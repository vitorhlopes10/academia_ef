import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PlanoInterface } from '../models/interfaces/plano-interface';
import { PlanoModel } from '../models/plano-model';

@Injectable({
  providedIn: 'root'
})
export class PlanoService {

  constructor(private http: HttpClient) { }

  configUrl = 'https://localhost:7170';

  buscarPorId(id: number): Observable<PlanoInterface> {
    return this.http.get<PlanoInterface>(`${this.configUrl}/Planos/${id}`);
  }

  buscarTodos(): Observable<PlanoInterface[]> {
    return this.http.get<PlanoInterface[]>(`${this.configUrl}/Planos`);
  }
}

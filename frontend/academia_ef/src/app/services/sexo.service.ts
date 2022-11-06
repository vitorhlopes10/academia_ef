import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SexoInterface } from '../models/interfaces/sexo-interface';
import { SexoModel } from '../models/sexo-model';

@Injectable({
  providedIn: 'root'
})
export class SexoService {

  constructor(private http: HttpClient) { }

  configUrl = 'https://localhost:7170';

  buscarPorId(id: number): Observable<SexoInterface> {
    return this.http.get<SexoInterface>(`${this.configUrl}/Sexos/${id}`);
  }

  buscarTodos(): Observable<SexoInterface[]> {
    return this.http.get<SexoInterface[]>(`${this.configUrl}/Sexos`);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BiotipoModel } from '../models/biotipo-model';

@Injectable({
  providedIn: 'root'
})
export class BiotipoService {

  constructor(private http: HttpClient) { }

  configUrl = 'https://localhost:7170';

  buscarPorId(id: number): Observable<BiotipoModel> {
    return this.http.get<BiotipoModel>(`${this.configUrl}/Biotipos/${id}`);
  }

  buscarTodos(): Observable<BiotipoModel[]> {
    return this.http.get<BiotipoModel[]>(`${this.configUrl}/Biotipos`);
  }
}

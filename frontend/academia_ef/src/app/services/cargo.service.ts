import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CargoModel } from '../models/cargo-model';

@Injectable({
  providedIn: 'root'
})
export class CargoService {

  constructor(private http: HttpClient) { }

  configUrl = 'https://localhost:7170';

  buscarPorId(id: number): Observable<CargoModel> {
    return this.http.get<CargoModel>(`${this.configUrl}/Cargos/${id}`);
  }

  buscarTodos(): Observable<CargoModel[]> {
    return this.http.get<CargoModel[]>(`${this.configUrl}/Cargos`);
  }
}

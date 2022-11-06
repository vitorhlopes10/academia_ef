import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnderecoService {

  constructor(private http: HttpClient) { }

  configUrl = 'https://localhost:7170';
}

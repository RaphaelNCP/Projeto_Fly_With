import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Promocao } from '../Types/Type';

@Injectable({
  providedIn: 'root',
})
export class PromocaoService {
  constructor(private httpClient: HttpClient) {}

  private apiUrl: string = environment.apiUrl;

  listar(): Observable<Promocao[]> {
    return this.httpClient.get<Promocao[]>(`${this.apiUrl}/promocoes`);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ClientResponse } from '../models/client-response.model';



@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private baseUrl = 'https://boasorte.teddybackoffice.com.br/users';

  constructor(private http: HttpClient) { }

  listClients(page: number, limit: number): Observable<ClientResponse> {
     let params = new HttpParams()
    .set('page', page.toString())
    .set('limit', limit.toString());
console.log('Chamando API com params:', params);
console.log('Chamando API:', this.baseUrl, 'com params:', params.toString())

    return this.http.get<ClientResponse>(this.baseUrl, {params});

  }

   deleteClient(id: number) {
    return this.http.delete(`${this. baseUrl}/${id}`,{
      responseType: 'text' as 'json'
    });
  }
}

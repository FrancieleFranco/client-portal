import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ClientResponse } from '../models/client-response.model';
import { ClientRequest } from '../models/client-request.model';
import {
  ClientCreate,
  ClientData,
  ClientUpdate,
} from '../models/clients-data.model';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  private baseURL = 'https://boasorte.teddybackoffice.com.br/users';

  constructor(private http: HttpClient) {}

  getClients(
    page: number,
    limit: number
  ): Observable<{
    clients: ClientData[];
    totalPages: number;
    currentPage: number;
  }> {
    return this.http.get<{
      clients: ClientData[];
      totalPages: number;
      currentPage: number;
    }>(`${this.baseURL}?page=${page}&limit=${limit}`);
  }

  deleteClient(id: number): Observable<any> {
    return this.http.delete(`${this.baseURL}/${id}`, { responseType: 'text' });
  }

  listClients(id: number): Observable<ClientData> {
    return this.http.get<ClientData>(`${this.baseURL}/${id}`);
  }

  patchClient(id: number, data: ClientUpdate): Observable<ClientData> {
    return this.http.patch<ClientData>(`${this.baseURL}/${id}`, data);
  }

  createClient(data: ClientCreate): Observable<ClientData> {
    return this.http.post<ClientData>(`${this.baseURL}`, data);
  }
}

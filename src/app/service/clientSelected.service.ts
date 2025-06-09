import { Injectable } from '@angular/core';
import { ClientData } from '../models/clients-data.model';

@Injectable({
  providedIn: 'root',
})
export class ClientSelectedService {
  private selecionados: ClientData[] = [];

  constructor() {}

  getSelecionados(): ClientData[] {
    return this.selecionados;
  }

  addSelected(cliente: ClientData): void {
    if (!this.clientSelected(cliente.id)) {
      this.selecionados.push(cliente);
      console.log('Cliente adicionado:', cliente);
    }
  }

  removerSelecionado(clienteId: number): void {
    this.selecionados = this.selecionados.filter((c) => c.id !== clienteId);
  }

  clientSelected(id: number): boolean {
    return this.selecionados.some((client) => client.id === id);
  }
}

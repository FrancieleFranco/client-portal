export interface ClientData {
  id: number;
  name: string;
  salary: number;
  companyValuation: number;
  createdAt: string;
  updatedAt: string;
}

export interface ClientUpdate {
  name?: string;
  salary?: number;
  companyValuation?: number;
}

export interface ClientCreate {
  name: string;
  salary: number;
  companyValuation: number;
}

import { ClientRequest } from "./client-request.model";

export interface ClientResponse {
     /* id: number
      name: string,
      salary: number,
      companyValuation:number
      createdAt: string
      updatedAt: string*/
      clients: ClientRequest[];
  total: number;
  page: number;
  limit: number

}

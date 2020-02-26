import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import Deal from './deal';

@Injectable({
  providedIn: 'root'
})
export class DealService {

  private  dealUrl = 'api/deals';
  constructor( private http: HttpClient ) { }

  GetDeals():Observable<Deal[]>{
    return this.http.get<Deal[]>(this.dealUrl);
  }

  CreateDeal( newDeal : Deal ):Observable<Deal[]>{
    console.log(newDeal);
    return this.http.post<Deal[]>(this.dealUrl , newDeal);
  }

  GetDeal( id : number ):Observable<Deal[]>{
    const url = `${this.dealUrl}/${id}`;
    return this.http.get<Deal[]>(url);
  }

  UpdateDeal( updatedeal : Deal ):Observable<Deal[]>{
    const url = `${this.dealUrl}/${updatedeal.id}`;
    return this.http.put<Deal[]>(url, updatedeal);
  }

  DeleteDeal( id : number ):Observable<Deal[]>{
    const url = `${this.dealUrl}/${id}`;
    return this.http.delete<Deal[]>(url);
  }
}

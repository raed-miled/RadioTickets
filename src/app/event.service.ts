import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import event from './event';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private eventUrl = 'api/evnets'

  constructor( private http : HttpClient ) { }

  GetEvents():Observable<event[]>{
    return this.http.get<event[]>(this.eventUrl);
  }

  CreateEvent( newEvent : event ):Observable<event[]>{
    console.log(newEvent);
    return this.http.post<event[]>(this.eventUrl , newEvent);
  }

  GetEvent( id:number ):Observable<event[]>{
    const url = `${this.eventUrl}/${id}`;
    return this.http.get<event[]>(url);
  }

  UpdateEvent( updateEvent : event ):Observable<event[]>{
    const url = `${this.eventUrl}/${updateEvent.id}`;
    return this.http.put<event[]>(url,updateEvent);
  }

  DeleteEvent( id:number ):Observable<event[]>{
    const url = `${this.eventUrl}/${id}`;
    return this.http.delete<event[]>(url);
  }
}

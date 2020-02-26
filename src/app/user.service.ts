import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import User from './user';
import { HttpClient , HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private UserUrl = 'api/user';

  constructor( private http : HttpClient ) { }

  
  CreateUser (): Observable<User> {
    return ; 
  }
  
}

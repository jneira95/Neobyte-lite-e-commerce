import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  constructor (private http: HttpClient) { }

  private authEnpoint = 'http://localhost:5000'
  private login = '/login'
  private signup = '/signup'
  private me = '/me'

    httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }

    login (user: object): Observable<User> {

    }
}

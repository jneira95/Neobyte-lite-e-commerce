import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'
import { IUser } from '../store/models/user.model'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor (private http: HttpClient) { }

  newUser: IUser = {
    username: 'jorge',
    email: 'jorgengarriga@gmail.com',
    password: 'asdqwe123'
  }

  private authEnpoint = 'http://localhost:5000'
  private login = '/login'
  private signup = '/signup'
  private me = '/profile'

    httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }

    userLogin (user: any): Observable<IUser> {
      const url = `${this.authEnpoint}${this.login}`
      console.log(user)
      console.log(this.http.post(url, user))

      return this.http.post<any>(url, user)
    }

    userRegister (user: object): Observable<IUser> {
      const url = `${this.authEnpoint}${this.signup}`
      return this.http.post<IUser>(url, user)
    }
}

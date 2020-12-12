import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Router } from '@angular/router'
import { Observable } from 'rxjs'
import { catchError, tap } from 'rxjs/operators'
import { IUser, ILogin } from '../store/models/user.model'
import { MessageService } from './error-message.service'
import { UserLoginStateService } from './user-login-state.service'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor (
    private router: Router,
    private http: HttpClient,
    private messageService: MessageService,
    private userLoginState: UserLoginStateService
  ) { }

  private authEnpoint = 'http://192.168.0.11:5000/user'
  private login = '/login'
  private signup = '/signup'
  private profile = '/profile'

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  log (message: string[]): void {
    this.messageService.add(message)
  }

  validateToken (token: any): any {
    const url = `${this.authEnpoint}${this.profile}`
    return this.http.get<any>(url, { headers: { ...this.httpOptions, ...token } })
      .subscribe((user) => {
        this.userLoginState.setUser(user)
        this.router.navigate(['profile'])
      })
  }

  userLogin (user: object): Observable<ILogin> {
    const url = `${this.authEnpoint}${this.login}`
    return this.http.post<any>(url, user).pipe(
      tap(token => this.validateToken(token)),
      catchError(async (error) => {
        this.log(
          error.error.errors
            .map((error: any) => error.msg)
        )
      })
    )
  }

  userRegister (user: object): Observable<IUser> {
    const url = `${this.authEnpoint}${this.signup}`
    return this.http.post<any>(url, user).pipe(
      tap(token => this.validateToken(token)),
      catchError(async (error) => {
        this.log(
          error.error.errors
            .map((error: any) => error.msg)
        )
      })
    )
  }
}

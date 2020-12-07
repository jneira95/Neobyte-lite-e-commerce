import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class UserLoginStateService {
  setUser (user: object): void {
    localStorage.setItem('user', JSON.stringify(user))
  }

  getUser () {
    return localStorage.getItem('user')
  }

  removeUser (): void {
    localStorage.removeItem('user')
  }
}

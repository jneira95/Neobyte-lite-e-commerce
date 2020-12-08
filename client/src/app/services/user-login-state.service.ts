import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class UserLoginStateService {
   private loggedStatus: BehaviorSubject<boolean>;
   constructor () {
     this.loggedStatus = new BehaviorSubject<boolean>(false)
   }

   setUser (user: object): void {
     localStorage.setItem('user', JSON.stringify(user))
     this.loggedStatus.next(true)
   }

   getUser () {
     return localStorage.getItem('user')
   }

   getValue (): Observable<boolean> {
     return this.loggedStatus.asObservable()
   }

   removeUser (): void {
     localStorage.removeItem('user')
     this.loggedStatus.next(false)
   }

   setValue (currentStatus: boolean): void {
     this.loggedStatus.next(currentStatus)
   }
}

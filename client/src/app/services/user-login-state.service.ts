import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { BehaviorSubject, Observable } from 'rxjs'

export interface localUser {
 time: number;
 id: string
}

@Injectable({
  providedIn: 'root'
})
export class UserLoginStateService {
   private loggedStatus: BehaviorSubject<boolean>;
   private localUser: BehaviorSubject<localUser> | null
   constructor (
     private router: Router
   ) {
     this.loggedStatus = new BehaviorSubject<boolean>(false)
     this.localUser = new BehaviorSubject<localUser>(null)
     this.getUser() !== null ? this.setValue(true) : this.setValue(false)
     this.getUser() !== null ? this.setLocalUser(this.getUser()) : this.setLocalUser(null)
   }

   setUser (id: string): void {
     const session = { time: Date.now(), id }
     localStorage.setItem('user', JSON.stringify(session))
     this.loggedStatus.next(true)
   }

   getUser () {
     return JSON.parse(localStorage.getItem('user'))
   }

   getValue (): Observable<boolean> {
     return this.loggedStatus.asObservable()
   }

   getLocalUser (): Observable<localUser> | null {
     return this.localUser.asObservable()
   }

   removeUser (): void {
     localStorage.removeItem('user')
     this.loggedStatus.next(false)
     this.router.navigate(['login'])
   }

   setValue (currentStatus: boolean): void {
     this.loggedStatus.next(currentStatus)
   }

   setLocalUser (currentUser: localUser | null): void {
     this.localUser.next(currentUser)
   }
}

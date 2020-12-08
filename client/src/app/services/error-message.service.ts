import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages: string[] = []

  add (messages: string[]) {
    messages.forEach(message => this.messages.push(message))
  }

  clear () {
    this.messages = []
  }
}
/**
 *
 login
 NO_VALID_EMAIL
 NO_VALID_PASSWORD_MIN_LENGTH_6

 signup
 NO_VALID_USERNAME
 NO_VALID_EMAIL
 NO_VALID_PASSWORD_MIN_LENGTH_6

 token
 AUTH_ERROR
 */

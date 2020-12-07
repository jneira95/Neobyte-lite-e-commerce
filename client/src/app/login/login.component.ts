import { Component } from '@angular/core'
import { FormControl, FormGroup } from '@angular/forms'
import { AuthService } from '../services/auth-service.service'
import { MessageService } from '../services/error-message.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {
  constructor (
    private authService: AuthService,
    public messageService: MessageService
  ) {}

  pruebas: string[] = this.messageService.messages

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })

  signup () {
    console.log('funciona signup')
  }

  login () {
    console.log('funciona login')
  }

  onSubmit () {
    this.authService.userLogin(this.loginForm.value).subscribe((event) => {
      this.messageService.clear()
      console.log('----> login component')
    })
  }
}

// login
// NO_VALID_EMAIL
// NO_VALID_PASSWORD_MIN_LENGTH_6

// signup
// NO_VALID_USERNAME
// NO_VALID_EMAIL
// NO_VALID_PASSWORD_MIN_LENGTH_6

// token
// AUTH_ERROR

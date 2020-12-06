import { Component } from '@angular/core'
import { FormControl, FormGroup } from '@angular/forms'
import { AuthService } from '../services/auth-service.service'
// import { ILogin } from '../store/models/user.model'
// import { Observable } from 'rxjs'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {
  constructor (private authService: AuthService) {}

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
    this.authService.userLogin(this.loginForm.value)
  }
}

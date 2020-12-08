import { Component, OnInit } from '@angular/core'
import { Validators, FormBuilder } from '@angular/forms'
import { AuthService } from '../services/auth-service.service'
import { MessageService } from '../services/error-message.service'
import { UserLoginStateService } from '../services/user-login-state.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  constructor (
    private authService: AuthService,
    public messageService: MessageService,
    private formBuilder: FormBuilder,
    private userLoginState: UserLoginStateService
  ) {}

  errorMessage: string[] = this.messageService.messages

  loginForm = this.formBuilder.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  })

  onSubmit () {
    this.authService.userLogin(this.loginForm.value).subscribe((event) => {
      this.messageService.clear()
      console.log('----> login component')
    })
  }

  ngOnInit (): void {

  }
}

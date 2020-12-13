import { Component } from '@angular/core'
import { UserLoginStateService } from '../services/user-login-state.service'
import { AuthService } from '../services/auth-service.service'
import { Observable } from 'rxjs'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  constructor (
    private userLoginState: UserLoginStateService,
    private authService: AuthService
  ) {}

  user: any = this.userLoginState.getUser()
  userData$: Observable<object> = this.authService.getRegisterUserById(this.user.id)
}

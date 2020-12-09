import { Component, OnInit } from '@angular/core'
import { UserLoginStateService } from '../services/user-login-state.service'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  constructor (
    private userLoginState: UserLoginStateService
  ) {}

  userData: object = {}
  ngOnInit (): void {
    this.userData = { ...JSON.parse(localStorage.getItem('user')) }
  }

  logout (): void {
    this.userLoginState.removeUser()
  }
}

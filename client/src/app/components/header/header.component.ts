import { Component, OnInit } from '@angular/core'
import { UserLoginStateService } from '../../services/user-login-state.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor (private userLoginState: UserLoginStateService) {}
  logged: boolean
  ngOnInit (): void {
    this.userLoginState.getUser() !== null ? this.logged = true : this.logged = false
  }
}

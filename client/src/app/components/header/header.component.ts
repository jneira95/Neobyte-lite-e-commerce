import { Component, OnInit } from '@angular/core'
import { UserLoginStateService } from '../../services/user-login-state.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public flag: boolean;

  constructor (private userLoginState: UserLoginStateService) {}

  ngOnInit (): void {
    this.userLoginState.getUser() !== null ? this.userLoginState.setValue(true) : this.userLoginState.setValue(false)
    this.userLoginState.getValue().subscribe((value) => {
      this.flag = value
    })
  }
}

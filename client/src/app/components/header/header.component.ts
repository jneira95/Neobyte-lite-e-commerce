import { Component } from '@angular/core'
import { UserLoginStateService } from '../../services/user-login-state.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public flag: boolean

  onTop ():void {
    window.scrollTo(0, 0)
  }

  constructor (private userLoginState: UserLoginStateService) {
    this.userLoginState.getValue().subscribe((value: boolean) => {
      this.flag = value
    })
  }
}

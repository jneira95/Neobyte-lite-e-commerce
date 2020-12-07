import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-profile-sidebar',
  templateUrl: './profile-sidebar.component.html',
  styleUrls: ['./profile-sidebar.component.scss']
})
export class ProfileSidebarComponent implements OnInit {
  constructor () { }

  ngOnInit (): void {
  }

  closeProfileSidebar (): void {
    const closeBtn = document.getElementById('toogleProfileSideBar')
    closeBtn.style.transform = 'translateX(350px)'
  }

  openProfileSidebar (): void {
    const openBtn = document.getElementById('toogleProfileSideBar')
    openBtn.style.transform = 'translateX(0)'
  }
}

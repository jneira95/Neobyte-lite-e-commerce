import { Component } from '@angular/core';

@Component({
	selector: 'app-side-navbar',
	templateUrl: './side-navbar.component.html',
	styleUrls: ['./side-navbar.component.scss']
})
export class SideNavbarComponent {
	categories: Array<any> = [
		{
			category: 'PORTÁTILES',
			route: 'portatil',
			icon: 'laptop_chromebook'
		},
		{
			category: 'PERIFÉRICOS',
			route: 'perifericos',
			icon: 'mouse'
		},
		{
			category: 'SMARTPHONES',
			route: 'smartphones',
			icon: 'smartphone'
		},
		{
			category: 'COMPONENTES',
			route: 'componentes',
			icon: 'select_all'
		}
	];

	closeSidebar(): void {
		const closeBtn = document.getElementById('toogleSideBar');
		closeBtn.style.transform = 'translateX(-350px)';
	}

	openSidebar(): void {
		const openBtn = document.getElementById('toogleSideBar');
		openBtn.style.transform = 'translateX(0)';
	}
}

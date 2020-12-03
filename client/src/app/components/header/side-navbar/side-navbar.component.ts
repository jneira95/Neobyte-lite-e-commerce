import { Component } from '@angular/core';

@Component({
	selector: 'app-side-navbar',
	templateUrl: './side-navbar.component.html',
	styleUrls: ['./side-navbar.component.scss']
})
export class SideNavbarComponent {
	panelOpenState = false;

	categories: any[] = [
		{
			category: 'portátiles',
			route: 'portatil',
			icon: 'laptop_chromebook',
			categoriesExpand: ['portatiles', 'gaming', 'workStation']
		},
		{
			category: 'periféricos',
			route: 'perifericos',
			icon: 'mouse',
			categoriesExpand: ['teclados', 'ratones', 'monitores']
		},
		{
			category: 'smartphones',
			route: 'smartphones',
			icon: 'smartphone'
		},
		{
			category: 'elemento prueba scroll',
			route: 'perifericos',
			icon: 'mouse',
			categoriesExpand: ['teclados', 'ratones', 'monitores']
		},
		{
			category: 'elemento prueba scroll',
			route: 'perifericos',
			icon: 'mouse',
			categoriesExpand: ['teclados', 'ratones', 'monitores']
		},
		{
			category: 'elemento prueba scroll',
			route: 'perifericos',
			icon: 'mouse',
			categoriesExpand: ['teclados', 'ratones', 'monitores']
		},
		{
			category: 'elemento prueba scroll',
			route: 'perifericos',
			icon: 'mouse',
			categoriesExpand: ['teclados', 'ratones', 'monitores']
		},
		{
			category: 'elemento prueba scroll',
			route: 'perifericos',
			icon: 'mouse',
			categoriesExpand: ['teclados', 'ratones', 'monitores']
		},
		{
			category: 'elemento prueba scroll',
			route: 'perifericos',
			icon: 'mouse',
			categoriesExpand: ['teclados', 'ratones', 'monitores']
		},
		{
			category: 'elemento prueba scroll',
			route: 'perifericos',
			icon: 'mouse',
			categoriesExpand: ['teclados', 'ratones', 'monitores']
		},
		{
			category: 'elemento prueba scroll',
			route: 'perifericos',
			icon: 'mouse',
			categoriesExpand: ['teclados', 'ratones', 'monitores']
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

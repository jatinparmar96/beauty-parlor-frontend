import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { sidebarRoutes } from './route.config';
import { Router, Event, NavigationStart, NavigationEnd } from '@angular/router';
@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: [ './navbar.component.scss' ]
})
export class NavbarComponent implements OnInit {
	isHandset$: Observable<boolean> = this.breakpointObserver
		.observe(Breakpoints.Handset)
		.pipe(map((result) => result.matches), shareReplay());
	sidebar: any;
	isLoading: boolean;
	constructor(private breakpointObserver: BreakpointObserver, private _router: Router) {
		this.sidebar = sidebarRoutes;
	}
	ngOnInit(): void {
		this._router.events.subscribe((routerEvent: Event) => {
			if (routerEvent instanceof NavigationStart) {
				this.isLoading = true;
			}
			if (routerEvent instanceof NavigationEnd) {
				this.isLoading = false;
			}
		});
	}
}

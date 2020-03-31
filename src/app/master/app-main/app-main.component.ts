import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
	selector: 'app-app-main',
	templateUrl: './app-main.component.html',
	styleUrls: [ './app-main.component.scss' ]
})
export class AppMainComponent implements OnInit {
	isHandset$: Observable<boolean> = this.breakpointObserver
		.observe(Breakpoints.Handset)
		.pipe(map((result) => result.matches), shareReplay());

	constructor(private breakpointObserver: BreakpointObserver) {}

	ngOnInit(): void {}
}

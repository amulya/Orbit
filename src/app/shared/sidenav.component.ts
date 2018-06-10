import { Component } from '@angular/core';

@Component({
    selector: 'sidenav-bar',
    templateUrl: './sidenav.component.html',
    styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {
    events: string[] = [];
    opened: boolean;
}
import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  links: string[];

  constructor() {
    this.links = [
      'M-item-01',
      'M-item-02',
      'M-item-03',
      'M-item-04',
      'M-item-05',
      'M-item-06',
    ];
  }
}

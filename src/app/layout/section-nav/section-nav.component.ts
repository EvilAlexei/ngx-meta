import { Component } from '@angular/core';

@Component({
  selector: 'app-section-nav',
  templateUrl: './section-nav.component.html',
  styleUrls: ['./section-nav.component.scss']
})
export class SectionNavComponent {
  links: string[];

  constructor() {
    this.links = [
      'item-01',
      'item-02',
      'item-03',
      'item-04',
      'item-05',
      'item-06',
    ];
  }
}

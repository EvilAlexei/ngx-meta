import { Component } from '@angular/core';

@Component({
  selector: 'app-getting-started',
  template: `<markdown class="variable-binding" [data]="content"></markdown>`,
  styleUrls: ['./getting-started.component.scss']
})
export class GettingStartedComponent {
  content: string = require('!!raw-loader!./getting-started.doc.md');

  constructor() { }
}

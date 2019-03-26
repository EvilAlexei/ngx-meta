import { Component } from '@angular/core';

@Component({
  selector: 'app-metaui-architecture',
  template: `<markdown class="variable-binding" [data]="content"></markdown>`,
})
export class MetauiArchitectureComponent {
  content: string = require('!!raw-loader!./metaui-architecture.doc.md');

  constructor() { }
}

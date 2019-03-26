import { Component } from '@angular/core';

@Component({
  selector: 'app-oss-syntax',
  template: `<markdown class="variable-binding" [data]="content"></markdown>`,
})
export class OssSyntaxComponent {
  content: string = require('!!raw-loader!./oss-syntax.doc.md');

  constructor() { }
}

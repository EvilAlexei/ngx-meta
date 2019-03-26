import { Component } from '@angular/core';

@Component({
  selector: 'app-oss-rules',
  template: `<markdown class="variable-binding" [data]="content"></markdown>`,
})
export class OssRulesComponent {
  content: string = require('!!raw-loader!./oss-rules.doc.md');

  constructor() { }
}

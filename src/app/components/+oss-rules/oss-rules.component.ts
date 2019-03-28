import { Component, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-oss-rules',
  template: `<markdown class="variable-binding" [data]="content"></markdown>`,
})
export class OssRulesComponent implements OnChanges {
  content: string = require('!!raw-loader!./oss-rules.doc.md');

  constructor() { }

  ngOnChanges(): void {
    setTimeout(() => {
      const a = document.getElementById('oss-rules-and-metaui-application');

      console.log(42, a);
    }, 1000);

    const b = document.getElementById('oss-rules-and-metaui-application');

    console.log(43, b);
  }
}

import { AfterViewChecked, Component, ElementRef } from '@angular/core';
import { HeadersListService } from '../../servides/headers-list.service';

@Component({
  selector: 'app-oss-rules',
  template: `<markdown [data]="content"></markdown>`,
})
export class OssRulesComponent implements AfterViewChecked {
  content: string = require('!!raw-loader!./oss-rules.doc.md');

  constructor(
    private headersListService: HeadersListService,
    public element: ElementRef<HTMLElement>,
  ) { }

  ngAfterViewChecked(): void {
    this.headersListService.getHeaders(this.element.nativeElement);
  }
}

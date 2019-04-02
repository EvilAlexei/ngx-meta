import { AfterViewChecked, Component, ElementRef } from '@angular/core';
import { HeadersListService } from '../../servides/headers-list.service';

@Component({
  selector: 'app-oss-syntax',
  template: `<markdown [data]="content"></markdown>`,
})
export class OssSyntaxComponent implements AfterViewChecked {
  content: string = require('!!raw-loader!./oss-syntax.doc.md');

  constructor(
    private headersListService: HeadersListService,
    public element: ElementRef<HTMLElement>,
  ) { }

  ngAfterViewChecked(): void {
    this.headersListService.getHeaders(this.element.nativeElement);
  }
}

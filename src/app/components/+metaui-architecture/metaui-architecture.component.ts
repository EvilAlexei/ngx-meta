import { AfterViewChecked, Component, ElementRef } from '@angular/core';
import { HeadersListService } from '../../servides/headers-list.service';

@Component({
  selector: 'app-metaui-architecture',
  template: `<markdown [data]="content"></markdown>`,
})
export class MetauiArchitectureComponent implements AfterViewChecked {
  content: string = require('!!raw-loader!./metaui-architecture.doc.md');

  constructor(
    private headersListService: HeadersListService,
    public element: ElementRef<HTMLElement>,
  ) { }

  ngAfterViewChecked(): void {
    this.headersListService.getHeaders(this.element.nativeElement);
  }
}

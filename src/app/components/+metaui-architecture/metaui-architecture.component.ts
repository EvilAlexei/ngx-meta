import { AfterViewChecked, Component, ElementRef } from '@angular/core';
import { HeadingsListService } from '../../servises/headings-list.service';

@Component({
  selector: 'app-metaui-architecture',
  template: `<markdown [data]="content"></markdown>`,
})
export class MetauiArchitectureComponent implements AfterViewChecked {
  content: string = require('!!raw-loader!./metaui-architecture.doc.md');

  constructor(
    private headingsListService: HeadingsListService,
    public element: ElementRef<HTMLElement>,
  ) { }

  ngAfterViewChecked(): void {
    this.headingsListService.getHeaders(this.element.nativeElement);
  }
}

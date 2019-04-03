import { AfterViewChecked, Component, ElementRef } from '@angular/core';
import { HeadingsListService } from '../../servises/headings-list.service';

@Component({
  selector: 'app-oss-syntax',
  template: `<markdown [data]="content"></markdown>`,
})
export class OssSyntaxComponent implements AfterViewChecked {
  content: string = require('!!raw-loader!./oss-syntax.doc.md');

  constructor(
    private headingsListService: HeadingsListService,
    public element: ElementRef<HTMLElement>,
  ) { }

  ngAfterViewChecked(): void {
    this.headingsListService.getHeaders(this.element.nativeElement);
  }
}

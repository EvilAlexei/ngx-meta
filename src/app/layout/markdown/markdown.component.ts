import { Component, ElementRef, Input, OnInit } from '@angular/core';
import * as marked from 'marked';
import { HeadingsListService } from '../../servises/headings-list.service';
import { Router } from '@angular/router';

declare var Prism: {
  highlightAll: (async: boolean) => void;
  highlightAllUnder: (element: Element) => void;
};

@Component({
  selector: 'app-markdown',
  template: '<ng-content></ng-content>',
})
export class MarkdownComponent implements OnInit {
  @Input() mdFile: string;

  constructor(
    private element: ElementRef<HTMLElement>,
    private headingsListService: HeadingsListService,
    private router: Router
  ) {
    const activeRoute = this.router.url.split('#')[0].replace('/', '');

    const markedRenderer = new marked.Renderer();
    markedRenderer.link = (href, title, text) => {
      if (href.startsWith('#')) {
        href = activeRoute + href;
      }

      return (`<a href=\"${href}\" title=\"${title}\">${text}</a>`);
    };

    marked.setOptions({
      renderer: markedRenderer
    });
  }

  ngOnInit(): void {
    this.render();
  }

  render(): void {
    this.element.nativeElement.innerHTML = marked.parse(this.mdFile);
    Prism.highlightAllUnder(this.element.nativeElement);
    this.headingsListService.getHeaders(this.element.nativeElement);
  }
}

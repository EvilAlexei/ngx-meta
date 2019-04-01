import { Component, ElementRef, OnInit, SecurityContext } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import * as marked from 'marked';

declare var Prism: {
  highlightAll: (async: boolean) => void;
  highlightAllUnder: (element: Element) => void;
};

@Component({
  selector: 'app-oss-rules',
  template: `<ng-content></ng-content>`
})
export class OssRulesComponent implements OnInit {
  mdFile: string = require('!!raw-loader!./oss-rules.doc.md');
  content: string;

  constructor(
    private domSanitizer: DomSanitizer,
    public element: ElementRef<HTMLElement>,
  ) {}

  ngOnInit(): void {
    const renderer = new marked.Renderer();

    renderer.link = (href: string, title: string, text: string) => {
      return (`<a routerLink="." [fragment]=\"${ href }\" pageScroll target="_blank" title=\"${title}\">${text}</a>`);
    };

    marked.setOptions({
      renderer,
      gfm: true,
    });

    this.content = this.domSanitizer.sanitize(SecurityContext.HTML, marked(this.mdFile));
    this.element.nativeElement.innerHTML = this.content;
    Prism.highlightAllUnder(this.element.nativeElement);
  }
}

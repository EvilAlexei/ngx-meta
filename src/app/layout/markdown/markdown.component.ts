import { Component, ElementRef, Input, OnInit, SecurityContext } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import * as marked from 'marked';

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
  ) {}

  ngOnInit(): void {
    this.render();
  }

  render(): void {
    this.element.nativeElement.innerHTML = marked(this.mdFile);
    Prism.highlightAllUnder(this.element.nativeElement);
  }
}

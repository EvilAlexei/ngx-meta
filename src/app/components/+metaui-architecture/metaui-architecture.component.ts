import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import * as marked from 'marked';

@Component({
  selector: 'app-metaui-architecture',
  template: `<div [innerHTML]="content"></div>`,
})
export class MetauiArchitectureComponent {
  mdFile: string = require('!!raw-loader!./metaui-architecture.doc.md');
  content: SafeHtml;

  constructor(private domSanitizer: DomSanitizer) {
    const renderer = new marked.Renderer();
    renderer.link = (href: string, title: string, text: string) => {
      return (`<a routerLink="." [fragment]=\"${ href }\" target="_blank" title=\"${title}\">${text}</a>`);
    };

    marked.setOptions({
      renderer,
      gfm: true
    });

    this.content = this.domSanitizer.bypassSecurityTrustHtml(marked(this.mdFile));
  }

  // ngOnInit(): void {
  //   marked.setOptions({
  //     renderer: new marked.Renderer(),
  //     // highlight: (code) => require('highlight.js').highlightAuto(code).value,
  //     gfm: true,
  //   });
  //
  //   this.foo = this.domSanitizer.bypassSecurityTrustHtml(marked(this.content));
  //   const a = document.querySelector('h1');
  //   console.log('11', a);
  // }
}

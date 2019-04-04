import { Component, ElementRef, Input, OnInit } from '@angular/core';
import * as marked from 'marked';
import { HeadingsListService } from '../../services/headings-list.service';
import { NavigationEnd, Router, RouterEvent } from '@angular/router';
import { AnchorScrollService } from '../../services/anchor-scroll.service';
import { filter } from 'rxjs/operators';

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
  activeRoute: string;
  activeFragment: string;

  constructor(
    private element: ElementRef<HTMLElement>,
    private headingsListService: HeadingsListService,
    private router: Router,
    private anchorScrollService: AnchorScrollService
  ) {
    const markedRenderer = new marked.Renderer();

    markedRenderer.link = (href, title, text) => {
      if (href.startsWith('#')) {
        href = this.activeRoute + href;
      }

      return (`<a href=\"${href}\" title=\"${title}\">${text}</a>`);
    };

    marked.setOptions({
      renderer: markedRenderer
    });

    this.router.events
      .pipe(
        filter((event: RouterEvent) => event instanceof NavigationEnd)
      )
      .subscribe((event) => {
        this.activeRoute = event.url.split('#')[0].replace('/', '');
        this.activeFragment = event.url.split('#')[1];

        const targetEl = this.element.nativeElement.querySelector('#' + this.activeFragment);
        if (this.activeFragment && targetEl) {
          const anchorTarget = '#' + this.activeFragment;
          this.anchorScrollService.scrollToTarget(anchorTarget, false);
        }
      });
  }

  ngOnInit(): void {
    this.render();

    if (this.activeFragment) {
      const anchorTarget = '#' + this.activeFragment;
      this.anchorScrollService.scrollToTarget(anchorTarget);
    }
  }

  render(): void {
    this.element.nativeElement.innerHTML = marked.parse(this.mdFile);
    Prism.highlightAllUnder(this.element.nativeElement);
    this.headingsListService.getHeaders(this.element.nativeElement);
  }
}

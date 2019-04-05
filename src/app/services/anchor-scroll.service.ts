import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { PageScrollService } from 'ngx-page-scroll-core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AnchorScrollService {

  constructor(
    private pageScrollService: PageScrollService,
    private router: Router,
    @Inject(DOCUMENT) private document: any
  ) { }

  scrollToTarget(targetHash: string, changeHash?: boolean): void {
    const parentView = this.document.getElementById('mat-content');

    location.hash = !changeHash ? targetHash : location.hash;

    this.pageScrollService.scroll({
      document: this.document,
      scrollTarget: targetHash,
      scrollViews: [
        parentView
      ],
      scrollOffset: 20,
      duration: 250
    });
  }

  scrollTop(): void {
    const parentView = this.document.getElementById('mat-content');
    parentView.scrollTo(0, 0);
  }
}

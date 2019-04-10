import { Injectable, Inject } from '@angular/core';
import { DOCUMENT, Location } from '@angular/common';
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

  scrollToTarget(targetHash: string): void {
    const parentView = this.document.getElementById('mat-content');

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
}

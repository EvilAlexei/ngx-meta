import { Component, OnDestroy, OnInit } from '@angular/core';
import { HeadersListService } from '../../servides/headers-list.service';

@Component({
  selector: 'app-section-nav',
  templateUrl: './section-nav.component.html',
  styleUrls: ['./section-nav.component.scss']
})
export class SectionNavComponent implements OnInit, OnDestroy {
  links: [];

  constructor(
    private headersListService: HeadersListService,
  ) {}

  ngOnInit(): void {
    this.headersListService.headersList
      .subscribe((data) => {
        this.links = data;
      });
  }

  ngOnDestroy(): void {
    this.headersListService.headersList.unsubscribe();
  }
}

import { Component, OnInit } from '@angular/core';
import { HeadingsListService } from '../../services/headings-list.service';
import { NavigationEnd, Router, RouterEvent } from '@angular/router';
import { filter } from 'rxjs/operators';
import { AnchorScrollService } from '../../services/anchor-scroll.service';


@Component({
  selector: 'app-aside-nav',
  templateUrl: './aside-nav.component.html',
  styleUrls: ['./aside-nav.component.scss']
})
export class AsideNavComponent implements OnInit {
  navItems: HTMLElement[];
  activeFragment: string;

  constructor(
    private headingsListService: HeadingsListService,
    private router: Router,
    private anchorScrollService: AnchorScrollService
  ) {
    this.router.events.pipe(
        filter((event: RouterEvent) => event instanceof NavigationEnd)
      )
      .subscribe(() => {
        this.activeFragment = this.router.url.split('#')[1];
      });
  }

  ngOnInit(): void {
    this.headingsListService.navList
      .subscribe((data: HTMLElement[]) => {
        this.navItems = data;
      });
  }

  anchorScroll(event: MouseEvent): void {
    event.preventDefault();

    const anchorTarget = (event.currentTarget as HTMLAnchorElement).hash;
    this.anchorScrollService.scrollToTarget(anchorTarget);
  }
}

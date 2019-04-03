import { Component, OnInit } from '@angular/core';
import { HeadingsListService } from '../../servises/headings-list.service';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';


@Component({
  selector: 'app-aside-nav',
  templateUrl: './aside-nav.component.html',
  styleUrls: ['./aside-nav.component.scss']
})
export class AsideNavComponent implements OnInit {
  navItems: HTMLElement[];
  activeRoute: string;
  activeFragment: string;

  constructor(
    private headingsListService: HeadingsListService,
    private router: Router
  ) {
    this.router.events.pipe(
        filter((event) => event instanceof NavigationEnd)
      )
      .subscribe(() => {
        this.activeRoute = this.router.url.split('#')[0].replace('/', '');
        this.activeFragment = this.router.url.split('#')[1];
      });
  }

  ngOnInit(): void {
    this.headingsListService.navList
      .subscribe((data) => {
        this.navItems = data;
      });
  }
}

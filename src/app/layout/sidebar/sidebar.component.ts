import { Component, OnInit } from '@angular/core';
import { HeadingsListService } from '../../servises/headings-list.service';
import { NavigationEnd, Router, Routes } from '@angular/router';

import { routes } from '../../app.routing';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  navItems: HTMLElement[];
  menuList: Routes;
  activeRoute: string;
  activeFragment: string;

  constructor(
    private router: Router,
    private headingsListService: HeadingsListService
  ) {
    this.router.events.pipe(
        filter((event) => event instanceof NavigationEnd)
      )
      .subscribe(() => {
        this.activeRoute = this.router.url.split('#')[0].replace('/', '');
        this.activeFragment = this.router.url.split('#')[1];
      });

    this.menuList = routes.filter((route) => {
      return route.path; // exclude empty route
    });
  }

  ngOnInit(): void {
    this.headingsListService.navList
      .subscribe((data) => {
        this.navItems = data;
      });
  }
}

import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs/operators';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  tabletQuery: MediaQueryList;
  mobileQuery: MediaQueryList;
  navMenuState = true;

  readonly tabletQueryListener: () => void;
  readonly mobileQueryListener: () => void;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher
  ) {
    this.tabletQuery = media.matchMedia('(max-width: 1000px)');
    this.mobileQuery = media.matchMedia('(max-width: 780px)');
    this.tabletQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.tabletQuery.addListener(this.tabletQueryListener);
    this.mobileQuery.addListener(this.mobileQueryListener);

    this.navMenuState = !this.tabletQuery.matches;
    this.tabletQuery.onchange = () => {
      this.navMenuState = !this.tabletQuery.matches;
    };
  }

  ngOnInit(): void {
    this.router.events.pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => this.activatedRoute),
        map((route) => {
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route;
        }),
        filter((route) => route.outlet === 'primary'),
        mergeMap((route) => route.data),
      )
      .subscribe((event) => {
        this.titleService.setTitle(event.title);
      });
  }

  ngOnDestroy(): void {
    this.tabletQuery.removeListener(this.tabletQueryListener);
    this.mobileQuery.removeListener(this.mobileQueryListener);
  }

  navMenuToggle(): void {
    this.navMenuState = !this.navMenuState;
  }
}

import { Component, OnInit } from '@angular/core';
import { HeadingsListService } from '../../servises/headings-list.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  navItems: HTMLElement[];

  constructor(private headingsListService: HeadingsListService) {}

  ngOnInit(): void {
    this.headingsListService.navList
      .subscribe((data) => {
        this.navItems = data;
      });
  }
}

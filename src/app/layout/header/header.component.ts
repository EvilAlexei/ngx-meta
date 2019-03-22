import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.matIconRegistry
      .addSvgIcon(
        'ngx-meta-github',
        this.domSanitizer.bypassSecurityTrustResourceUrl('../../assets/images/ico-github.svg')
      ).addSvgIcon(
      'ngx-meta-twitter',
        this.domSanitizer.bypassSecurityTrustResourceUrl('../../assets/images/ico-twitter.svg')
      );
  }
}

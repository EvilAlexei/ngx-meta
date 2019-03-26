import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { GettingStartedRoutingModule } from './getting-started-routing.module';
import { GettingStartedComponent } from './getting-started.component';
import { MarkdownModule } from 'ngx-markdown';


@NgModule({
  declarations: [
    GettingStartedComponent
  ],
  imports: [
    CommonModule,
    GettingStartedRoutingModule,
    HttpClientModule,
    MarkdownModule.forChild()
  ],
})
export class GettingStartedModule { }

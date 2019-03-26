import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { OssSyntaxRoutingModule } from './oss-syntax-routing.module';
import { OssSyntaxComponent } from './oss-syntax.component';
import { MarkdownModule } from 'ngx-markdown';


@NgModule({
  declarations: [
    OssSyntaxComponent
  ],
  imports: [
    CommonModule,
    OssSyntaxRoutingModule,
    HttpClientModule,
    MarkdownModule.forChild()
  ],
})
export class OssSyntaxModule { }

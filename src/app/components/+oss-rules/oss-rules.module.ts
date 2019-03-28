import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { OssRulesRoutingModule } from './oss-rules-routing.module';
import { OssRulesComponent } from './oss-rules.component';
import { MarkdownModule } from 'ngx-markdown';
import { NgxPageScrollModule } from 'ngx-page-scroll';

@NgModule({
  declarations: [
    OssRulesComponent
  ],
  imports: [
    CommonModule,
    OssRulesRoutingModule,
    HttpClientModule,
    NgxPageScrollModule,
    MarkdownModule.forChild()
  ],
})
export class OssRulesModule { }

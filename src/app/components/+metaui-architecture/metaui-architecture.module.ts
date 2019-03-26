import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { MetauiArchitectureRoutingModule } from './metaui-architecture-routing.module';
import { MetauiArchitectureComponent } from './metaui-architecture.component';
import { MarkdownModule } from 'ngx-markdown';

@NgModule({
  declarations: [
    MetauiArchitectureComponent
  ],
  imports: [
    CommonModule,
    MetauiArchitectureRoutingModule,
    HttpClientModule,
    MarkdownModule.forChild()
  ],
})
export class MetauiArchitectureModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { MetauiArchitectureRoutingModule } from './metaui-architecture-routing.module';
import { MetauiArchitectureComponent } from './metaui-architecture.component';
import { MarkdownModule } from '../../layout/markdown/markdown.module';

@NgModule({
  declarations: [
    MetauiArchitectureComponent
  ],
  imports: [
    CommonModule,
    MetauiArchitectureRoutingModule,
    MarkdownModule
  ],
})
export class MetauiArchitectureModule { }

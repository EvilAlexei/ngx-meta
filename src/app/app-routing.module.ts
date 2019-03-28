import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { routes } from './app.routing';

@NgModule({
  imports: [RouterModule.forRoot(routes, {anchorScrolling: 'enabled'} )],
  exports: [RouterModule]
})
export class AppRoutingModule { }

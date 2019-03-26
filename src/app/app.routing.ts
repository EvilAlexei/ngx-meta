import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'getting-started',
    loadChildren: './components/+getting-started/getting-started.module#GettingStartedModule'
  },
  {
    path: 'metaui-architecture',
    loadChildren: './components/+metaui-architecture/metaui-architecture.module#MetauiArchitectureModule'
  },
  {
    path: 'oss-rules',
    loadChildren: './components/+oss-rules/oss-rules.module#OssRulesModule'
  },
  {
    path: 'oss-syntax',
    loadChildren: './components/+oss-syntax/oss-syntax.module#OssSyntaxModule'
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

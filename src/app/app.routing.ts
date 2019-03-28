import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'metaui-architecture',
    loadChildren: './components/+metaui-architecture/metaui-architecture.module#MetauiArchitectureModule',
    data: { title: 'MetaUI Architecture' }
  },
  {
    path: 'oss-rules',
    loadChildren: './components/+oss-rules/oss-rules.module#OssRulesModule',
    data: { title: 'OSS Rules' }
  },
  {
    path: 'oss-syntax',
    loadChildren: './components/+oss-syntax/oss-syntax.module#OssSyntaxModule',
    data: { title: 'OSS Syntax' }
  },
  {
    path: '',
    redirectTo: 'oss-rules',
    pathMatch: 'full',
  }
];

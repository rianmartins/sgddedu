import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages/pages.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'sgddedu/index',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'sgddedu/index'
  }
];

export const routing = RouterModule.forRoot(appRoutes);

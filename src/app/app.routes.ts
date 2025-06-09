import { Routes } from '@angular/router';
import { WelcomeComponent } from './pages/home/welcome.component';
import { ListComponent } from './pages/listClient/list/list.component';
import { ClientSelectd } from './pages/client-selectd/client-selectd';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: WelcomeComponent },
  { path: 'list-component', component: ListComponent },
  { path: 'list-client-selected', component: ClientSelectd },
  { path: '**', redirectTo: 'home' },

];

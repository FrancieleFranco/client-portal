import { Routes } from '@angular/router';
import { WelcomeComponent } from './pages/home/welcome.component';
import { ListComponent } from './pages/listClient/list/list.component';

export const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'list-component', component: ListComponent },


];

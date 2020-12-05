
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListReceveursComponent } from './admin/list-receveurs/list-receveurs.component';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path:'login',
    component: LoginComponent
  },{
    path:'',
    component: DashboardComponent,
    children:[{
      path:'admin',
      component: ListReceveursComponent
    }
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

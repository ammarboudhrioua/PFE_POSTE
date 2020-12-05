
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddReceveurComponent } from './admin/add-receveur/add-receveur.component';
import { ListReceveursComponent } from './admin/list-receveurs/list-receveurs.component';
import { UpdateReceveurComponent } from './admin/update-receveur/update-receveur.component';
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
    }, 
    {
      path:'admin/add',
      component: AddReceveurComponent
    },
    {
      path:'admin/update',
      component: UpdateReceveurComponent
    }
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

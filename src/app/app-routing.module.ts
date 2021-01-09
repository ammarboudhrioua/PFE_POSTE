
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddReceveurComponent } from './admin/add-receveur/add-receveur.component';
import { ListReceveursComponent } from './admin/list-receveurs/list-receveurs.component';
import { UpdateReceveurComponent } from './admin/update-receveur/update-receveur.component';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { AlimentationCaisseComponent } from './dashboard/guichitier/caisse/alimentation-caisse/alimentation-caisse.component';
import { FermetureCaisseComponent } from './dashboard/guichitier/caisse/fermeture-caisse/fermeture-caisse.component';
import { DemandeClientComponent } from './dashboard/guichitier/fonds/demande/demande-client/demande-client.component';
import { DemandeNormalComponent } from './dashboard/guichitier/fonds/demande/demande-normal/demande-normal.component';
import { VersementClientComponent } from './dashboard/guichitier/fonds/versement/versement-client/versement-client.component';
import { VersementNormalComponent } from './dashboard/guichitier/fonds/versement/versement-normal/versement-normal.component';
import { IndexComponent } from './dashboard/guichitier/index/index.component';
import { AddCaisseComponent } from './reveveur/coffre/add-caisse/add-caisse.component';
import { AddCoffreComponent } from './reveveur/coffre/add-coffre/add-coffre.component';
import { ListCaissesComponent } from './reveveur/coffre/list-caisses/list-caisses.component';
import { UpdateCoffreComponent } from './reveveur/coffre/update-coffre/update-coffre.component';
import { ChargementComponent } from './reveveur/DAB/chargement/chargement.component';
import { DABComponent } from './reveveur/DAB/dab/dab.component';
import { DechargementComponent } from './reveveur/DAB/dechargement/dechargement.component';
import { GuichetsComponent } from './reveveur/guichets/guichets.component';
import { DetailsComponent } from './reveveur/historique/details/details.component';
import { HistoriqueComponent } from './reveveur/historique/historique/historique.component';
import { IndexRComponent } from './reveveur/index-r/index-r.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  }, {
    path: 'admin',
    component: DashboardComponent,
    children: [{
      path: '',
      component: ListReceveursComponent
    },
    {
      path: 'add',
      component: AddReceveurComponent
    },
    {
      path: 'update',
      component: UpdateReceveurComponent
    },
    ]
  }, {
    path: 'guichitier',
    component: DashboardComponent,
    children: [{
      path: '',
      component: IndexComponent
    },
    {
      path: 'demande/normal',
      component: DemandeNormalComponent
    },
    {
      path: 'demande/client',
      component: DemandeClientComponent
    }, {
      path: 'versement/normal',
      component: VersementNormalComponent
    },
    {
      path: 'versement/client',
      component: VersementClientComponent
    },{
      path:'add_caisse',
      component:AlimentationCaisseComponent
    },{
      path:'close_caisse',
      component:FermetureCaisseComponent
    }
    ]
  },{path:'add_coffre',
  component:AddCoffreComponent
  },{
    path: 'receveur',
    component: DashboardComponent,
    children: [{
      path: '',
      component: IndexRComponent
    },{
      path:'demandes',
      component:GuichetsComponent
    },{
      path:'DAB',
      component:DABComponent
    },{
      path:'DAB/chargement',
      component:ChargementComponent
    },
    {
      path:'DAB/dechargement',
      component:DechargementComponent
    },{
      path:'IBS/demandeFonds',
      component:DechargementComponent
    },
    {
      path:'coffre/update',
      component:UpdateCoffreComponent
    },{
      path:'create_caisse',
      component:AddCaisseComponent
    },{
      path:'list_caisses',
      component:ListCaissesComponent
    },
    {
      path:'historique',
      component:HistoriqueComponent
    },{
      path:'historique/details',
      component:DetailsComponent

    },{
      path:'coffre/add',
      component:AddCoffreComponent
    }
  ]
}
  
]


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
export class AppRoutingModule { }

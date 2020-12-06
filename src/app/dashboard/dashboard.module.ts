import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../modules/shared/shared.module';
import { MaterialModule } from '../modules/material/material.module';
import { ListReceveursComponent } from '../admin/list-receveurs/list-receveurs.component';
import { AddReceveurComponent } from '../admin/add-receveur/add-receveur.component';
import { UpdateReceveurComponent } from '../admin/update-receveur/update-receveur.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IndexComponent } from './guichitier/index/index.component';
import { DemandeNormalComponent } from './guichitier/fonds/demande/demande-normal/demande-normal.component';
import { DemandeClientComponent } from './guichitier/fonds/demande/demande-client/demande-client.component';
import { VersementNormalComponent } from './guichitier/fonds/versement/versement-normal/versement-normal.component';
import { VersementClientComponent } from './guichitier/fonds/versement/versement-client/versement-client.component';
import { FermetureCaisseComponent } from './guichitier/caisse/fermeture-caisse/fermeture-caisse.component';
import { AlimentationCaisseComponent } from './guichitier/caisse/alimentation-caisse/alimentation-caisse.component';
import { GuichetsComponent } from '../reveveur/guichets/guichets.component';
import { ChargementComponent } from '../reveveur/DAB/chargement/chargement.component';
import { DechargementComponent } from '../reveveur/DAB/dechargement/dechargement.component';
import { RecetteSupplimentaireComponent } from '../reveveur/recette-supplimentaire/recette-supplimentaire.component';
import { DemandedeviseComponent } from '../reveveur/devise/demandedevise/demandedevise.component';
import { EnvoiAutreBureauComponent } from '../reveveur/devise/envoi-autre-bureau/envoi-autre-bureau.component';
import { IndexRComponent } from '../reveveur/index-r/index-r.component';
import { DABComponent } from '../reveveur/DAB/dab/dab.component';


@NgModule({
  declarations: [
    DashboardComponent,
    ListReceveursComponent,
    AddReceveurComponent,
    UpdateReceveurComponent,
    IndexComponent,
    DemandeNormalComponent,
    DemandeClientComponent,
    VersementNormalComponent,
    VersementClientComponent,
    FermetureCaisseComponent,
    AlimentationCaisseComponent,
    GuichetsComponent,
    ChargementComponent,
    DechargementComponent,
    RecetteSupplimentaireComponent,
    DemandedeviseComponent,
    EnvoiAutreBureauComponent,
    IndexRComponent,
    DABComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DashboardModule { }

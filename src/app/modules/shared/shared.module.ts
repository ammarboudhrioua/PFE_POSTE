import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { NavBarComponent } from 'src/app/dashboard/shared/nav-bar/nav-bar.component';
import { SideBarComponent } from 'src/app/dashboard/shared/side-bar/side-bar.component';
import { FooterComponent } from 'src/app/dashboard/shared/footer/footer.component';



@NgModule({
  declarations: [
    NavBarComponent,
    SideBarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[
    NavBarComponent,
    SideBarComponent,
    FooterComponent
  ]
})
export class SharedModule { }

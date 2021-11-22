import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PublicacionComponent } from './publicacion.component';
import { PublicacionRoutingModule } from './publicacion-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: PublicacionComponent }]),
    PublicacionRoutingModule,
  ],
  declarations: [PublicacionComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class PublicacionComponentModule {}

import { IonicModule } from '@ionic/angular';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PerfilComponent } from './perfil.component';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { PublicacionComponentModule } from '../publicacion/publicacion.module';
import { PublicacionComponent } from '../publicacion/publicacion.component';
import { RouterModule } from '@angular/router'

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule
  ],
  declarations: [PerfilComponent], 
  exports: [PerfilComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class PerfilComponentModule {}



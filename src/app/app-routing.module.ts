import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './views/homepage/homepage.component';
import { AdherentComponent } from './views/adherent/adherent.component';
import { AdherentEditComponent } from './views/adherent-edit/adherent-edit.component';
import { MandataireComponent } from './views/mandataire/mandataire.component';
import { MandataireEditComponent } from './views/mandataire-edit/mandataire-edit.component';

const routes: Routes = [
  {path:'', component: HomepageComponent},
  {path:'adherents', component: AdherentComponent},
  {path:'adherents/:id', component: AdherentEditComponent},
  {path:'mandataires', component: MandataireComponent},
  {path:'mandataires/:id', component: MandataireEditComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

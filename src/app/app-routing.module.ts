import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './views/homepage/homepage.component';
import { AdherentComponent } from './views/adherent/adherent.component';
import { AdherentEditComponent } from './views/adherent-edit/adherent-edit.component';
import { MandataireComponent } from './views/mandataire/mandataire.component';
import { MandataireEditComponent } from './views/mandataire-edit/mandataire-edit.component';
import { LoginComponent } from './views/login/login.component';
import { GuardService } from './services/guard.service';

const routes: Routes = [
  {path:'', component: LoginComponent},
  {path:'accueil', component: HomepageComponent, canActivate:[GuardService]},
  {path:'adherents', component: AdherentComponent, canActivate:[GuardService]},
  {path:'adherents/:id', component: AdherentEditComponent, canActivate:[GuardService]},
  {path:'mandataires', component: MandataireComponent, canActivate:[GuardService]},
  {path:'mandataires/:id', component: MandataireEditComponent, canActivate:[GuardService]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

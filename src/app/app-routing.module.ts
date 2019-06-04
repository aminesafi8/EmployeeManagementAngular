import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorComponent } from './error/error.component';
import { ListEmployeesComponent } from './list-employees/list-employees.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGuardService } from './service/route-guard.service';
import { FichesListComponent } from './fiches-list/fiches-list.component';
import { EmployeeComponent } from './employee/employee.component';
import {FicheComponent} from "./fiche/fiche.component";
import {CongesListComponent} from "./conges-list/conges-list.component";
import {CongeComponent} from "./conge/conge.component";

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'welcome', component: WelcomeComponent,canActivate:[RouteGuardService] },
  { path: 'employees', component: ListEmployeesComponent,canActivate:[RouteGuardService] },
  { path: 'employees/:cin', component: EmployeeComponent,canActivate:[RouteGuardService] },
  { path: 'fiches/:id', component: FicheComponent,canActivate:[RouteGuardService] },
  { path: 'fiches', component: FichesListComponent,canActivate:[RouteGuardService] },
  { path: 'conges', component: CongesListComponent,canActivate:[RouteGuardService] },
  { path: 'conges/:id', component: CongeComponent,canActivate:[RouteGuardService] },

  { path: 'logout', component: LogoutComponent,canActivate:[RouteGuardService] },


  {path:'**',component:ErrorComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

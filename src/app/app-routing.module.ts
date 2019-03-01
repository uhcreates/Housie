import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { MatchlistComponent } from './components/matchlist/matchlist.component';
import { ClaimComponent } from './components/claim/claim.component';
import { ResultComponent } from './components/result/result.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/login'},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'match-list', component: MatchlistComponent},
  {path: 'claim', component: ClaimComponent},
  {path: 'result', component: ResultComponent},
  {path: '**', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

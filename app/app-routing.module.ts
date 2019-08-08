import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [

  { path: '', redirectTo: '/auth/login', pathMatch: 'full' },

  {
    path: '',
    component: GuestLayoutComponent,
    children: guestRoutes,
  },
  {
    path: '',
    component: UserLayoutComponent,
    children: userRoutes,
    canActivate: [AuthGuardService]

  },
  {
    path: '**',
    redirectTo: '/auth/login'
 },


];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false,useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

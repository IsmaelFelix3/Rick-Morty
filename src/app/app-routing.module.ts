import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { routes } from './routes';

const routes: Routes = [
  { 
    path: 'home',
    loadChildren: () => import ('./home/home-routing/home-routing.module').then(modulo => modulo.HomeRoutingModule)
   },
   {
     path: '**',
     redirectTo: 'home'
   }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

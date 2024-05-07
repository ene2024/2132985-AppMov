import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { TareaDetalleComponent } from './tarea-detalle/tarea-detalle.component';
import { TareasComponent } from './tareas/tareas.component';

const routes: Routes = [
 /*{
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },*/
  {
    path: '',
    redirectTo: '/tareas',
    pathMatch: 'full'
  },
  {
    path: 'tareas',
    component: TareasComponent
  },
  {
    path: 'tarea/:id',
    component: TareaDetalleComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  
  {
    path: 'receitaslocais',
    loadChildren: () => import('./receitaslocais/receitaslocais.module').then( m => m.ReceitaslocaisPageModule)
  },
  {
    path: 'rojoes',
    loadChildren: () => import('./rojoes/rojoes.module').then( m => m.RojoesPageModule)
  },
  {
    path: 'bacalhau',
    loadChildren: () => import('./bacalhau/bacalhau.module').then( m => m.BacalhauPageModule)
  },
  {
    path: 'torta',
    loadChildren: () => import('./torta/torta.module').then( m => m.TortaPageModule)
  },
  {
    path: 'histreceit',
    loadChildren: () => import('./histreceit/histreceit.module').then( m => m.HistreceitPageModule)
  },
  {
    path: 'origembacalhau',
    loadChildren: () => import('./origembacalhau/origembacalhau.module').then( m => m.OrigembacalhauPageModule)
  },
  {
    path: 'origemrojoes',
    loadChildren: () => import('./origemrojoes/origemrojoes.module').then( m => m.OrigemrojoesPageModule)
  },
  {
    path: 'origemtorta',
    loadChildren: () => import('./origemtorta/origemtorta.module').then( m => m.OrigemtortaPageModule)
  },
  {
    path: 'realizador',
    loadChildren: () => import('./realizador/realizador.module').then( m => m.RealizadorPageModule)
  },
  {
    path: 'histlocal',
    loadChildren: () => import('./histlocal/histlocal.module').then( m => m.HistlocalPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

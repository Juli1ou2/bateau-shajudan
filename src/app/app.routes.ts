import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'infos-contacts',
    loadComponent: () => import('./pages/infos-contacts/infos-contacts.page').then( m => m.InfosContactsPage)
  },
  {
    path: 'bateaux',
    loadComponent: () => import('./pages/bateaux/bateaux.page').then( m => m.BateauxPage)
  },
  {
    path: 'restaurants',
    loadComponent: () => import('./pages/restaurants/restaurants.page').then( m => m.RestaurantsPage)
  },
  {
    path: 'produits',
    loadComponent: () => import('./pages/produits/produits.page').then( m => m.ProduitsPage)
  },
  {
    path: 'recettes',
    loadComponent: () => import('./pages/recettes/recettes.page').then( m => m.RecettesPage)
  },
];

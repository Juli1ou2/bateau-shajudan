import { Routes } from '@angular/router';
import { TabsComponent } from './ui/tabs/tabs.component';

export const routes: Routes = [
  {
    path: '',
    component: TabsComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home',
      },
      {
        path: 'home',
        loadComponent: () => import('./pages/home/home.page').then((m) => m.HomePage),
      },
      {
        path: 'infos-contacts',
        title: 'Contacts | Shajudan Boat',
        loadComponent: () => import('./pages/infos-contacts/infos-contacts.page').then( m => m.InfosContactsPage)
      },
      {
        path: 'bateaux',
        title: 'Bateaux | Shajudan Boat',
        loadComponent: () => import('./pages/bateaux/bateaux.page').then( m => m.BateauxPage)
      },
      {
        path: 'restaurants',
        title: 'Restaurants | Shajudan Boat',
        loadComponent: () => import('./pages/restaurants/restaurants.page').then( m => m.RestaurantsPage)
      },
      {
        path: 'produits',
        title: 'Produits | Shajudan Boat',
        loadComponent: () => import('./pages/produits/produits.page').then( m => m.ProduitsPage)
      },
      {
        path: 'recettes',
        title: 'Recettes | Shajudan Boat',
        loadComponent: () => import('./pages/recettes/recettes.page').then( m => m.RecettesPage)
      },
      {
        path: 'panier',
        title: 'Panier | Shajudan Boat',
        loadComponent: () => import('./pages/panier/panier.page').then( m => m.PanierPage)
      },
      {
        path: 'infos-bateau',
        title: 'Détails bateau | Shajudan Boat',
        loadComponent: () => import('./pages/bateaux/infos-bateau/infos-bateau.page').then( m => m.InfosBateauPage)
      },
      {
        path: 'infos-recette',
        title: 'Détails recette | Shajudan Boat',
        loadComponent: () => import('./pages/recettes/infos-recette/infos-recette.page').then( m => m.InfosRecettePage)
      },
      {
        path: 'infos-restaurant',
        title: 'Détails restaurant | Shajudan Boat',
        loadComponent: () => import('./pages/restaurants/infos-restaurant/infos-restaurant.page').then( m => m.InfosRestaurantPage)
      },
    ]
  },
];

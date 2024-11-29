import { Component, effect, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButton,
  IonIcon,
  IonCol,
  IonRow,
  IonGrid,
  IonList,
  IonItem,
  IonLabel,
  IonSelect,
  IonSelectOption,
  IonToast,
} from '@ionic/angular/standalone';
import { HeaderComponent } from 'src/app/ui/header/header.component';
import { PanierService } from 'src/app/core/services/panier.service';
import { Panier } from 'src/app/core/interfaces/panier.interface';
import { addIcons } from 'ionicons';
import {
  alertCircle,
  arrowRedoCircle,
  send,
  trashBinOutline,
} from 'ionicons/icons';
import { ToastController } from '@ionic/angular';
import { RestaurantsService } from 'src/app/core/services/restaurants.service';
import { Restaurant } from 'src/app/core/interfaces/restaurant.interface';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.page.html',
  styleUrls: ['./panier.page.scss'],
  standalone: true,
  imports: [
    IonLabel,
    IonItem,
    IonList,
    IonGrid,
    IonRow,
    IonCol,
    IonIcon,
    IonButton,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonSelect,
    IonSelectOption,
    IonToast,
    CommonModule,
    FormsModule,
    HeaderComponent,
  ],
})
export class PanierPage implements OnInit {
  title: string = 'Panier';
  panierService: PanierService = inject(PanierService);
  restaurantsService: RestaurantsService = inject(RestaurantsService);
  toastController: ToastController = inject(ToastController);
  panier: Panier;
  totalItemsPanier: number;
  totalPrixSansReducPanier: number;
  totalReducPanier: number;
  totalPrixPanier: number;
  restaurants: Restaurant[];
  pointCollecteSelect: Restaurant;

  constructor() {
    addIcons({ trashBinOutline, send, alertCircle, arrowRedoCircle });
    this.getRestaurants();
    effect(() => {
      this.panier = this.panierService.panier();
      this.totalItemsPanier = this.panierService.totalItems();
      this.totalPrixSansReducPanier = this.panierService.totalPrixSansReduc();
      this.totalReducPanier = this.panierService.totalReduc();
      this.totalPrixPanier = this.panierService.totalPrix();
    });
  }

  ngOnInit() {}

  viderPanier() {
    this.panierService.viderPanier();
    this.showViderToast();
  }

  commander() {
    if (this.pointCollecteSelect) {
      this.panierService.viderPanier();
      this.showCommandeToast();
    } else {
      this.showErreurPointCollecteToast();
    }
  }

  getRestaurants(): void {
    this.restaurantsService.getRestaurants().subscribe({
      next: (restaurants: Restaurant[]) => {
        this.restaurants = restaurants;
      },
      error: (err) => console.log(err),
    });
  }

  onPointCollecteChange(event: any) {
    this.pointCollecteSelect = event.detail.value;
    console.log('pointCollectSelec : ', this.pointCollecteSelect.title);
  }

  async showCommandeToast() {
    const toast = await this.toastController.create({
      message:
        'Commande envoyée ! à collecter à ' + this.pointCollecteSelect?.title,
      duration: 3000,
      icon: 'arrow-redo-circle',
      position: 'top',
    });
    toast.present();
  }

  async showViderToast() {
    const toast = await this.toastController.create({
      message: 'Panier vidé !',
      duration: 3000,
      icon: 'alert-circle',
      position: 'top',
    });
    toast.present();
  }

  async showErreurPointCollecteToast() {
    const toast = await this.toastController.create({
      message: 'Veuillez sélectionner un point de collecte !',
      duration: 3000,
      icon: 'alert-circle',
      position: 'top',
    });
    toast.present();
  }
}

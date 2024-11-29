import { Component, effect, inject, OnInit, ViewChild } from '@angular/core';
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
import { Produit } from 'src/app/core/interfaces/produit.interface';
import { ProduitService } from 'src/app/core/services/produits.service';
import { QuantiteModalComponent } from 'src/app/ui/quantite-modal/quantite-modal.component';

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
    IonToast, //pour être accessible sur téléphone
    CommonModule,
    FormsModule,
    HeaderComponent,
    QuantiteModalComponent,
  ],
})
export class PanierPage implements OnInit {
  title: string = 'Panier';
  panierService: PanierService = inject(PanierService);
  produitService: ProduitService = inject(ProduitService);
  restaurantsService: RestaurantsService = inject(RestaurantsService);
  toastController: ToastController = inject(ToastController);
  panier: Panier;
  totalItemsPanier: number;
  totalPrixSansReducPanier: number;
  totalReducPanier: number;
  totalPrixPanier: number;
  restaurants: Restaurant[];
  pointCollecteSelect: Restaurant = {
    id: 0,
    alt: '',
    src: '',
    title: '',
    content: '',
    openingHours: '',
    closingHours: '',
    openingDays: '',
    address: '',
  };
  produitSelec: Produit;
  @ViewChild('modalComponent') quantiteModalComponent!: QuantiteModalComponent;

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
    if (this.pointCollecteSelect.title !== '') {
      this.showCommandeToast();
      this.panierService.viderPanier();
      this.pointCollecteSelect = {
        id: 0,
        alt: '',
        src: '',
        title: '',
        content: '',
        openingHours: '',
        closingHours: '',
        openingDays: '',
        address: '',
      };
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

  setProduitSelec(produit: Produit) {
    this.produitSelec = produit;
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

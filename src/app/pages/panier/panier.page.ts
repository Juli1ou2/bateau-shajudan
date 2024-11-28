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
  IonGrid, IonList, IonItem, IonLabel } from '@ionic/angular/standalone';
import { HeaderComponent } from 'src/app/ui/header/header.component';
import { PanierService } from 'src/app/core/services/panier.service';
import { Panier } from 'src/app/core/interfaces/panier.interface';
import { addIcons } from 'ionicons';
import { send, trashBinOutline } from 'ionicons/icons';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.page.html',
  styleUrls: ['./panier.page.scss'],
  standalone: true,
  imports: [IonLabel, IonItem, IonList, 
    IonGrid,
    IonRow,
    IonCol,
    IonIcon,
    IonButton,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    HeaderComponent,
  ],
})
export class PanierPage implements OnInit {
  title: string = 'Panier';
  panierService: PanierService = inject(PanierService);
  panier: Panier;
  totalItemsPanier: number;
  totalPrixSansReducPanier: number;
  totalReducPanier: number;
  totalPrixPanier: number;

  constructor() {
    addIcons({ trashBinOutline, send });
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
  }
  
  commander(){
    //TODO
    this.panierService.viderPanier();
  }
}

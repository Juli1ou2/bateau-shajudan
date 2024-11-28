import { Component, effect, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { HeaderComponent } from 'src/app/ui/header/header.component';
import { PanierService } from 'src/app/services/panier.service';
import { Item } from 'src/app/core/interfaces/panier';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.page.html',
  styleUrls: ['./panier.page.scss'],
  standalone: true,
  imports: [
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
  panier: Item[];
  totalItemsPanier: number;
  totalPrixSansReducPanier: number;
  totalReducPanier: number;
  totalPrixPanier: number;

  constructor() {
    effect(() => {
      // this.panier = this.panierService.panier();
      this.totalItemsPanier = this.panierService.totalItems();
      this.totalPrixSansReducPanier = this.panierService.totalPrixSansReduc();
      this.totalReducPanier = this.panierService.totalReduc();
      this.totalPrixPanier = this.panierService.totalPrix();
    });
  }

  ngOnInit() {}
}

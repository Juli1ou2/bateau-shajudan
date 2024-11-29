import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProduitService } from '../../core/services/produits.service';
import { Produit } from '../../core/interfaces/produit.interface';
import { HeaderComponent } from 'src/app/ui/header/header.component';
import { PanierService } from 'src/app/core/services/panier.service';
import {
  IonContent,
  IonLabel,
  IonHeader,
  IonAvatar,
  IonToolbar,
  IonTitle,
  IonItem,
  IonList,
  IonListHeader,
} from '@ionic/angular/standalone';
import { QuantiteModalComponent } from 'src/app/ui/quantite-modal/quantite-modal.component';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.page.html',
  styleUrls: ['./produits.page.scss'],
  standalone: true,
  imports: [
    IonItem,
    IonLabel,
    IonContent,
    IonHeader,
    IonContent,
    IonAvatar,
    IonLabel,
    IonToolbar,
    IonTitle,
    IonList,
    IonListHeader,
    CommonModule,
    FormsModule,
    HeaderComponent,
    ReactiveFormsModule,
    QuantiteModalComponent,
  ],
})
export class ProduitsPage implements OnInit {
  title: string = 'Produits';
  panierService: PanierService = inject(PanierService);
  produitService: ProduitService = inject(ProduitService);
  produits: Produit[];
  produitSelec: Produit;
  @ViewChild('modalComponent') quantiteModalComponent!: QuantiteModalComponent;

  constructor() {}

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.produitService.getProducts().subscribe({
      next: (products) => {
        this.produits = products;
        this.produits.sort((a, b) => a.name.localeCompare(b.name));

        this.calculNewPrice();
      },
      error: (err) => console.log(err),
    });
  }

  calculNewPrice() {
    for (let produit of this.produits) {
      if (produit.sale) {
        produit['newPrice'] =
          produit.price - (produit.price * produit.discount) / 100;
      } else {
        produit['newPrice'] = produit.price;
      }
    }
  }

  setProduitSelec(produit: Produit) {
    this.produitSelec = produit;
  }
}

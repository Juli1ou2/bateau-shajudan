import {Component, inject, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {ProduitService} from "../../services/produit.service";
import {Produit} from "../../core/interface/produit";
import {IonicModule} from "@ionic/angular";

@Component({
  selector: 'app-produits',
  templateUrl: './produits.page.html',
  styleUrls: ['./produits.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule]
})
export class ProduitsPage implements OnInit {

  produitService: ProduitService = inject(ProduitService);
  produitList: Produit[];

  constructor() { }

  ngOnInit() {
    this.getProducts()
  }

  getProducts() {
    this.produitService.getProducts().subscribe({
      next: (products)=> {
        this.produitList = products
        this.produitList.sort((a, b) => a.name.localeCompare(b.name));

        this.calculNewPrice()
      },
      error: err => console.log(err)
    })
  }

  calculNewPrice() {
    for (let produit of this.produitList) {
      if (produit.discount && produit.discount > 0) {
        produit['newPrice'] = produit.price - (produit.price * produit.discount / 100);
      } else {
        produit['newPrice'] = produit.price;
      }
    }
  }

}

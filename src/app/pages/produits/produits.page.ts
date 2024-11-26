import {Component, inject, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {ProduitService} from "../../services/produit.service";
import {Produit} from "../../interface/produit";
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
      },
      error: err => console.log(err)
    })
  }

}

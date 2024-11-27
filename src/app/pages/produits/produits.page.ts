import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProduitService } from '../../services/produit.service';
import { Produit } from '../../core/interface/produit';
import { IonicModule, IonModal } from '@ionic/angular';
import { HeaderComponent } from 'src/app/ui/header/header.component';
import { OverlayEventDetail } from '@ionic/core/components';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.page.html',
  styleUrls: ['./produits.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule, HeaderComponent],
})
export class ProduitsPage implements OnInit {
  title: string = 'Produits';
  produitService: ProduitService = inject(ProduitService);
  produits: Produit[];

  @ViewChild(IonModal) modal: IonModal;
  isModalOpen = false;
  produitSelec: Produit;

  constructor() {}

  ngOnInit() {
    this.getProducts();
    this.getProducts();
  }

  getProducts() {
    this.produitService.getProducts().subscribe({
      next: (products)=> {
        this.produits = products
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

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
  
  setProduitSelec(produit: Produit){
    this.produitSelec = produit;
  }

  cancel() {
    this.setOpen(false);
  }
  
  confirm() {
    this.setOpen(false);
  }
}

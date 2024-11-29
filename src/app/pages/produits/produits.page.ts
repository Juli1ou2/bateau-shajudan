import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ProduitService } from '../../core/services/produits.service';
import { Produit } from '../../core/interfaces/produit.interface';
import { HeaderComponent } from 'src/app/ui/header/header.component';
import { PanierService } from 'src/app/core/services/panier.service';
import {
  IonModal,
  IonButtons,
  IonContent,
  IonLabel,
  IonHeader,
  IonAvatar,
  IonToolbar,
  IonTitle,
  IonButton,
  IonItem,
  IonInput,
  IonList,
  IonListHeader,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.page.html',
  styleUrls: ['./produits.page.scss'],
  standalone: true,
  imports: [
    IonItem,
    IonButton,
    IonLabel,
    IonContent,
    IonButtons,
    IonModal,
    IonButtons,
    IonHeader,
    IonContent,
    IonAvatar,
    IonLabel,
    IonToolbar,
    IonTitle,
    IonInput,
    IonList,
    IonListHeader,
    CommonModule,
    FormsModule,
    HeaderComponent,
    ReactiveFormsModule,
  ],
})
export class ProduitsPage implements OnInit {
  title: string = 'Produits';
  panierService: PanierService = inject(PanierService);
  produitService: ProduitService = inject(ProduitService);
  produits: Produit[];

  @ViewChild(IonModal) modal: IonModal;
  private fb: FormBuilder = inject(FormBuilder);
  isModalOpen = false;
  produitSelec: Produit;
  quantite: number = 0;
  formGroup: FormGroup;

  constructor() {}

  ngOnInit() {
    this.getProducts();
    this.formGroup = this.fb.group({
      quantite: new FormControl(1, [Validators.min(0)]),
    });
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

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  setProduitSelec(produit: Produit) {
    this.produitSelec = produit;
  }

  cancel() {
    this.setOpen(false);
    this.formGroup.get('quantite')?.setValue(1);
  }

  confirm() {
    this.setOpen(false);
    if (this.panierService.verifyItemPresence(this.produitSelec.id)) {
      if (this.formGroup.value.quantite === 0) {
        this.panierService.removePanierItem(this.produitSelec.id);
      } else {
        this.panierService.updateQuantitePanierItem(
          this.produitSelec.id,
          this.formGroup.value.quantite
        );
      }
    } else {
      this.panierService.addPanierItem({
        produit: this.produitSelec,
        quantite: this.formGroup.value.quantite,
      });
    }
    this.formGroup.get('quantite')?.setValue(1);
  }
}

import { Component, inject, Input, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
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
} from '@ionic/angular/standalone';
import { Produit } from 'src/app/core/interfaces/produit.interface';
import { PanierService } from 'src/app/core/services/panier.service';

@Component({
  selector: 'app-quantite-modal',
  templateUrl: './quantite-modal.component.html',
  styleUrls: ['./quantite-modal.component.scss'],
  standalone: true,
  imports: [
    IonItem,
    IonButton,
    IonLabel,
    IonContent,
    IonModal,
    IonButtons,
    IonHeader,
    IonContent,
    IonAvatar,
    IonLabel,
    IonToolbar,
    IonTitle,
    IonInput,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class QuantiteModalComponent implements OnInit {
  @ViewChild(IonModal) modal: IonModal;
  private fb: FormBuilder = inject(FormBuilder);
  panierService: PanierService = inject(PanierService);
  isModalOpen = false;
  @Input() produitSelec: Produit;
  quantite: number = 0;
  formGroup: FormGroup;

  constructor() {}

  ngOnInit() {
    this.formGroup = this.fb.group({
      quantite: new FormControl(1, [Validators.min(0)]),
    });
  }

  @Input() open() {
    if (
      this.produitSelec &&
      this.panierService.verifyItemPresence(this.produitSelec.id)
    ) {
      const item = this.panierService
        .getPanier()
        .items.find((item) => item.produit.id === this.produitSelec.id);
      this.formGroup.get('quantite')?.setValue(item?.quantite);
    }
    this.isModalOpen = true;
  }

  cancel() {
    this.isModalOpen = false;
    this.formGroup.get('quantite')?.setValue(1);
  }

  confirm() {
    this.isModalOpen = false;
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

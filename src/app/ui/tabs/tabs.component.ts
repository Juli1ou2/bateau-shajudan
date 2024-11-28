import { Component, effect, inject, OnInit } from '@angular/core';
import {
  IonTabs,
  IonIcon,
  IonTabButton,
  IonTabBar,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { cart, home, boat, fish, restaurant, moonOutline, personCircle, personCircleOutline, sunny, sunnyOutline } from 'ionicons/icons';
import { PanierService } from 'src/app/core/services/panier.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  standalone: true,
  imports: [IonIcon, IonTabs, IonTabBar, IonTabButton],
})
export class TabsComponent implements OnInit {
  private panierService: PanierService = inject(PanierService);
  totalItemsPanier: number;

  constructor() {
    addIcons({ home, boat, fish, restaurant, cart });
    effect(() => {
      this.totalItemsPanier = this.panierService.totalItems();
    });
  }

  ngOnInit() {}
}

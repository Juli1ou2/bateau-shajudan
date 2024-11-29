import {
  Component,
  effect,
  inject,
} from '@angular/core';
import {
  IonTabs,
  IonIcon,
  IonTabButton,
  IonTabBar,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { cart, home, boat, fish, restaurant } from 'ionicons/icons';
import { PanierService } from 'src/app/core/services/panier.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  standalone: true,
  imports: [IonIcon, IonTabs, IonTabBar, IonTabButton],
})
export class TabsComponent {
  private panierService: PanierService = inject(PanierService);
  totalItemsPanier: number;

  constructor() {
    addIcons({ home, boat, fish, restaurant, cart });
    effect(() => {
      this.totalItemsPanier = this.panierService.totalItems();
    });
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter déclenché');
    this.panierService.getStoredPanier();
  }
}

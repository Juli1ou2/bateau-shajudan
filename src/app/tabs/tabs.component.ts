import { Component, OnInit } from '@angular/core';
import {
  IonTabs,
  IonIcon,
  IonTabButton,
  IonTabBar,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { cart, home, boat, fish, restaurant } from 'ionicons/icons';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  standalone: true,
  imports: [IonIcon, IonTabs, IonTabBar, IonTabButton],
})
export class TabsComponent implements OnInit {
  constructor() {
    addIcons({ home, boat, fish, restaurant, cart });
  }

  ngOnInit() {}
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCardTitle,
  IonCardHeader,
  IonCard,
  IonGrid,
  IonRow,
  IonCol,
  IonIcon,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { boat, fish, restaurant, call, book } from 'ionicons/icons';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonIcon,
    IonCol,
    IonRow,
    IonGrid,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    RouterModule,
  ],
})
export class HomePage {
  title: 'Shajudan Boat';
  
  constructor() {
    addIcons({ boat, fish, restaurant, call, book });
  }
}

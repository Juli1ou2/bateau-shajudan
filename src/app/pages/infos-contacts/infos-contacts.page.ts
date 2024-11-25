import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonIcon,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { logoFacebook, logoYoutube, logoInstagram } from 'ionicons/icons';

@Component({
  selector: 'app-infos-contacts',
  templateUrl: './infos-contacts.page.html',
  styleUrls: ['./infos-contacts.page.scss'],
  standalone: true,
  imports: [
    IonIcon,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
  ],
})
export class InfosContactsPage implements OnInit {
  constructor() {
    addIcons({ logoFacebook, logoYoutube, logoInstagram });
  }

  ngOnInit() {}
}

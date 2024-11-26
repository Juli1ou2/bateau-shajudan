import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { HeaderComponent } from 'src/app/header/header.component';

@Component({
  selector: 'app-infos-restaurant',
  templateUrl: './infos-restaurant.page.html',
  styleUrls: ['./infos-restaurant.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    HeaderComponent,
  ],
})
export class InfosRestaurantPage implements OnInit {
  title: string = 'Infos restaurant';

  constructor() {}

  ngOnInit() {}
}

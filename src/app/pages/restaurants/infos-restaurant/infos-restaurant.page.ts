import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-infos-restaurant',
  templateUrl: './infos-restaurant.page.html',
  styleUrls: ['./infos-restaurant.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class InfosRestaurantPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

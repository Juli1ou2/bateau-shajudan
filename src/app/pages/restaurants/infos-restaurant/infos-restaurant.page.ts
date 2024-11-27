import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Restaurant } from '../../../interface/restaurant';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonIcon,
  IonCardContent,
} from '@ionic/angular/standalone';
import { HeaderComponent } from 'src/app/ui/header/header.component';
import { addIcons } from 'ionicons';
import { locationOutline, calendarOutline, timeOutline } from 'ionicons/icons';

@Component({
  selector: 'app-infos-restaurant',
  templateUrl: './infos-restaurant.page.html',
  styleUrls: ['./infos-restaurant.page.scss'],
  standalone: true,
  imports: [
    IonCardContent,
    IonIcon,
    IonCardTitle,
    IonCardHeader,
    IonCard,
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
  title!: string;
  restaurant: Restaurant;

  constructor(private route: ActivatedRoute, private router: Router) {
    addIcons({ locationOutline, calendarOutline, timeOutline });
  }

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      if (this.router.getCurrentNavigation()?.extras.state) {
        this.restaurant =
          this.router.getCurrentNavigation()?.extras.state?.['restaurant'];
          this.title = 'Restaurant ' + this.restaurant.title;
      }
    });
  }
}

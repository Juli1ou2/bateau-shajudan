import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonCol,
  IonRow,
  IonGrid,
} from '@ionic/angular/standalone';
import { Restaurant } from '../../core/interfaces/restaurant.interface';
import { RestaurantsService } from '../../core/services/restaurants.service';
import { NavigationExtras, Router } from '@angular/router';
import { HeaderComponent } from 'src/app/ui/header/header.component';
import { CardComponent } from 'src/app/ui/card/card.component';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.page.html',
  styleUrls: ['./restaurants.page.scss'],
  standalone: true,
  imports: [
    IonCol,
    IonRow,
    IonGrid,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    CardComponent,
    HeaderComponent,
  ],
})
export class RestaurantsPage implements OnInit {
  title: string = 'Restaurants';
  restaurants: Restaurant[];
  restaurantService: RestaurantsService = inject(RestaurantsService);

  constructor(private router: Router) {}

  ngOnInit() {
    this.getRestaurants();
  }

  getRestaurants(): void {
    this.restaurantService.getRestaurants().subscribe({
      next: (restaurants: Restaurant[]) => {
        this.restaurants = restaurants;
      },
      error: (err) => console.log(err),
    });
  }

  getRestaurantInfo(restaurant: Restaurant) {
    let navigationExtras: NavigationExtras = {
      state: {
        restaurant: restaurant,
      },
    };
    this.router.navigate(['infos-restaurant'], navigationExtras);
  }
}

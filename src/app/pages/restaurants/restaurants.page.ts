import {Component, inject, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import {ListComponent} from "../../list/list.component";
import {Restaurant} from "../../interface/restaurant";
import {RestaurantService} from "../../services/restaurant.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.page.html',
  styleUrls: ['./restaurants.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, ListComponent]
})
export class RestaurantsPage implements OnInit {

  restaurantList: Restaurant[];
  restaurantService: RestaurantService = inject(RestaurantService);

  constructor(private router: Router) { }

  ngOnInit() {
    this.getRestaurants();
  }

  getRestaurants(): void {
    this.restaurantService.getRestaurants().subscribe({
      next: (restaurants: Restaurant[]) => {
        this.restaurantList = restaurants
      },
      error: err => console.log(err),
    })
  }

  getRestaurantInfo(id: number) {
    console.log('id : ' + id)
    // this.router.navigate([''])
  }
}

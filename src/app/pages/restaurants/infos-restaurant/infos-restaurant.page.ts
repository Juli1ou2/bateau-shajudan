import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {ActivatedRoute, Router} from "@angular/router";
import {Restaurant} from "../../../interface/restaurant";
import {IonicModule} from "@ionic/angular";

@Component({
  selector: 'app-infos-restaurant',
  templateUrl: './infos-restaurant.page.html',
  styleUrls: ['./infos-restaurant.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, IonicModule]
})
export class InfosRestaurantPage implements OnInit {

  restaurant: Restaurant;

  constructor(private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if(this.router.getCurrentNavigation()?.extras.state) {
        this.restaurant = this.router.getCurrentNavigation()?.extras.state?.['restaurant']
      }
    })
  }

}

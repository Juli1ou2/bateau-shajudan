import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {ActivatedRoute, Router} from "@angular/router";
import {Restaurant} from "../../../interface/restaurant";
import {IonicModule} from "@ionic/angular";
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { HeaderComponent } from 'src/app/ui/header/header.component';

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

  ngOnInit() {}
}

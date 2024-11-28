import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Restaurant} from "../interfaces/restaurant.interface";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {

  constructor(private http: HttpClient) { }

  getRestaurants(): Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>("assets/data/restaurants.json")
  }
}

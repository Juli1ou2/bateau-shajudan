import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Produit} from "../interfaces/produit.interface";

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Produit[]> {
    return this.http.get<Produit[]>('assets/data/produits.json')
  }
}

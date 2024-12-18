import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Bateau} from "../interfaces/bateau.interface";

@Injectable({
  providedIn: 'root'
})
export class BateauxService {

  constructor(private http: HttpClient) { }

  getBateaux(): Observable<Bateau[]> {
    return this.http.get<Bateau[]>("assets/data/boats.json")
  }
}

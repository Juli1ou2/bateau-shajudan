import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Bateau} from "../interface/bateau";

@Injectable({
  providedIn: 'root'
})
export class BateauService {

  constructor(private http: HttpClient) { }

  getBateaux(): Observable<Bateau[]> {
    return this.http.get<Bateau[]>("assets/data/boat.json")
  }
}

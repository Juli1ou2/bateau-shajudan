import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Recette } from '../interfaces/recette.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecettesService {
  private http: HttpClient = inject(HttpClient);

  constructor() { }

  getRecettes(): Observable<Recette[]> {
    return this.http.get<Recette[]>("assets/data/recettes.json")
  } 
}

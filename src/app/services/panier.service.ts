import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PanierService {
  totalPrix = signal(0);
  totalReduc = signal(0);
  totalItems = signal(0);

  constructor() { }
}

import {Component, inject, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import {ListComponent} from "../../list/list.component";
import {BateauService} from "../../services/bateau.service";
import {Bateau} from "../../interface/bateau";
import {Router} from "@angular/router";

@Component({
  selector: 'app-bateaux',
  templateUrl: './bateaux.page.html',
  styleUrls: ['./bateaux.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, ListComponent]
})
export class BateauxPage implements OnInit {

  bateauList: Bateau[];
  bateauService: BateauService = inject(BateauService);

  constructor(private router: Router) { }

  ngOnInit() {
    this.getBateaux();
  }

  getBateaux(): void {
    this.bateauService.getBateaux().subscribe({
      next: (bateaux) => {
        this.bateauList = bateaux
      },
      error: err => console.log(err),
    })
  }

  getBateauInfo(id: number) {
    console.log('id : ' + id)
    // this.router.navigate([''])
  }
}

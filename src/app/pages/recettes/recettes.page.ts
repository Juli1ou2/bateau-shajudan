import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonGrid,
  IonRow,
  IonCol,
} from '@ionic/angular/standalone';
import { Recette } from 'src/app/core/interface/recette';
import { RecettesService } from 'src/app/services/recettes.service';
import { CardComponent } from 'src/app/ui/card/card.component';
import { NavigationExtras, Router } from '@angular/router';
import { HeaderComponent } from 'src/app/ui/header/header.component';

@Component({
  selector: 'app-recettes',
  templateUrl: './recettes.page.html',
  styleUrls: ['./recettes.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonGrid,
    IonRow,
    IonCol,
    CommonModule,
    FormsModule,
    CardComponent,
    HeaderComponent,
  ],
})
export class RecettesPage implements OnInit {
  title: string = 'Idées recettes';
  recettes: Recette[];
  private recetteService: RecettesService = inject(RecettesService);
  private router: Router = inject(Router);

  constructor() {}

  ngOnInit() {
    this.recetteService.getRecettes().subscribe({
      next: (res) => {
        console.table(res);
        this.recettes = res;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  getRecetteInfos(recette: Recette) {
    let navigationExtras: NavigationExtras = {
      state: {
        recette: recette,
      },
    };
    this.router.navigate(['/infos-recette'], navigationExtras);
  }
}

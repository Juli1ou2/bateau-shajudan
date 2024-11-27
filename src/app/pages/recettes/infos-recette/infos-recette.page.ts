import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardTitle,
  IonCardContent,
  IonCardHeader,
} from '@ionic/angular/standalone';
import { Router, ActivatedRoute } from '@angular/router';
import { Recette } from 'src/app/core/interfaces/recette';
import { HeaderComponent } from 'src/app/ui/header/header.component';

@Component({
  selector: 'app-infos-recette',
  templateUrl: './infos-recette.page.html',
  styleUrls: ['./infos-recette.page.scss'],
  standalone: true,
  imports: [
    IonCardHeader,
    IonCardContent,
    IonCardTitle,
    IonCard,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    HeaderComponent,
  ],
})
export class InfosRecettePage implements OnInit {
  title: string = 'Détails recette';
  recette: Recette;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      if (this.router.getCurrentNavigation()?.extras.state) {
        this.recette =
          this.router.getCurrentNavigation()?.extras.state?.['recette'];
      }
    });
  }
}

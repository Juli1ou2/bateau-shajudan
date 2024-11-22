import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-infos-recette',
  templateUrl: './infos-recette.page.html',
  styleUrls: ['./infos-recette.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class InfosRecettePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

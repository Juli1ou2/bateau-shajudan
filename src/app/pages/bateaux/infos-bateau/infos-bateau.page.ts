import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-infos-bateau',
  templateUrl: './infos-bateau.page.html',
  styleUrls: ['./infos-bateau.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class InfosBateauPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

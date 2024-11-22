import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-infos-contacts',
  templateUrl: './infos-contacts.page.html',
  styleUrls: ['./infos-contacts.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class InfosContactsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

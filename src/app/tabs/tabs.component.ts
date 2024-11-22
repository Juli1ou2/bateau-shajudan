import { Component, OnInit } from '@angular/core';
import { IonTabs, IonIcon, IonTabButton, IonTabBar } from "@ionic/angular/standalone";

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  standalone: true,
  imports: [IonIcon, IonTabs, IonTabBar, IonTabButton]
})
export class TabsComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}

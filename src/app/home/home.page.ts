import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {TabsComponent} from "../tabs/tabs.component";
import {IonicModule} from "@ionic/angular";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [TabsComponent, IonicModule, FormsModule],
})
export class HomePage {

  constructor() {
  }
}

import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ActivatedRoute, Router} from "@angular/router";
import {Bateau} from "../../../interface/bateau";
import {IonicModule} from "@ionic/angular";

@Component({
  selector: 'app-infos-bateau',
  templateUrl: './infos-bateau.page.html',
  styleUrls: ['./infos-bateau.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule],
  encapsulation: ViewEncapsulation.None
})
export class InfosBateauPage implements OnInit {

  bateau: Bateau;

  constructor(private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if(this.router.getCurrentNavigation()?.extras.state) {
        this.bateau = this.router.getCurrentNavigation()?.extras.state?.['bateau']
      }
    })
  }

}

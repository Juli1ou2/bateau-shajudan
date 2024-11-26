import { Component, inject, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ListComponent } from '../../list/list.component';
import { BateauService } from '../../services/bateau.service';
import { Bateau } from '../../interface/bateau';
import { NavigationExtras, Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from 'src/app/header/header.component';

@Component({
  selector: 'app-bateaux',
  templateUrl: './bateaux.page.html',
  styleUrls: ['./bateaux.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ListComponent,
    IonicModule,
    HeaderComponent,
  ],
  encapsulation: ViewEncapsulation.None,
})
export class BateauxPage implements OnInit {
  title: string = 'Bateaux';
  bateauList: Bateau[];
  bateauService: BateauService = inject(BateauService);

  constructor(private router: Router) {}

  ngOnInit() {
    this.getBateaux();
  }

  getBateaux(): void {
    this.bateauService.getBateaux().subscribe({
      next: (bateaux) => {
        this.bateauList = bateaux;
      },
      error: (err) => console.log(err),
    });
  }

  getBateauInfo(bateau: Bateau) {
    let navigationExtras: NavigationExtras = {
      state: {
        bateau: bateau,
      },
    };
    this.router.navigate(['infos-bateau'], navigationExtras);
  }
}

import { Component, inject, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardComponent } from '../../ui/card/card.component';
import { BateauxService } from '../../services/bateaux.service';
import { Bateau } from '../../core/interfaces/bateau';
import { NavigationExtras, Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from 'src/app/ui/header/header.component';

@Component({
  selector: 'app-bateaux',
  templateUrl: './bateaux.page.html',
  styleUrls: ['./bateaux.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    CardComponent,
    IonicModule,
    HeaderComponent,
  ],
  encapsulation: ViewEncapsulation.None,
})
export class BateauxPage implements OnInit {
  title: string = 'Bateaux';
  bateauList: Bateau[];
  bateauService: BateauxService = inject(BateauxService);

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

import {Component, Input, OnInit} from '@angular/core';
import {IonicModule} from "@ionic/angular";

@Component({
  selector: 'app-card',
  standalone: true,
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  imports: [
    IonicModule
  ]
})
export class CardComponent implements OnInit{

  @Input()
  title: string;
  @Input()
  cardSubtitles: string;
  @Input()
  cardContent: string;
  @Input()
  cardSrc: string;
  @Input()
  cardAlt: string;


  constructor() { }

  ngOnInit(): void {
  }
}

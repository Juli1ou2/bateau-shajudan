import {Component, Input, OnInit} from '@angular/core';
import {IonicModule} from "@ionic/angular";

@Component({
  selector: 'app-list',
  standalone: true,
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  imports: [
    IonicModule
  ]
})
export class ListComponent implements OnInit{

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

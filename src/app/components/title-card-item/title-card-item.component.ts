import { Component, OnInit, Input } from '@angular/core';
import ITitleCards from 'src/app/title-cards.interface';

@Component({
  selector: 'app-title-card-item',
  templateUrl: './title-card-item.component.html',
  styleUrls: ['./title-card-item.component.scss']
})
export class TitleCardItemComponent implements OnInit {
  @Input() titleCardItem: ITitleCards;
  constructor() {
  }

  ngOnInit(): void {
  }

}

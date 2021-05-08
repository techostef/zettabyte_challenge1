import { TitleCardsService } from './services/title-cards.service';
import { Component, OnInit } from '@angular/core';
import ITitleCards from './title-cards.interface'
import {TitleCards} from './title-cards'
import { dataCardToCategory } from './helper/data.helper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    // animation triggers go here
  ]
})

export class AppComponent implements OnInit {
  titleCards: ITitleCards[] = [];
  categoryCards: any = ['All'];
  selectCategory = 0;
  search: string = '';
  constructor(private titleCardsService: TitleCardsService) { }

  updateTitleCards(): void {
    this.titleCardsService
      .getTitleCards()
      .subscribe((titleCards) => {
        this.titleCards = titleCards
      });
  }

  ngOnInit(): void {
    this.updateTitleCards()
    this.categoryCards = dataCardToCategory(this.titleCards);
  }

  onclickTab(e?): void {
    this.selectCategory = e?.index;
    const category = this.categoryCards[this.selectCategory]
    if (category === 'All') {
      this.titleCardsService.restoreTitleCards();
      this.updateTitleCards()
    } else {
      this.titleCardsService.filterTitleCardsByCertifier(category);
      this.updateTitleCards()
    }
  }

  onChangeSearch(e?): void {
    this.search = e.target.value;
    this.titleCardsService.searchTitleCards(this.search)
    this.updateTitleCards()
  }

  onClearFilter(): void {
    this.selectCategory = 0
    this.search = ''
    this.titleCardsService.filterTitleCardsByCertifier('');
    this.titleCardsService.searchTitleCards('');
    this.updateTitleCards();
  }
}


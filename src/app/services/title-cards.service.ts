import { TitleCards } from './../title-cards';
import { Injectable } from '@angular/core';
import ITitleCards from '../title-cards.interface';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TitleCardsService {
  private titleCards: ITitleCards[] = []
  private categoryTitleCard = '';
  private searchTitleCard = '';
  constructor() {
    this.titleCards = TitleCards;
  }
  private proceedData(): void {
    let newTitleCards: ITitleCards[] = TitleCards.filter((item) => {
      const idx = item?.certifier?.short_name
        .toLocaleLowerCase()
        .indexOf(this.categoryTitleCard.toLowerCase());
      return idx >= 0;
    })
    console.log('newTitleCards', newTitleCards)
    newTitleCards = newTitleCards
      .filter((item) => {
        const idx = item?.short_name.toLocaleLowerCase().indexOf(this.searchTitleCard) >= 0
        console.log('item?.short_name.toLocaleLowerCase()', item?.short_name.toLocaleLowerCase())
        console.log("idx", idx)
        return idx;
      })
    this.titleCards = newTitleCards;
  }
  filterTitleCardsByCertifier(short_name = ''): void {
    this.categoryTitleCard = short_name;
    this.proceedData()
  }
  searchTitleCards(search = ''): void {
    this.searchTitleCard = search.toLocaleLowerCase();
    this.proceedData()
  }
  setTitleCards(data: ITitleCards[]): void {
    this.titleCards = data;
  } 
  getTitleCards(): Observable<ITitleCards[]> {
    const titleCards = of(this.titleCards);
    return titleCards;
  }
  restoreTitleCards(): void {
    this.titleCards = TitleCards;
  }
}

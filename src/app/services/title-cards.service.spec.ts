import { TestBed } from '@angular/core/testing';

import { TitleCardsService } from './title-cards.service';

describe('TitleCardsService', () => {
  let service: TitleCardsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TitleCardsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleCardItemComponent } from './title-card-item.component';

describe('TitleCardItemComponent', () => {
  let component: TitleCardItemComponent;
  let fixture: ComponentFixture<TitleCardItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitleCardItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleCardItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsListTabComponent } from './news-list-tab.component';

describe('NewsListTabComponent', () => {
  let component: NewsListTabComponent;
  let fixture: ComponentFixture<NewsListTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsListTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsListTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

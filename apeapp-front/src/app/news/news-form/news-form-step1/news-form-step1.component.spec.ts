import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsFormStep1Component } from './news-form-step1.component';

describe('NewsFormStep1Component', () => {
  let component: NewsFormStep1Component;
  let fixture: ComponentFixture<NewsFormStep1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsFormStep1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsFormStep1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

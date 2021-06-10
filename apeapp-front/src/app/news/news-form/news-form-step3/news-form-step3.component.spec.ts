import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsFormStep3Component } from './news-form-step3.component';

describe('NewsFormStep3Component', () => {
  let component: NewsFormStep3Component;
  let fixture: ComponentFixture<NewsFormStep3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsFormStep3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsFormStep3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsFormStep2Component } from './news-form-step2.component';

describe('NewsFormStep2Component', () => {
  let component: NewsFormStep2Component;
  let fixture: ComponentFixture<NewsFormStep2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsFormStep2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsFormStep2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

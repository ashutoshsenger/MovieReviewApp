import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDetailPage1Component } from './movie-detail-page1.component';

describe('MovieDetailPage1Component', () => {
  let component: MovieDetailPage1Component;
  let fixture: ComponentFixture<MovieDetailPage1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieDetailPage1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieDetailPage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

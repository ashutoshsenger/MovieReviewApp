import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDetailPage2Component } from './movie-detail-page2.component';

describe('MovieDetailPage2Component', () => {
  let component: MovieDetailPage2Component;
  let fixture: ComponentFixture<MovieDetailPage2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieDetailPage2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieDetailPage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

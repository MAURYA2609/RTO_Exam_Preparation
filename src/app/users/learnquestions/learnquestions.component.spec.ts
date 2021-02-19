import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnquestionsComponent } from './learnquestions.component';

describe('LearnquestionsComponent', () => {
  let component: LearnquestionsComponent;
  let fixture: ComponentFixture<LearnquestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearnquestionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnquestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

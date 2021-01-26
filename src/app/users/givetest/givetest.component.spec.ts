import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GivetestComponent } from './givetest.component';

describe('GivetestComponent', () => {
  let component: GivetestComponent;
  let fixture: ComponentFixture<GivetestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GivetestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GivetestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

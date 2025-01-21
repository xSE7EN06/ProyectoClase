import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DatatimePage } from './datatime.page';

describe('DatatimePage', () => {
  let component: DatatimePage;
  let fixture: ComponentFixture<DatatimePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DatatimePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

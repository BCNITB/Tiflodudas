import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConsultPage } from './consult.page';

describe('ConsultPage', () => {
  let component: ConsultPage;
  let fixture: ComponentFixture<ConsultPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ConsultPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

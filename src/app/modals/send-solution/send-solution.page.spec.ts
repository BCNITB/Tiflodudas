import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SendSolutionPage } from './send-solution.page';

describe('SendSolutionPage', () => {
  let component: SendSolutionPage;
  let fixture: ComponentFixture<SendSolutionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SendSolutionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

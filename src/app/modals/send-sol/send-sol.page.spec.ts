import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SendSolPage } from './send-sol.page';

describe('SendSolPage', () => {
  let component: SendSolPage;
  let fixture: ComponentFixture<SendSolPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SendSolPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SendSolionicPage } from './send-solionic.page';

describe('SendSolionicPage', () => {
  let component: SendSolionicPage;
  let fixture: ComponentFixture<SendSolionicPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SendSolionicPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

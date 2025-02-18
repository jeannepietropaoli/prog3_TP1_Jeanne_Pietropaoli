import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationSuppressionListeComponent } from './confirmation-suppression-liste.component';

describe('ConfirmationSuppressionListeComponent', () => {
  let component: ConfirmationSuppressionListeComponent;
  let fixture: ComponentFixture<ConfirmationSuppressionListeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfirmationSuppressionListeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmationSuppressionListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

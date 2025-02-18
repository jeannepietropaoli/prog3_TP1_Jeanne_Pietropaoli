import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireListeComponent } from './formulaire-liste.component';

describe('FormulaireListeComponent', () => {
  let component: FormulaireListeComponent;
  let fixture: ComponentFixture<FormulaireListeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormulaireListeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormulaireListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

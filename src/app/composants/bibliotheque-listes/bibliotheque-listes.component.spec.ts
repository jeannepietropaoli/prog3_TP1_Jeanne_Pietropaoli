import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BibliothequeListesComponent } from './bibliotheque-listes.component';

describe('BibliothequeListesComponent', () => {
  let component: BibliothequeListesComponent;
  let fixture: ComponentFixture<BibliothequeListesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BibliothequeListesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BibliothequeListesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

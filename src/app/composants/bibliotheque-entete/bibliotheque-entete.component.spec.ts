import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BibliothequeEnteteComponent } from './bibliotheque-entete.component';

describe('BibliothequeEnteteComponent', () => {
  let component: BibliothequeEnteteComponent;
  let fixture: ComponentFixture<BibliothequeEnteteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BibliothequeEnteteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BibliothequeEnteteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChansonsPopulairesComponent } from './chansons-populaires.component';

describe('ChansonsPopulairesComponent', () => {
  let component: ChansonsPopulairesComponent;
  let fixture: ComponentFixture<ChansonsPopulairesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChansonsPopulairesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChansonsPopulairesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

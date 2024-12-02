import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeEtChansonsCompletesComponent } from './liste-et-chansons-completes.component';

describe('ListeEtChansonsCompletesComponent', () => {
  let component: ListeEtChansonsCompletesComponent;
  let fixture: ComponentFixture<ListeEtChansonsCompletesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListeEtChansonsCompletesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeEtChansonsCompletesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

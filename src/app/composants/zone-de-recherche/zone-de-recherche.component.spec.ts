import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoneDeRechercheComponent } from './zone-de-recherche.component';

describe('ZoneDeRechercheComponent', () => {
  let component: ZoneDeRechercheComponent;
  let fixture: ComponentFixture<ZoneDeRechercheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZoneDeRechercheComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZoneDeRechercheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

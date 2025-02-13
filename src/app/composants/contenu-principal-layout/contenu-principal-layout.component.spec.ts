import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenuPrincipalLayoutComponent } from './contenu-principal-layout.component';

describe('ContenuPrincipalLayoutComponent', () => {
  let component: ContenuPrincipalLayoutComponent;
  let fixture: ComponentFixture<ContenuPrincipalLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContenuPrincipalLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContenuPrincipalLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableauListesBtnActionsComponent } from './tableau-listes-btn-actions.component';

describe('TableauListesBtnActionsComponent', () => {
  let component: TableauListesBtnActionsComponent;
  let fixture: ComponentFixture<TableauListesBtnActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableauListesBtnActionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableauListesBtnActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

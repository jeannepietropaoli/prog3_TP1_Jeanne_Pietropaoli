import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChansonCompleteComponent } from './chanson-complete.component';

describe('ChansonCompleteComponent', () => {
  let component: ChansonCompleteComponent;
  let fixture: ComponentFixture<ChansonCompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChansonCompleteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChansonCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

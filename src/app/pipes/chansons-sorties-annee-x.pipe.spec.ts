import { TestBed } from '@angular/core/testing';
import { ChansonsSortiesAnneeXPipe } from './chansons-sorties-annee-x.pipe';
import { ExtraireAnneeStringDatePipe } from './extraire-annee-string-date.pipe';

describe('ChansonsSortiesAnneeXPipe', () => {
  let pipe: ChansonsSortiesAnneeXPipe;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChansonsSortiesAnneeXPipe, ExtraireAnneeStringDatePipe]
    });
    pipe = TestBed.inject(ChansonsSortiesAnneeXPipe);
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });
});
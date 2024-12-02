import { Routes } from '@angular/router';
import { ListeCompletComponent } from './composants/liste-complet/liste-complet.component';
import { ListeEtChansonsCompletesComponent } from './composants/liste-et-chansons-completes/liste-et-chansons-completes.component';
import { ChansonCompleteComponent } from './composants/chanson-complete/chanson-complete.component';

export const routes: Routes = [
    { path: '', redirectTo: 'liste-de-lecture-et-chanson/0', pathMatch: 'full' },
    // route par défaut, permet d'avoir la premiere liste de lecture affichée avant même d'avoir sélectionné une liste. Sera à remplacer par redirectTo: 'liste-de-lecture/0' dans la vraie version afin de n'afficher que la liste de lecture
    { path: 'liste-de-lecture-et-chanson/:listeId', component: ListeEtChansonsCompletesComponent },
    // la route ci-dessus est créee pour la correction afin d'afficher le composant ListeEtChansonsCompletes (liste complète + 1 chanson complète)
    { path: 'liste-de-lecture/:listeId', component: ListeCompletComponent },
    // route réelle : liste de lecture complète seule
    { path: 'details-chanson/:chansonId', component: ChansonCompleteComponent }
    // route réelle : chanson complète seule
];


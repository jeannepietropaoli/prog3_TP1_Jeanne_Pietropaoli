import { Routes } from '@angular/router';
import { ListeCompletComponent } from './composants/liste-complet/liste-complet.component';
import { ListeEtChansonsCompletesComponent } from './composants/liste-et-chansons-completes/liste-et-chansons-completes.component';
import { ChansonCompleteComponent } from './composants/chanson-complete/chanson-complete.component';
import { AProposComponent } from './composants/a-propos/a-propos.component';
import { ChansonsPopulairesComponent } from './composants/chansons-populaires/chansons-populaires.component';
import { ThemesComponent } from './composants/themes/themes.component';
import { AdminComponent } from './composants/admin/admin.component';


export const routes: Routes = [
    { path: '', redirectTo: 'liste-de-lecture/0', pathMatch: 'full' },
    // route par défaut, permet d'avoir la premiere liste de lecture affichée avant même d'avoir sélectionné une liste
    { path: 'liste-de-lecture-et-chanson/:listeId', component: ListeEtChansonsCompletesComponent },
    // la route ci-dessus est créee afin d'afficher le composant ListeEtChansonsCompletes (liste complète + 1 chanson complète)
    { path: 'liste-de-lecture/:listeId', component: ListeCompletComponent },
    // liste de lecture complète seule
    { path: 'details-chanson/:chansonId', component: ChansonCompleteComponent },
    // chanson complète seule,
    { path: 'a-propos', component: AProposComponent },
    { path: 'chansons-populaires', component: ChansonsPopulairesComponent },
    { path: 'themes', component: ThemesComponent },
    { path: 'admin', component: AdminComponent },
    { path: '**', redirectTo: 'liste-de-lecture/0' }
];


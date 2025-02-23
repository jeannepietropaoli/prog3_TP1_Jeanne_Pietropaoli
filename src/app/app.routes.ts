import { Routes } from '@angular/router';
import { ListeCompletComponent } from './composants/liste-complet/liste-complet.component';
import { ChansonCompleteComponent } from './composants/chanson-complete/chanson-complete.component';
import { AProposComponent } from './composants/a-propos/a-propos.component';
import { ChansonsPopulairesComponent } from './composants/chansons-populaires/chansons-populaires.component';
import { ThemesComponent } from './composants/themes/themes.component';
import { AdminComponent } from './composants/admin/admin.component';

export const routes: Routes = [
    { path: '', redirectTo: 'liste-de-lecture/0', pathMatch: 'full' },
    // route par défaut, permet d'avoir la première liste de lecture affichée avant même d'avoir sélectionné une liste
    { path: 'liste-de-lecture/:listeId', component: ListeCompletComponent },
    // liste de lecture complète seule
    { path: 'details-chanson/:chansonId', component: ChansonCompleteComponent },
    // chanson complète seule,
    { path: 'a-propos', component: AProposComponent },
    { path: 'chansons-populaires', component: ChansonsPopulairesComponent },
    { path: 'themes', redirectTo: 'themes/sorties-2025', pathMatch: 'full' },
     // route par défaut, permet d'avoir le premier theme affiché avant même d'en avoir sélectionné un
    { path: 'themes/:nomTheme', component: ThemesComponent },
    { path: 'admin', component: AdminComponent },
    { path: '**', redirectTo: 'liste-de-lecture/0' }
];


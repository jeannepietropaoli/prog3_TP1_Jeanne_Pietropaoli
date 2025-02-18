import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListeReponseAPI } from '../interfaces/liste-reponse-api';
import { ListesReponseAPI } from '../interfaces/listes-reponse-api';
import { Liste } from '../interfaces/liste';
import { ActionsReponseApi } from '../interfaces/actions-reponse-api';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ListeService {
  API_URL = 'https://apimusique.jeannepietropaoli.dev/api/listes/'

  constructor(private http: HttpClient) { }

    getListesPubliques() : Observable<ListesReponseAPI> {
      return this.http.get<ListesReponseAPI>(this.API_URL);
    }

    getListesPubliquesEtPrivees() : Observable<ListesReponseAPI> {
      return this.http.get<ListesReponseAPI>(`${this.API_URL}?visibilite=all`);
    }

    getListe(listeId: number) : Observable<ListeReponseAPI> {
      return this.http.get<ListeReponseAPI>(`${this.API_URL}?id=${listeId}`);
    }

    ajouterListe(nouvelleListe: Liste) : Observable<ActionsReponseApi> {
      return this.http.post<ActionsReponseApi>(this.API_URL, nouvelleListe, httpOptions);
    }

    editerListe(listeAModifier: Liste) : Observable<ActionsReponseApi> {
      return this.http.put<ActionsReponseApi>(`${this.API_URL}?id=${listeAModifier.id}`, listeAModifier, httpOptions);
    }

    supprimerListe(listeId: number | undefined) : Observable<ActionsReponseApi> {
      return this.http.delete<ActionsReponseApi>(`${this.API_URL}?id=${listeId}`);
    }
}

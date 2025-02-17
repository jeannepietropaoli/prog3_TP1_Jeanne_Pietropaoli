import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListeReponseAPI } from '../interfaces/liste-reponse-api';
import { ListesReponseAPI } from '../interfaces/listes-reponse-api';

@Injectable({
  providedIn: 'root'
})
export class ListeService {
  API_URL = 'https://apimusique.jeannepietropaoli.dev/api/listes/'

  constructor(private http: HttpClient) { }

    getListes() : Observable<ListesReponseAPI> {
      return this.http.get<ListesReponseAPI>(this.API_URL);
    }

    getListe(listeId: number) : Observable<ListeReponseAPI> {
      return this.http.get<ListeReponseAPI>(`${this.API_URL}?id=${listeId}`)
    }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ChansonReponseAPI } from '../interfaces/chanson-reponse-api';
import { ChansonsReponseAPI } from '../interfaces/chansons-reponse-api';

@Injectable({
  providedIn: 'root'
})
export class ChansonService {
   API_URL = 'https://apimusique.jeannepietropaoli.dev/api/chansons/'

  constructor(private http: HttpClient) { }

  getChansons() : Observable<ChansonsReponseAPI> {
    return this.http.get<ChansonsReponseAPI>(this.API_URL);
  }

  getChanson(chansonId: number) : Observable<ChansonReponseAPI> {
    return this.http.get<ChansonReponseAPI>(`${this.API_URL}?id=${chansonId}`);
  }
}

import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Actor } from '../model/actor';

@Injectable({
  providedIn: 'root',
})
export class ActorService {
  private apiServerUrl = environment.apiBaseURL;

  constructor(private http: HttpClient) {}

  public getActors(): Observable<Actor[]> {
    return this.http.get<Actor[]>(`${this.apiServerUrl}/actor/all`);
  }

  public addActor(actor: Actor): Observable<Actor> {
    return this.http.post<Actor>(`${this.apiServerUrl}/actor/add`, actor);
  }

  public changeActor(actor: Actor): Observable<Actor> {
    return this.http.put<Actor>(`${this.apiServerUrl}/actor/update`, actor);
  }

  public deleteActor(id: number): Observable<Actor> {
    return this.http.delete<Actor>(`${this.apiServerUrl}/actor/delete/${id}`);
  }

  public findActor(id: number): Observable<Actor> {
    return this.http.get<Actor>(`${this.apiServerUrl}/actor/find/${id}`);
  }
}

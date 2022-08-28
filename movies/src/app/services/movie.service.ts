import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  //316a1fff

  private API_URL: string = 'http://www.omdbapi.com/?apikey=316a1fff';


  constructor(private http: HttpClient) { }

  getMovies(searchTerm: string): Observable<any> {
    return this.http.get(`${this.API_URL}&s=${searchTerm}`);
  }
}

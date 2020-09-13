import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieDataService {
  //movieDataUrl = "https://api.themoviedb.org/3/search/company?api_key=68e0ff8bbe41add85a86dbdd6bfaa51a";
  movieDataUrl = "https://api.themoviedb.org/3/search/movie?api_key=68e0ff8bbe41add85a86dbdd6bfaa51a&language=en-US&page=1&include_adult=false&query=''";
  movieDataUrl2 = "https://api.themoviedb.org/3/search/movie?api_key=68e0ff8bbe41add85a86dbdd6bfaa51a&language=en-US&page=1&include_adult=false&query=";
  constructor(private httpClient: HttpClient) { }

  getMovieData(query) {
    let finalUrl;
    if(query == ''){
      finalUrl = this.movieDataUrl;
    }else{
      finalUrl = this.movieDataUrl2 + query
    }

    return this.httpClient.get<any>(finalUrl);
}
}

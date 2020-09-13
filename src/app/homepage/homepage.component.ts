import { Component, OnInit } from '@angular/core';
import { MovieDataService } from '../movie-data.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  movieQuery = '';
  moviesData = [];
  bookmarkData = [];
  constructor(private movieService: MovieDataService) { }

  ngOnInit() {
    this.bookmarkData = JSON.parse(localStorage.getItem("SavedMovies"));
    this.getMovieData('');
  }

  getMovieData(query){
    this.movieService.getMovieData(query)
    .subscribe(data => {
      this.moviesData = data.results;
      console.log(data,'movie data coming')
    })
  }

  bookmarkMovie(movie){
    this.bookmarkData.push(movie);
    localStorage.setItem("SavedMovies", JSON.stringify(this.bookmarkData));
  }

}

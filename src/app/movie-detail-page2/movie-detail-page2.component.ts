import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-detail-page2',
  templateUrl: './movie-detail-page2.component.html',
  styleUrls: ['./movie-detail-page2.component.css']
})
export class MovieDetailPage2Component implements OnInit {
  moviesData = [];
  constructor() { }

  ngOnInit() {
    this.getMovieData();
  }

  getMovieData(){
    this.moviesData = JSON.parse(localStorage.getItem("SavedMovies"));
    
  }

}

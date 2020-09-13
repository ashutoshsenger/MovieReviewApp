import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-detail-page1',
  templateUrl: './movie-detail-page1.component.html',
  styleUrls: ['./movie-detail-page1.component.css']
})
export class MovieDetailPage1Component implements OnInit {
  moviesData = [];
  constructor() { }

  ngOnInit() {
    this.getMovieData();
  }

  getMovieData(){
    this.moviesData = JSON.parse(localStorage.getItem("SavedMovies"));
    console.log(this.moviesData,'movie data coming localstorage')
    
  }

}

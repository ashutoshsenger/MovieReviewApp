import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { MovieDetailPage1Component } from './movie-detail-page1/movie-detail-page1.component';
import { MovieDetailPage2Component } from './movie-detail-page2/movie-detail-page2.component';
import { UpcomingMoviesComponent } from './upcoming-movies/upcoming-movies.component';


const routes: Routes = [
  { path: 'homepage', component: HomepageComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'movie-details-1', component: MovieDetailPage1Component },
  { path: 'movie-details-2', component: MovieDetailPage2Component },
  { path: 'upcoming-movies', component: UpcomingMoviesComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

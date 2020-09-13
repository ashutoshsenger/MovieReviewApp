import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { MatCardModule, MatButtonModule, MatIconModule, MatInputModule } from '@angular/material';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { MovieDetailPage1Component } from './movie-detail-page1/movie-detail-page1.component';
import { MovieDetailPage2Component } from './movie-detail-page2/movie-detail-page2.component';
import { LoginComponent } from './login/login.component';
import { UpcomingMoviesComponent } from './upcoming-movies/upcoming-movies.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    MovieDetailPage1Component,
    MovieDetailPage2Component,
    LoginComponent,
    UpcomingMoviesComponent
  ],
  imports: [
    BrowserModule,
    MatInputModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    MatFormFieldModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

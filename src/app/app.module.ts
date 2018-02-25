import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { MoviesService } from "./movies.service";
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieListComponent } from './movie-list/movie-list.component';


@NgModule({
  declarations: [
    AppComponent,
    MovieDetailsComponent,
    MovieListComponent
    ],
  imports: [
    BrowserModule, HttpModule, 
    RouterModule.forRoot(
    	[
    	{path: "movies/movie-details/:id", component: MovieDetailsComponent },
    	{path: "movies", component: MovieListComponent, pathMatch:"full"},
    	{path: "", redirectTo: "movies", pathMatch: "full" },
    	//{path: "**", component: PageNotFoundComponent}
    	], {useHash:false})
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }

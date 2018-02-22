import { Component } from '@angular/core';
import { MovieModel } from "./movie-model";
import { MoviesService} from "./movies.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 movieModel:MovieModel[];
 constructor(private movieDataService: MoviesService){};
 ngOnInit(){

 	this.movieModel = this.movieDataService.getMovieList();
 }
}

import { Component, OnInit } from '@angular/core';
import { MovieModel } from "../movie-model";
import { MoviesService} from "../movies.service";

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

	 movieModel:MovieModel[];

 constructor(private movieDataService: MoviesService){};

 ngOnInit(){
 	 

 	//this.movieModel = 


 	return this.movieDataService.getMovieList()
 		.subscribe(MovieModel => this.movieModel = MovieModel);
 }

  // constructor() { }

  // ngOnInit() {
  // }

}

import { Component, OnInit } from '@angular/core';
import { MovieModel } from "../movie-model";
import { MoviesService} from "../movies.service";

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

//Declared an array of movieModel objects
	 movieModel:MovieModel[]; //--TEST THAT YOU ARE GETTING A MOVIE MODEL DATA

//Declared an error message property that accepts any
	  myErrorMessage:any; //-- TEST FOR ERROR MESSAGE 
//constructor is decalaring my dependency movieDataService object 
	 constructor(private movieDataService: MoviesService){};

	 ngOnInit(){
//on ngInit i subscribe to my movieDataservice object and i'm expecting 
// a returned list of service data matching my movieModel object
// else we get error  plwhich is then stored in my error message property
	 	return this.movieDataService.getMovieList() 
	 		.subscribe(MovieModel => this.movieModel = MovieModel,
	 			 error => this.myErrorMessage = error
	 			);
	 }


}

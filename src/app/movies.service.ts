import { Injectable } from '@angular/core';
import { MoviesList } from "./movie-mock.service";

@Injectable()
export class MoviesService {

  getMovieList(){
  	return MoviesList;
  }

}

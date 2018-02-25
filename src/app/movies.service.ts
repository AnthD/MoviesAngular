import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
//import { MoviesList } from "./movie-mock.service";
import { MovieModel } from './movie-model';
import 'rxjs/add/operator/map';


@Injectable()
export class MoviesService {
	private _url:string = "assets/movies.json";
constructor(private _http:Http){}

  getMovieList(){
  	//return MoviesList;
  	return this._http.get(this._url)
  				.map(response => <MovieModel[]> response.json().data);
  }

  getMovie(id:number){
  	return this._http.get(this._url)
  				.map(response => <MovieModel> response.json().data[id]);
  }
}

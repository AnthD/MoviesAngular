import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieModel } from '../movie-model';
import { MoviesService } from '../movies.service';

@Component({
  //selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

	movieModel:MovieModel;

  constructor(private movieDataService :MoviesService, private route:ActivatedRoute) { }

  ngOnInit() {


 	this.route.paramMap.subscribe(params => {
 		console.log(params);
 		let id = +params.get("id");

 		this.movieDataService.getMovie(id)
  		.subscribe(MovieModel => {this.movieModel = MovieModel;
  			console.log(this.movieModel);

  		});

 	});

 	

  	
  }



}

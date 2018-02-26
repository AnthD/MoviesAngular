import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import {BrowserModule} from '@angular/platform-browser';
import {Observable }from 'rxjs';
import { MovieListComponent } from './movie-list.component';
import { MovieModel } from "../movie-model";
import { MoviesService} from "../movies.service";



describe('MovieListComponent', () => {
  let component: MovieListComponent;
  let fixture: ComponentFixture<MovieListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      declarations: [ MovieListComponent, MoviesService],
      providers: [MoviesService]
      
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('should create', () => {
 let movieService = TestBed.get(MoviesService);

component.movieModel= movieService;
    expect(component).toBeTruthy();
  }); 
  it('should load Movie list from the server ', () => {
 let movieService = TestBed.get(MoviesService);
    spyOn(movieService, 'getMovieList').and.returnValue(Observable.from([1,2,3]))

    expect(component).toBeTruthy();
  });

 it('should render movie title',()=>{
 let de = fixture.debugElement.query(By.css('.movieTitle'));

 let el: HTMLElement = de.nativeElement;

 //expect(el.innerText).toContain();

  });

});

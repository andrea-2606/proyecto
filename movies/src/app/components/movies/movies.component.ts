import { MovieService } from './../../services/movie.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies: any[] = [];

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
  }

  getMovies(searchTerm: string) {
    this.movieService.getMovies(searchTerm).subscribe(data => {
      console.log(data);
      if (data.Responsive === 'False') {
        this.movies = [];
      } else {
        this.movies = data.Search;
      }
    })
  }

}

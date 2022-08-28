import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cardmovies',
  templateUrl: './cardmovies.component.html',
  styleUrls: ['./cardmovies.component.css']
})
export class CardmoviesComponent implements OnInit {

  @Input('movie') movie: any;

  constructor() { }

  ngOnInit(): void {
  }


  getImage() {
   return this.movie.Poster !== 'N/A' ? this.movie.Poster : 'http://via.placeholder.com/600'
  }
}

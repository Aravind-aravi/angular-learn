import { Component, OnInit } from '@angular/core';
import { Movie } from "../../model/movie";
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  movie:Movie={
    title:"The MASTER",
    stars:[
      {id:"1",firstName:"Vijay",lastName:"joseph"},{id:"2",firstName:"Vijay",lastName:"sethupathy"}
    ],
    releaseDate:new Date(2020,10,7),
    durationInMinutes:178,
    genre:{id:"ara",name:"Action"},
    poster:'assets/images/master.jpg',
    boxOffice:221232121
  }


  constructor() { }

  ngOnInit(): void {
  }

}

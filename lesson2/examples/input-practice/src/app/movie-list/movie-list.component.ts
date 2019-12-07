import { Component, OnInit } from '@angular/core';
import { listenerCount } from 'cluster';

@Component({
   selector: 'movie-list',
   templateUrl: './movie-list.component.html',
   styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
   whoops = null;
   movies = ['Toy Story', 'The Shining', 'Sleepless in Seattle', 'The Martian'];

   constructor() { }

   ngOnInit() {
   }

   addMovie (newTitle: string){
      let errorMsg = "";
       if (this.movies.includes(newTitle)){
        errorMsg = `${newTitle} is already on the list, did you mean a sequel?`;
      } else if (newTitle === "" || newTitle === " "){
         errorMsg= "you're forgetting something!";
      } else if (!this.movies.includes(newTitle)) {
         this.movies.push(newTitle);
      }
      return errorMsg;
   }
}
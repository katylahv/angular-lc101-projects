import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'buttons',
   templateUrl: './buttons.component.html',
   styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {
   buttonHeading: string = "Buttons"
   active: boolean = false;
   buttonState: boolean[] = [true,true,true];
   constructor() { }

   ngOnInit() { }

   reactivate(){
      for (let i = 0; i <this.buttonState.length; i++){
         this.buttonState[i] = true;
      }
      return this.buttonState;
   }
}

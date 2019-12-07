import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercises: Angular Lesson 3';

  color = 'green';
  height = 0;
  width = 0;
  message = 'Space shuttle ready for takeoff!';
  takeOffEnabled = true;
  moveEnabledRight = true;
  moveEnabledLeft = true;
  moveEnabledUp = true;
  moveEnabledDown = true;

  handleTakeOff(){
    let result = window.confirm("Are you sure the shuttle is ready for take-off?");
    if (result){
     this.color = 'blue';
     this.height = 10000;
     this.width = 0;
     this.message = "Shuttle in flight.";
     this.takeOffEnabled = false;
      }
    } //end takeoff
  handleLand(rocketImage){
    let result = window.confirm("The shuttle is landing. Landing gear engaged");
    if (result){
     this.color = 'green';
     this.height = 0;
     this.width = 0;
     this.message = "The shuttle has landed.";
     rocketImage.style.bottom = '0px';
     this.takeOffEnabled = true;
      }
  } // end land
  handleAbort(rocketImage){
  let result = window.confirm("Are you sure you want to Abort Mission?");
    if (result){
     this.color = 'red';
     this.height = 0;
     this.width = 0;
     this.message = "Mission aborted.";
     rocketImage.style.bottom = '0px';
     this.takeOffEnabled = true;
      }
  }//end abort
  moveRocket(rocketImage, direction){
    if (direction === "right"){
      let movement = parseInt(rocketImage.style.left) + 10 + 'px';
      rocketImage.style.left = movement;
      this.width = this.width + 10000;
      this.moveEnabledRight = true;
    } // end move right
    if (direction === "left"){
        let movement = parseInt(rocketImage.style.left) - 10 + 'px';
        rocketImage.style.left = movement;
        this.width = this.width - 10000;
        this.moveEnabledLeft = true;
      } // end move left
        else if (direction === "up"){
        let movement = parseInt(rocketImage.style.bottom) + 10 + 'px';
        rocketImage.style.bottom = movement;
        this.height = this.height + 10000;
        this.moveEnabledUp = true;
        } // end up
        else if (direction === "down"){
        let movement = parseInt(rocketImage.style.bottom) - 10 + 'px';
        rocketImage.style.bottom = movement;
        this.height = this.height - 10000;
        this.moveEnabledDown = true;
        }
        this.borderWarn(this.width, this.height);
        this.borderStopUp(this.height);
        this.borderStopRight(this.width);
  } // end moveRocket
  borderWarn(width, height) {
    if (width > 360000 || width < 0 || height < 0 || height > 340000) {
      this.color = 'pink';
    } else {
      this.color = 'blue';
    }
  }
  
  borderStopUp(height){
     if (height < 0){
      this.moveEnabledDown = false;
    } else if (height > 340000){
      this.moveEnabledUp = false;
    } else {
      this.moveEnabledDown = true;
      this.moveEnabledUp = true;
    }
  }
  borderStopRight(width){
    if (width > 360000){
      this.moveEnabledRight = false;
    } else if (width < 0){
      this.moveEnabledLeft = false;
    } else {
      this.moveEnabledRight = true;
      this.moveEnabledLeft = true;
    }
  }
}

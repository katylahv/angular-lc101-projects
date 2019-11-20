import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Fave PIX';
  image1 = 'https://www.launchcode.org/assets/icons/trophy-95e8cbe9bfda44123422302951deb1c92a237d39052669b8fbfafec00cb4f608.png';
  image2 = 'https://diyuehb.com/images/daisy-outline-clip-art-3.png';
  image3 = 'https://www.purina.com/sites/g/files/auxxlc196/files/styles/kraken_generic_max_width_240/public/TOY_Chihuahua-%28Smooth-Coat%29.jpg?itok=FnZXAZI6';

  constructor() { }

  ngOnInit() {
  }

}
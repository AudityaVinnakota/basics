import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'auditya vinnakota';
  imageURL = "https://picsum.photos/id/237/500/500"
  images = [
    "https://picsum.photos/id/237/500/500",
    "https://picsum.photos/id/237/500/500",
    "https://picsum.photos/id/237/500/500"
  ];
  name = 'image';
  currentDate = new Date();
  cost = 2334.22222;
  temperature = 90;
  dosa = {
    toppings: ['onions', 'alu masala'],
    size: "large"
  }
  blueClass = false;
  buttonFontSize = 16;
  getName() { return this.name; }
  
  changeImage(event: Event) {
    this.imageURL = (event.target as HTMLInputElement).value;
  }

  logImg(event: string) {
    console.log(event);
    console.log(162, event)
  }
}

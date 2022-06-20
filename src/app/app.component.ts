import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // properties must be public to be used in the component
  // as this file is associated to component.html, we can use the properties inside this class
  // this file is also known as controller
  // string interpolation should be used for putting values within some content like an h1 tag
  // property binding should be used for html attributes
  title = 'angular-test';
  img = 'https://picsum.photos/200/300';
  person = {
    name: 'John',
    age: 20,
    img: 'https://source.unsplash.com/random/400x400'
  }
}

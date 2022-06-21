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
  person = {
    name: 'Angel',
    jobTitle: 'Software Engineer',
    age: 20,
    mainHobbie: 'Coding'
  }

  counter = 0
  btnDisabled = true;

  // event binding work the same way as properties but specifically for events and should be used with ()
  toggleButton() {
    this.btnDisabled = !this.btnDisabled;
  }

  increaseCounter() {
    this.counter++;
  }

  onScroll(event: Event) {
    const element = event.target as HTMLElement
    console.log(element.scrollTop)
  }

  text = ''

  updateTextContent(event: Event) {
    const element = event.target as HTMLInputElement
    this.text = element.value
  }
}

import { Component } from '@angular/core';
import { ProductInterface }  from './product.model'

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

  answer = null
  counter = 0
  btnDisabled = true;

  emojis: string[] = [ '😂' , '🐦', '🐳','🌮', '💚']

  products: ProductInterface[] = [
    {
      name: 'EL mejor juguete',
      price: 565,
      image: './assets/images/toy.jpg',
      category: 'all',
    },
    {
      name: 'Bicicleta casi nueva',
      price: 356,
      image: './assets/images/bike.jpg'
    },
    {
      name: 'Colleción de albumnes',
      price: 34,
      image: './assets/images/album.jpg'
    },
    {
      name: 'Mis libros',
      price: 23,
      image: './assets/images/books.jpg'
    },
    {
      name: 'Casa para perro',
      price: 34,
      image: './assets/images/house.jpg'
    },
    {
      name: 'Gafas',
      price: 3434,
      image: './assets/images/glasses.jpg'
    }
  ]

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

  newEmoji = ''
  emojiIndex = 0
  indexError: boolean = false

  addEmoji() {
    this.emojis.push(this.newEmoji)
    this.newEmoji = ''
  }

  deleteElement(elementIndex: number) {
    if (elementIndex + 1 <= this.emojis.length) {
      this.emojis.splice(elementIndex, 1)
      this.indexError = false
    } else {
      this.indexError = true
    }
  }
}

import { HTMLConverter } from '../html-converter.js';
import { DOMFactory } from '../dom-factory.js';

//wrapper

// "author"
// "imageLink"
// "title"
// "price"
// "description"

export class BookCard extends DOMFactory {
  constructor(initializer) {
    super({
      tagName: 'div',
      classNmae: 'book-card',
      nodeContent: 'book card works',
    });

    const bookCardFragment = new DOMFactory({
      tagName: 'div',
      className: 'book-card',
    });

    const figureFragment = new DOMFactory({
      tagName: 'div',
      className: 'book-card_figure',
    });

    // data init
    this.bookCardInit(initializer);
  }

  bookCardInit(recivedInitializer) {
    this.author = recivedInitializer.author;
    this.imageLink = recivedInitializer.imageLink;
    this.title = recivedInitializer.title;
    this.price = recivedInitializer.price;
    this.description = recivedInitializer.description;
  }
}

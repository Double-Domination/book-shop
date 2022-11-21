import { HTMLConverter } from './dom-factory.js';

const rootElement = document.getElementById('root');

const particle = HTMLConverter('<p>first</p> <p>second</p> ');

rootElement.append(particle);
// const fragment = document.createDocumentFragment();

// const parsedTemplate = document.createElement('template');

// parsedTemplate.innerHTML =
//   '<div> innner template content </div> <div> innner template content2 </div> ';

// fragment.append(parsedTemplate.content);

// rootElement.append(fragment);

// console.log(rootElement, 'is existed');

//find element
// rootElement.innerHTML = '<div> Hello there <div>';

//empty document fragment creation
// const fragmented = document.createDocumentFragment();

//template creation
// const standardTemplate = document.createElement('template');

// standardTemplate.innerHTML = '<p> inserted content </p>';
// fragmented.innerHTML = '<p> inserted content </p>';

// fragmented.append(standardTemplate.content);

// rootElement.append(fragmented);

// console.log(rootElement, '>>>> fragment');

// fragmented.append(standardTemplate);

// fragmented.innerHTML = 'fragment there ';

// console.log(fragmented, '>>> fragmented');

// rootElement.appendChild(fragmented);

// console.log(fragmented.children, '>>> fragmented');


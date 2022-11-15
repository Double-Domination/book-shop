export function HTMLConverter(htmlString) {
  const docFragment = document.createDocumentFragment();

  const parsedTemplate = document.createElement('template');

  parsedTemplate.innerHTML = htmlString;

  docFragment.append(parsedTemplate);

  return docFragment;
}

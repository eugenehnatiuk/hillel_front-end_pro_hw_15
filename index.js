const addTextButton = document.querySelector('.notepad__button');
addTextButton.onclick = addText;

function addText() {
  const outputField = document.querySelector('.notepad__outputField');
  const inputText = document.querySelector('.notepad__inputText').value;

  if (inputText.trim() !== '') {
    // cтворюємо кнопку видалення
    const deleteButton = document.createElement('div');
    deleteButton.classList.add('notepad__delete');
    outputField.appendChild(deleteButton);
    // debugger;
    // створюємо параграф з тексту який ввели
    const noteParagraph = document.createElement('pre');
    noteParagraph.classList.add('notepad__note');
    noteParagraph.innerHTML = inputText;
    outputField.appendChild(noteParagraph);

    // очищуємо поле введення тексту
    document.querySelector('.notepad__inputText').value = '';

    // обробник подій на кнопку видалення
    // deleteButton.addEventListener('click', (event) => {
    //   event.target.nextElementSibling.remove();
    //   event.target.remove();
    // });
  }
}

const outputField = document.querySelector('.notepad__outputField');

outputField.addEventListener('click', (event) => {
  // debugger;
  const deleteButton = event.target.closest('.notepad__delete');

  if (deleteButton) {
    const noteParagraph = deleteButton.nextElementSibling;

    if (noteParagraph) {
      noteParagraph.remove();
    }
    deleteButton.remove();
  }
});


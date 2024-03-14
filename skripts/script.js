const buttonSearch = document.querySelector('.button');
const modal = document.querySelector('.modal');
const modalCloseButton = document.querySelector('.modal-close-button');

if(buttonSearch){
    buttonSearch.addEventListener('click', (e) => {
        e.preventDefault();
        modal.classList.remove('modal-close');
    })

    modalCloseButton.addEventListener('click', (e) => {
        e.preventDefault();
        modal.classList.add('modal-close');
    })
}

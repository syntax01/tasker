document.querySelector('.header-title').textContent = 'Task Manager!';

document.querySelectorAll('input[type=checkbox]').forEach((el) => {
    el.addEventListener('click', (evt) => {
        el.closest('div').querySelector('div').style.textDecoration = el.checked ? 'line-through' : null;
    })
})

const modal_dialog = document.querySelector('.modal-dialog');
const button_add_task = document.querySelector('.button_add_task');
button_add_task.addEventListener('click', (evt) => {
    modal_dialog.showModal();
})
function createChildElement(type, text, className, parentNode) {
    const el = document.createElement(type);
    if(text) {
        el.textContent = text;
    }
    if(className) {
        el.classList.add(className);
    }
    if(parentNode) {
        parentNode.appendChild(el);
    }

    return el;
}

function createTask(task_name, task_date, parentNode) {

    const dom_task = document.createElement('div')
    dom_task.classList.add('task');
    parentNode.append(dom_task);

    const dom_task_left = createChildElement('div', null, 'task-left', dom_task);
    const dom_task_right = createChildElement('div', null, 'task-right', dom_task);
    dom_task.append(dom_task_left, dom_task_right);
    
    const dom_task_checkbox = document.createElement('input');
    dom_task_checkbox.setAttribute('type', 'checkbox');
    const dom_task_name = document.createElement('div');
    dom_task_name.textContent = task_name;
    dom_task_left.append(dom_task_checkbox, dom_task_name);

    const dom_task_date = document.createElement('div');
    dom_task_date.textContent = task_date;
    const dom_task_edit = document.createElement('img');
    dom_task_edit.classList.add('task-edit');
    dom_task_edit.setAttribute('src', './img/edit-regular.svg');
    const dom_task_delete = document.createElement('img');
    dom_task_delete.setAttribute('src', './img/trash.svg');
    dom_task_right.append(dom_task_date, dom_task_edit, dom_task_delete);

}

function buildPageInbox() {

    const dom_nav_project = document.querySelector('#nav-header-project');
    const dom_tasks = document.querySelector('#tasks');
    const dom_modal_project = document.querySelector('#modal-project');
    // Nav
    createChildElement('div', 'Gym', 'nav-item', dom_nav_project).classList.add('nav-item-hidden');
    createChildElement('div', 'Study', 'nav-item', dom_nav_project).classList.add('nav-item-hidden');
    createChildElement('div', 'Work', 'nav-item', dom_nav_project).classList.add('nav-item-hidden');
    // Task Creation
    createTask('Task Numero Uno', '09/09/23', dom_tasks);
    createTask('Task Numero Dos', '09/10/23', dom_tasks);
    createTask('Task Numero Tres Leches', '09/12/23', dom_tasks);
    // Projects
    createChildElement('option', 'Gym', null, dom_modal_project).setAttribute('value','gym');
    createChildElement('option', 'Study', null, dom_modal_project).setAttribute('value','study');
    createChildElement('option', 'Work', null, dom_modal_project).setAttribute('value','work');

}

buildPageInbox();
/*
buildPageInbox();

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
*/

document.querySelectorAll('.nav-info-button').forEach(btn => {
    btn.addEventListener('click', evt => {
        const nav_img_hide = './img/drop-up.png';
        const nav_img_show = './img/drop-down.png'
        const nav_img = btn.querySelector('img');
        const nav_class_hide = 'nav-item-hidden';
        const toggle_show = nav_img.getAttribute('src') === nav_img_show;

        const nav_items = btn.closest('.nav-header').querySelectorAll('.nav-item');
        nav_items.forEach(itm => {
            if(toggle_show) {
                itm.classList.remove(nav_class_hide);
            } else {
                itm.classList.add(nav_class_hide);
            }
        })

        if(toggle_show) {
            nav_img.setAttribute('src', nav_img_hide);
        } else {
            nav_img.setAttribute('src', nav_img_show);
        }
        

    })
})

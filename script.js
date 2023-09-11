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

    const dom_body = document.querySelector('body');

    const dom_content = createChildElement('div', null, 'content', dom_body);
    const dom_header  = createChildElement('div', null, 'header', dom_content);
    const dom_nav = createChildElement('div', null, 'nav', dom_content);
    const dom_tasks = createChildElement('div', null, 'tasks', dom_content);
    const dom_dialog = createChildElement('dialog', null, 'modal-dialog', dom_content);

    // Header
    const dom_header_img_svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    const dom_header_img_path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    dom_header.appendChild(dom_header_img_svg);
    dom_header_img_svg.appendChild(dom_header_img_path);
    dom_header_img_svg.setAttribute('viewBox', '0 0 24 24');
    dom_header_img_path.setAttribute('d', 'M17,12h-4v-2h4v2Zm0,3h-6v2h6v-2Zm4,6V2h-5.171c-.413-1.164-1.525-2-2.829-2h-2c-1.304,0-2.416,.836-2.829,2H3V21c0,1.654,1.346,3,3,3h12c1.654,0,3-1.346,3-3ZM10,4v-1c0-.551,.449-1,1-1h2c.551,0,1,.449,1,1v1h5V21c0,.551-.449,1-1,1H6c-.551,0-1-.449-1-1V4h5Zm-1,11h-2v2h2v-2Zm.838-3.481l2.759-2.702-1.399-1.429-2.533,2.48-1.241-1.192-1.386,1.442,1.45,1.393c.326,.326,.754,.488,1.181,.488,.425,0,.848-.161,1.168-.481Z');
    createChildElement('h1', 'Task Manager', 'header-title', dom_header);
    // Nav
    createChildElement('div', 'Inbox', 'nav-header', dom_nav);
    createChildElement('div', 'Today', 'nav-item', dom_nav);
    createChildElement('div', 'Tomorrow', 'nav-item', dom_nav);
    createChildElement('div', 'Week', 'nav-item', dom_nav);
    createChildElement('div', 'Projects', 'nav-header', dom_nav);
    createChildElement('div', 'Gym', 'nav-item', dom_nav);
    createChildElement('div', 'Study', 'nav-item', dom_nav);
    createChildElement('div', 'Work', 'nav-item', dom_nav);
    createChildElement('div', 'Notes', 'nav-header', dom_nav);
    // Tasks
    const dom_task_header = createChildElement('div', null, 'task-header', dom_tasks);
    createChildElement('h1', 'Inbox', null, dom_task_header);
    createChildElement('img', null, 'button_add_task', dom_task_header).setAttribute('src', './img/add.svg');
    // Task Creation
    createTask('Task Numero Uno', '09/09/23', dom_tasks);
    createTask('Task Numero Dos', '09/10/23', dom_tasks);
    createTask('Task Numero Tres Leches', '09/12/23', dom_tasks);

    // Dialog
    createChildElement('h1',' Task Detail', null, createChildElement('div', null, 'modal-header', dom_dialog));
    const dom_form = createChildElement('form', null, 'modal-form', dom_dialog);
    const dom_input = createChildElement('div', null, 'modal-input', dom_form);
    let dom_input_div, dom_input_label, dom_input_field;
    // Task Name
    dom_input_div = createChildElement('div', null, 'modal-input-field', dom_input);
    dom_input_label = createChildElement('label', 'Task', null, dom_input_div);
    dom_input_label.setAttribute('for', 'modal-task');
    dom_input_field = createChildElement('input', null, null, dom_input_div);
    dom_input_field.setAttribute('type', 'text');
    dom_input_field.setAttribute('name', 'modal-task');
    dom_input_field.setAttribute('id', 'modal-task');
    // Task Detail
    dom_input_div = createChildElement('div', null, 'modal-input-field', dom_input);
    dom_input_label = createChildElement('label', 'Detail', null, dom_input_div);
    dom_input_label.setAttribute('for', 'modal-detail');
    dom_input_field = createChildElement('textarea', null, null, dom_input_div);
    dom_input_field.setAttribute('name', 'modal-detail');
    dom_input_field.setAttribute('id', 'modal-detail');
    dom_input_field.setAttribute('rows', '4');
    // Due Date
    dom_input_div = createChildElement('div', null, 'modal-input-field', dom_input);
    dom_input_label = createChildElement('label', 'Due Date', null, dom_input_div);
    dom_input_label.setAttribute('for', 'modal-ddate');
    dom_input_field = createChildElement('input', null, null, dom_input_div);
    dom_input_field.setAttribute('type', 'date');
    dom_input_field.setAttribute('name', 'modal-ddate');
    dom_input_field.setAttribute('id', 'modal-ddate');
    // Project
    dom_input_div = createChildElement('div', null, 'modal-input-field', dom_input);
    dom_input_label = createChildElement('label', 'Project', null, dom_input_div);
    dom_input_label.setAttribute('for', 'modal-project');
    dom_input_field = createChildElement('select', null, null, dom_input_div);
    dom_input_field.setAttribute('name', 'modal-project');
    dom_input_field.setAttribute('id', 'modal-project');
    createChildElement('option', 'Gym', null, dom_input_field).setAttribute('value','gym');
    createChildElement('option', 'Study', null, dom_input_field).setAttribute('value','study');
    createChildElement('option', 'Work', null, dom_input_field).setAttribute('value','work');
    // Buttons
    const dom_buttons = createChildElement('div', null, 'modal-buttons', dom_form);
    createChildElement('button', 'Save', null, dom_buttons).setAttribute('id', 'modal-button-save');
    createChildElement('button', 'Exit', null, dom_buttons).setAttribute('id', 'modal-button-exit');

}

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
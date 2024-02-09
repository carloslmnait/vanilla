import { getToDoData } from './lib/firebase/api';
import { toDoItemTemplate } from './templates/toDoItem';

async function appInit() {
    const appData = await getToDoData();
    const toDoItems = Object.values(appData).map((obj) => {
        return toDoItemTemplate(obj);
    });
    

    const div = document.createElement('div');
    toDoItems.forEach((markup) => {
        div.appendChild(markup);
    });
    // Corrected line: append the 'div' containing all toDoItems to 'main', not 'markup'
    // only show at the main.live-demo 
    document.querySelector('main.live-demo').append(div);
}

appInit();
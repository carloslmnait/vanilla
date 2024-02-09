import { getToDoData } from './lib/firebase/api';
import { toDoItemTemplate } from './templates/toDoItem';
/* 
           1. Import Data 
		   2. Working with Object of Objects 
		      Object.values()
			  Object.keys()
			  Object.entries()

		    3. Creating A Template Preline... Tailwind UI Libraries 

			4. Creating A Render Function 

			5 Updating the DOM.

			Display Templating 
			toDoItems.forEach((todo) => {
		      document.querySelector('#root').insertAdjacentHTML('afterbegin', todo);
	         });

			  
*/

async function appInit() {
    const appData = await getToDoData();
    const toDoItems = Object.values(appData).map((obj) => {
        return toDoItemTemplate(obj.todo);
    });

    const div = document.createElement('div');
    toDoItems.forEach((markup) => {
        div.appendChild(markup);
    });
    // Corrected line: append the 'div' containing all toDoItems to 'main', not 'markup'
    document.querySelector('main').append(div);
}

appInit();
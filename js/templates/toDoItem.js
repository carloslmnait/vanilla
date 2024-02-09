/* 
     template is JSX  

     React Component 
     jsx + data
*/
import { toElement } from './../utils/toElement';

function toDoItemTemplate(todoItem) {
    // Construct the template string with all properties of the todo item
    const template = `
    <section class="bg-white border-l-4 border-blue-500 shadow-md p-4 rounded-lg space-y-4 my-5">
       <div class="text-lg font-semibold text-gray-900">2 DO: <span class="font-normal text-blue-600">${todoItem.todo}</span></div>
       <div class="flex flex-wrap -mx-2">
           <div class="px-2 w-full md:w-1/2">
               <p class="text-sm text-gray-700 uppercase"><span class="font-semibold">Category:</span> ${todoItem.category}</p>
           </div>
           <div class="px-2 w-full md:w-1/2">
               <p class="text-sm text-gray-700 uppercase"><span class="font-semibold">Status:</span> ${todoItem.status}</p>
           </div>
       </div>
       <div class="flex flex-wrap -mx-2">
           <div class="px-2 w-full md:w-1/2">
               <p class="text-sm text-gray-700 uppercase"><span class="font-semibold">Start:</span> ${todoItem.start}</p>
           </div>
           <div class="px-2 w-full md:w-1/2">
           <p class="text-sm text-gray-700 uppercase"><span class="font-semibold">Finish:</span> ${todoItem.finish}</p>
       </div>
       </div>
   </section>
`;
    return toElement(template);
}

export { toDoItemTemplate };

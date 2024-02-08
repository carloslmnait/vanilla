import { getToDoData } from "./lib/firebase/api";

let store =[];
async function appInit() {
    const toDos = await getToDoData();
    console.log(toDos);
}

appInit();
//hello

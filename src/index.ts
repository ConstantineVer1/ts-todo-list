import { TodoItem } from "./todoItem";
import { TodoCollection } from "./todoCollection";
import * as inquirer from 'inquirer';

let todos: TodoItem[] = [new TodoItem(1, 'Task 1'), 
                         new TodoItem(2, 'Task 2', true), 
                         new TodoItem(3, 'Task 3'),
                         new TodoItem(4, 'Task 4', true),
                         new TodoItem(5, 'Task 5')];

let collection: TodoCollection = new TodoCollection('Adam', todos);
let showCompleted = true;

function displayTodoList(): void {
    console.log(`${collection.userName}'s Todo List`
                + `${ collection.getItemCounts().incomplete } items to do`);
    //collection.getTodoItems(true).forEach(item => item.printDetails());
    collection.getTodoItems(showCompleted).forEach(item => item.printDetails());
}

enum Commands {
    Toggle = "Show/Hide Completed",
    Quit = "Quit"
}

function promptUser(): void {
    console.clear();
    displayTodoList();
    inquirer.prompt({
        type: "list",
        name: "command",
        messsage: "Choose option",
        choices: Object.values(Commands)
    }).then(answers => {
        switch (answers["command"]) {
            case Commands.Toggle:
                showCompleted = !showCompleted;
                promptUser();
                break;
        }
    });
}
promptUser();

/*I like it
/*
console.clear();
console.log(`${collection.userName}'s Todo List`);

let newId: number = collection.addTodo('Go and relax');
let todoItem: TodoItem = collection.getTodoById(newId);
// removed console.log(JSON.stringify(todoItem));
todoItem.printDetails();

collection.getTodoItems(true).forEach(e => console.log(e));
collection.getTodoItems(true).forEach(e => e.printDetails());
collection.removeComplete();
collection.getTodoItems(true).forEach(e => e.printDetails());

console.log(`${collection.userName}'s Todo List` 
            + `(${ collection.getItemCounts().incomplete } items to do)`
);
*/
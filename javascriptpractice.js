let input = prompt('Enter one of the commands:');
let list = [];

while (input !== 'quit' && input !=='q'){
    if (input === 'list') { //lists array 'list' contents
        console.log(list);

    } else if (input === 'new') { //adds new array element to 'list'
        const newTodo = prompt('What would you like to add?');
        list.push(newTodo.toUpperCase());
        console.log(`${newTodo.toUpperCase()} ADDED TO LIST`);
    
    } else if (input === 'delete') { //deletes specfied array element to 'list'
        const index = prompt('Enter index for deletion:');
        parseInt(index);
        const deleted = list.splice(index, 1);
        console.log(`Ok you deleted ${deleted[0]}`)
    }
    input = prompt('Enter one of the commands:')
} 

console.log('Ok, you quitter')
let input = prompt('What is your plan today?');
let toDo = ['Make physics notes', 'Exercise'];
while(input !== 'quit' && input !== 'q')
{
    if(input === 'list')
    {
        console.log('********************');
        for(let i = 0; i < todos.length; i++)
        {
            console.log{`${i}: ${todos[i]}`};
        }
        console.log('********************');
    }

    else if(input === 'new')
    {
        let newTask = prompt('What is the task to add?');
        toDo.push(newTask);
        console.log(`${newTask} has been added!`);
    }
    else if(input === 'delete')
    {
        let index = ('Enter index to delete')

    }

    console.log("You may quit!");
}
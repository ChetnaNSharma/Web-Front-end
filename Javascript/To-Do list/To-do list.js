let input = prompt('What is your plan today?');
let toDo = ['Make physics notes', 'Exercise'];
while(input !== 'quit' && input !== 'q')
{
    if(input === 'list')
    {
        console.log('********************');
        for(let i = 0; i < toDo.length; i++)
        {
            console.log{`${i}: ${toDo[i]}`};
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
        let index = parseInt(prompt('Enter index to delete'));
        if(!Number.isNaN(index))
        {

            let delete = toDo.splice(index,1);
            console.log(`deleted ${delete[0]}`);
        }
        else
        {
            console.log('unknown index');

        }

    }

    input = prompt('What is your plan today?');
}

console.log("You may quit!");
let maximum = parseInt(prompt("Enter a maximun number"));
while(!maximum)
{
    maximum = parseInt(prompt("Enter a valid maximun number"));
}
let value = Math.floor((Math.random()* maximum)) + 1 ;

let guess = parseInt(prompt("Enter your guess"));
let quit = 0;
while(parseInt(guess) != value)
{
    if(guess === 'q') 
    {
        console.log("You Quit!");
        quit = 1;
        break;
    }
    if(guess > value)
   { 
       guess = prompt("Too high! Try again");
    }
    else
    {
        guess = prompt("Too high! Try again");
    }
}
if(quit == 0)
{
    console.log("Congratulations! You guessed correct");
}
const express = require("express");
const app = express();


// app.use((req,res) => {
//     console.log("We got a new request");
//     res.send("This is a response!");
// });

app.get('/', (req,res) => {

    res.send("Welcome to the zoo"); 
 
 });

app.get('/cat', (req,res) => {
   console.log('Cat sound will appear');
   res.send("Meowwwwww"); 

});
app.get('/wolf', (req,res) => {
    console.log('Wolf sound will appear');
    res.send("Aaauuuuuuuuu");
 
 });
 app.get('/Bird', (req,res) => {
    console.log('Bird sound will appear');
    res.send("Kuhu Kuhu"); 
 
 });
 app.get('*', (req,res) => {
    res.send("Unknown route!") 
 
 });



app.listen(3000, () =>{
    console.log("Listening on port 3000");
});

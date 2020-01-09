import express from 'express'

console.log("Hello World")

let app = express();

app.get('*', (req, res) => {
    
    res.send("Hello Get")
})

app.listen("7890")
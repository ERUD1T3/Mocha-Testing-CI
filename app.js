//Load express module with `require` directive
const express = require('express')
const hellofn = require('./lib/hello')
const app = express()

//Define request response in root URL (/)
app.get('/', (req, res) => {
    // res.send('Hello World from Dev')
    let msg = hellofn()
    res.send(msg)
})



//Launch listening server on port 8080
app.listen(8080, () => {
    console.log('App listening on port 8080!')
})
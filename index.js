const express = require('express')
const app = express()
const PORT = 3000
const bodyParser = require('body-parser')
const morgan = require('morgan')

const aboutRoute = require('./routes/about')
const greetRoute = require('./routes/greet')

app.use(bodyParser.urlencoded({exteded: true}))
app.use(bodyParser.json())
app.use(morgan('dev'))

//setting the view engine as ejs
app.set('view engine', 'ejs')

app.use('/about', aboutRoute)


app.get('/', (req, res) => {
    res.send("this is our homepage")
})
app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`);
    
})
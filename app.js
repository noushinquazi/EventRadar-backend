const express = require('express')
const morgan = require('morgan')
const body_parser = require('body-parser')
const mongoose = require('mongoose')
const fs = require('fs')

const event_router = require('./Routes/eventRouter.js')

const app = express()
const port = process.env.PORT || 3000

/* Read in database credentials */
const creds_file = fs.readFileSync('credentials.json')
const creds = JSON.parse(creds_file)

/* Connect to database */
mongoose.connect('mongodb+srv://'+creds.username+':'+creds.password+'@eventradar-awuod.gcp.mongodb.net/test?retryWrites=true', {dbName: 'development', useNewUrlParser: true}).then(
    () => console.log("Connected to database!!"),
    err => console.log(err)
)

/* Set up request logging */
app.use(morgan('combined'))

/* Enable middleware that only accepts json requests */
app.use(body_parser.json())

/* Set up routes */
app.use('/api/events', event_router)

/* Bind server to port */
app.listen(port, () => console.log(`EventRadar listening on port ${port}!`))

app.get('/', (req, res) => res.send('Welcome to EventRadar!'))


// A page to a link with the appllication
// The left side will display the existing notes
// When I enter a new title with text a save icon is shown at the top of the page
// The new note is saved and appears in the left hand column with other notes. When I click on this note in appears in the right hand column.
// Clicking on the write icon gives the user an empty field to type in 

const express = require('express')

const api = require ('./index.js')

const path = require('path')

const PORT = process.env.port || 3001;

app.get('/', (req, res) =>{
    console.log('working?')
} )

const app = express();

// globalThis.windowVar =

app.use(express.static(path.join(__dirname +'/public')))

app.use(express.json())

app.listen(3001)

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
// A page to a link with the application
// The left side will display the existing notes
// When I enter a new title with text a save icon is shown at the top of the page
// The new note is saved and appears in the left hand column with other notes. When I click on this note in appears in the right hand column.
// Clicking on the write icon gives the user an empty field to type in 

const express = require('express')

const fs = require('fs')


const path = require('path')

const PORT = process.env.port || 3001;

const app = express();





app.use(express.json())

app.use(express.static(path.join(__dirname +'/public')))



require("./routes/html-routes") (app)

require("./routes/api-routes") (app)


app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
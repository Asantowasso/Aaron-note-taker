const { randomUUID } = require("crypto")
// const notes = require("../db/db.json")
const fs = require ("fs")
console.log(typeof randomUUID)
module.exports = function (app){
app.get("/api/notes", function (req, res){
    const notes = JSON.parse(fs.readFileSync("./db/db.json"))
    res.json(notes)
})
app.post("/api/notes", (req, res) => {
    const notes = JSON.parse(fs.readFileSync("./db/db.json"))
    const newNotes = req.body;
    newNotes.id = randomUUID()
    notes.push(newNotes);
    fs.writeFileSync("./db/db.json", JSON.stringify(notes))
    res.json(notes);

})

}

// http://localhost:3002/api/notes
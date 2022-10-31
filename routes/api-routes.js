const uuid = require ("uuid");
const notes = require("../db/db.json")
const fs = require("fs")

module.exports = function (app){
app.get("/api/notes", function (req, res){
    res.json(notes)
})
app.post("/api/notes", (req, res) => {
    const notes = JSON.parse(fs.readFileSync("../db/db.json"))
    const newNotes = req.body;
    newNotes.id = uuid.v4
    notes.push(newNotes);
    fs.writeFileSync("../db/db.json", JSON.stringify(notes))
    res.json(notes);

})

}

// http://localhost:3002/api/notes
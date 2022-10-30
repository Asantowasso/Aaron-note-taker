module.exports = function (app) {
    app.get("/assets/notes", function (req, res) {
        res.sendFile(path.join(__dirname + "/.../assets/notes.html"))
    })

    app.get("/index", function (req, res) {
        res.sendFile(path.join(__dirname + "/.../assets.index.html"))
    });
};
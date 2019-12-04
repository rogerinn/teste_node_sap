module.exports = (app) => {
    app.get("/", (req, res)=> {
        res.end("Hello in home");
    })
}
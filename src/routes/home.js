
 export default (app) =>{
    app.get('/',(req, res) => {
        res.render("home/index")
        console.log("Home")
    })
}

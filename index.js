const express = require("express")
const app = express();


// Set the View Engine or Template Engine
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  res.render("index");
})
 
app.get("/user", function(req,res){
  const user = {
    name: "Theodore Kelechukwu O.",
    stack: "MERN",
    email: "theodoreonyejiaku@gmail.com",
    hubby: ["singing", "playing guitar", "reading", "philosoph"]
  }
  res.render("user", {user});
})
app.listen(3010)
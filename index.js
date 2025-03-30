const express = require("express")
const cors = require("cors")
const app = express()

app.use(cors())

let username = "john"
let password = 123

app.use(express.json())
app.use(express.urlencoded({extended:true}))

/*app.get("/login",function(req,res)
{
    if(req.query.username===username && req.query.password==password)
    {   
        res.send("Login Successful")
    }
    else
    {
        res.send("Login Failed")
    }
})
*/
app.post("/login",function(req,res)
{
    if(req.body.username===username && req.body.password==password)
    {   
        res.send("Login Successful")
    }
    else
    {
        res.send("Login Failed")
    }
})
app.listen(5000,function(){
    console.log("Server Started.....")
})
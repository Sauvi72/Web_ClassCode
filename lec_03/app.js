const express = require("express") ;
const app = express() ;
const log = require("./middleware/log")
const gold = require("./middleware/gold")
const connectDB = require("./config/db")
const route = require("./route")


const port = 3000 ;


app.use(express.json()) ;
app.use(express.urlencoded({extended:true})) ;
app.use(log) ;
app.use("/gold" , gold) ;


app.listen(port,()=>{
    console.log("server is live at 3000 port");
    
})
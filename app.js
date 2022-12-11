const express=require("express");
const bodyParser=require("body-parser");
const request=require("request");


const app=express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
    
})

app.post("/",function(req,res){
 var firstname=req.body.fname;
 var lastname=req.body.sname;
 var email=req.body.email;
 console.log(firstname+" "+lastname);
})

app.listen(process.env.PORT || 3000,function(){
    console.log("mast hai bawa");
})


// md-CeYrvifqlPmZckaCDY6nLw
const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static("public"));


app.get("/",function(req, res){
  res.render("home")
});


app.get("/features",function(req,res){
  res.render("features")
});


app.get("/pricing",function(req,res){
  res.render("pricing")
});

app.get("/faq",function(req,res){
  res.render("faqs")
});

app.get("/about",function(req,res){
  res.render("about")
});





app.listen(3000,function(req, res){
  console.log("Server is running at port 3000");
});

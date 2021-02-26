const express=require("express");
const bodyParser=require("body-parser");
const ejs = require("ejs");

const homestartingcontent="hwwwwwwwwwwwwwwwwwwwwww"
const menucontent="BURGERS AND SLIDES"
const aboutcontent="ABOUT US "
const app=express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));





app.get("/",function(req,res){
  res.render("home",{
StartingContent:homestartingcontent,
  });

  })


  app.get("/menu",function(req,res){
    res.render("menu",{
  menuitemContent:menucontent,
    });

    })



    app.get("/about",function(req,res){
      res.render("about",{
    aboutUContent:aboutcontent,
      });

      })
















app.listen(3000,function(){
  console.log("server running at 3000");
});

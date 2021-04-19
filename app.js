const express=require("express");
const bodyParser=require("body-parser");
const app=express();
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public")); //for css on server
var items=["Wake up","Eat","Sleep"];
var workitems=[];

app.get("/",function(req,res){
    var today=new Date();
    var c=today.getDay();
    var options={
        weekday:"long",
        day:"numeric",
        month:"long"
    };
    var day=today.toLocaleDateString("en-US",options);
    //console.log(day);

    res.render("list",{day: day,newlistItems: items});

});
//app.get("/wo")
app.post("/",function(req,res){
    //var str=req.body.newItem;
    //console.log(req.body.newItem);
    console.log(req.body);
    if(req.body.button==="Work"){
        var item =req.body.newItem;
        workitems.push(item);
        res.redirect("/work");

    }
    else{
    var item=req.body.newItem;
    items.push(item);
    res.redirect("/");
    }
});
app.get("/work",function(req,res){
    day="Work";
    

    res.render("list",{day:day,newlistItems:workitems});


});
app.post("/work",function(req,res){
    
});
app.listen(3000,function(){
    console.log("server started at 3000")
});

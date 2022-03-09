const express = require("express")
const bodyparser = require("body-parser");
const date=require(__dirname+"/date.js");

 const items=["Buy Food","Make Food","Eat food"];
 let workItems=[];
const app = express();
app.set('view engine', 'ejs');

app.use(bodyparser.urlencoded({encoded:true}));  // to use body parser to get data back from server
app.use(express.static("public"));
app.get("/", function(req, res) {
let day=date.getDate();
  res.render('list', {
    listTitle: day,
    newlistitem:items
  });
})

app.post("/",function(req,res)
{
 let item=req.body.input1;
 if(req.body.list==="work")
 {
   workItems.push(item);
   res.redirect("/work");
 }
 else{
   items.push(item);
   res.redirect("/");
 }

})

app.get("/work",function(req,res)
{
  res.render("list",{listTitle:"work List",newlistitem:workItems});
});
app.post("/work",function(req,res)
{
  let item=req.body.newItem;
  workItems.push(items);
  res.redirect("/work");
})
app.listen(3000, function(req, res) {
  console.log("server started at port no 3000");
})

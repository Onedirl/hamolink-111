const express = require('express');
const app = express();

app.set('view engine', 'ejs');

const data = [
    {id: 1, name: 'İphone 13',price: 3000},
    {id: 2, name: 'İphone 14',price: 3000},
    {id: 3, name: 'İphone 15',price: 3000}
]

app.use("/products/:id",function(req,res){

    res.render('urundetail');
});

app.use("/products",function(req,res){

    res.render('products', {
        liste:data
    });
});

app.use("/",function(req,res){

    res.render('index')
});

app.listen(3000,function(){
    console.log("Server started on port 3000");
});
const express = require ('express');
const path = require ('path');
const hbs = require ('hbs');

const port = process.env.PORT || 3000;
var app=express();

hbs.registerPartials(__dirname+'/views/partials')
app.set('view engine','hbs');
app.use(express.static(__dirname+'/public'));

hbs.registerHelper('getcurrentYear',()=>{
    return new Date().getFullYear();
})

hbs.registerHelper('welcomeMsg',(txt)=>{
    return txt.toUpperCase();
})

app.get('/',(req,res) => {
    res.render('home.hbs',{msg:'home'});
})
app.get('/about',(req,res) => {
    res.render('about.hbs',{msg:'about'});
})

app.listen(port,()=>{
    console.log('server upon port '+port+'!!!');
});


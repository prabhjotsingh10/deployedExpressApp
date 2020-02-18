const express = require('express');
const app = express();
const exphbr = require('express-handlebars');
const bodyParser = require('body-parser');
app.use(express.static('CSS and Images'));
app.use(bodyParser.urlencoded({ extended: false }))
app.engine('handlebars', exphbr());
app.set('view engine','handlebars');


app.get('/', (req,res)=>{

    res.render('home', {
        title:"HOME PAGE"
    })

});


app.get('/contactus',(req,res)=>{

    res.render('contactus',{
        title: "CONTACT US BRO"
    })

});

app.get('/products', (req,res)=>{

    res.render("products" , {
        title: "PRODUCTS PAGE BRO"
    })

});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("The server is up and running");
})



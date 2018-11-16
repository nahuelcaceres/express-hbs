const express = require('express');
const app = express();
const hbs = require('hbs'); 

require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));


hbs.registerPartials(__dirname + '/views/partials');
// Express hbs engine
app.set('view engine', 'hbs');


app.get('/', function (req, res) {

    res.render('home',{
        nombre: 'nahuel matias'
    });

});

app.get('/about', function(req, res){

    res.render('about');

});

app.get('/data', (req, res) =>{

    res.send('Hola data');

});

app.listen(process.env.PORT || 3000,() =>{
    console.log(`Servidor escuchando en el puerto ${ port }`);
});
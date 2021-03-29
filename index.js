const express = require('express');
var bodyParser = require('body-parser')

const path = require('path');

const app = express();

app.use( bodyParser.json());
app.use( bodyParser.urlencoded({
    extended: true
}));

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use('/public', express.static(path.join(__dirname,'public')));
app.set('view', path.join(__dirname, '/views'));


app.get('/',(req,res)=>{
    
    if(req.query.busca == null){
        res.send('home');
    }else{
        res.send('Você buscou: '+req.query.busca);
    }
})


app.get('/:slug',(req,res)=>{
    res.send(req.params.slug);
})




server.listen(port,hostname,() =>{
    console.log("Servidor está rodando");
})

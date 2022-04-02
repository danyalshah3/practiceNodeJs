const express = require('express');
var app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { resolveNs } = require('dns');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))


mongoose.connect('mongodb://localhost:27017/sports' , {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, function(err){
    if(err){
        console.log(err)
    } else{
        console.log('mongodb connection successful')
    }
});

const GameModel = mongoose.model('games', {name:String, country:String, player:String})

app.post('/addgame' , (req, res) => {
    
    var name = req.body.name
    var country = req.body.country
    var player = req.body.player
    
    var newgame = new GameModel({name: name, country: country, player: player})
     
     newgame.save(function(err){
         if(err){
             res.send('game adding failed')
         }else {
             res.send('game added successfully')
         }

     })
  
})

app.post('/deletegame', (req, res) => {

GameModel.findOneAndDelete({

    name:req.body.name

}, function(err){

    if(err){
    res.send('deleting document failed')

    }else{
        res.send('document deleted')
    }

}) 

})

app.post('/getgames', (req, res) => {
    GameModel.find({}, function(err, documents){

        if(err){
            res.send('something went wrong')
        }else {
            res.send(documents)
        }

    })
})

app.post('/updategame', (req, res) => {

    GameModel.findOneAndUpdate({
 
    name: req.body.name
    }, {
        player: 'xyz'
    }, function(err){
 
   if(err){
       res.send('update failed')
   } else{
       res.send('updated successfully')
   }

    })

})

app.listen(3000, () => {
    console.log('this is server started on port 3000')
})
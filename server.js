const express = require('express');
const app = express();
var bodyParser = require ('body-parser');
const port=4000;

require('./db');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
// db.createDemoDoors();
// dgb.getAllDoors((err,doors)=>{
//     console.log(`${!err?doors:err}`);
// });

require('./routes')(app);
app.get('/',(req,res)=>{
    res.send('Hi,MEAN stack!');
})

app,listen(port,()=>{
    console.log(`App listening on port ${port}`);
})
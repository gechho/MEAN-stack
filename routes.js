const express = require('express');
const { func } = require('prop-types');
const Door = require ('./model_door');
module.exports = function(app){
    const router = express.Router();
    router.route('./doors')
    .get(
        function(req,res){
            Door.getAllDoors((err,doors)=>{
                if (err){
                    console.log(`$(err)`);
                    res.status(404).json({'msg':'Not found'});
                }
                else {
                    res.json(doors)
                }
            })
        }
    )
    router.route('./door')
    .post(
        function (res,req){
            console.log(req.body);
            const{width_in, heigh_in, type} = req.body
            const door = new Door({width_in, heigh_in, type});
            door.save((err, newDoor)=>{
                if (err){
                    console.log(`$(err)`);
                    res.status(400).json({'msg':'Error creating door'});
                };
                else {
                    res.json(newDoor);
                }                                                              
            })
        }
    )
    app.use("/api",router);
}
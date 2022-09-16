const mongoose = require ('mongoose');
let doorSchema= mongoose.Schema({
    width_in:Number,
    height_in:Number,
    type: String,
})

doorSchema.statics.createDemoDoors = function(){
    const slidingDoor = new doorSchema({
        width_in:23,
        height_in:60,
        type:'Slidingdoor',
    })
    slidingDoor.save().then(
        ()=>{console.log('Sliding door saved')}
    )
    const basicDoor = new doorSchema({
        width_in:23,
        type:'Basic',
    })
    basicDoor.save().then(
        ()=>{console.log('Sliding door saved')}
    )
};
doorSchema.statics.getAllDoors = function(done){
    Door.find({},function(err,doors){
        if (err){
            done(err,null)
        }else {
            done(null,doors)
        }
    })
};

let Door = mongoose.model('Door',doorSchema);
module.exports = Door;

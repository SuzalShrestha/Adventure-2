const {Room}=require('./room.js');
class DarkRoom extends Room{
    constructor(name,description){
        super(name,description);
        this.haslight=false;
    }
    printDarkRoom(){
    if(this.haslight){
        this.printRoom();
    }else{
        console.log("It is pitch black. You are likely to be eaten by a grue.");
    }
}
}
module.exports={DarkRoom};
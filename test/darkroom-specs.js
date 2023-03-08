const {Room}=require('../class/room.js');
const {DarkRoom}=require('../class/darkroom.js');
const {Player}=require('../class/player.js');
const {Light}=require('../class/light.js');
const chai=require('chai');
const expect=chai.expect;
const spies=require('chai-spies');
chai.use(spies);
describe("DarkRoom",()=>{
    let darkroom;
    let player;
    let light;
    let spy;
    beforeEach(function(){

        darkroom=new DarkRoom("darkroom","It is dark in here");
        player=new Player("player",darkroom);
        light=new Light("light","a light");
        spy=chai.spy.on(darkroom,"printRoom");
        player.items.push(light);
    });
    it("should be a subclass of Room",()=>{
        
        expect(darkroom).to.be.an.instanceof(Room);
        expect(darkroom).to.be.an.instanceOf(DarkRoom);

    });
    context("if there is no light in the Room",()=>{
        it("should print 'It is pitch black. You are likely to be eaten by a grue.'",()=>{
            darkroom.printDarkRoom();
            expect(spy).to.not.have.been.called();
        });
    });
    context("if there is light in the Room",()=>{
        it("should print the room's description",()=>{
            darkroom.items.push(light);
            darkroom.hasLight=true;
            darkroom.printDarkRoom();
            expect(spy).to.have.been.called.once;
        });
    });
    context("if there is light holded by the player",()=>{
        it("should print the room's description",()=>{
            player.items.push(light);
            darkroom.hasLight=true;
            darkroom.printDarkRoom();
            expect(spy).to.have.been.called.once;
        });
    });
});
let getRandomArbitrary=function(min, max) {
    return parseInt(Math.random() * (max - min) + min);

}
class Biosensor{
    constructor(name){
        this.name=name;
        this.live();
    

    }
    beat(){
        let hr=getRandomArbitrary(60,80)
        console.log('name', this.name)
        console.log(hr)
    }
    live(){
        setInterval(()=>{
            this.beat()
        },1000)
    }
}
let jemes=new Biosensor('jemes')
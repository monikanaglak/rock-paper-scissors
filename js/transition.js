function pageTransition(){
    console.log("je suis dans quitage de la page")
    var tl = gsap.timeline();
    tl.to('ul.transition li',{duration:10,scaleY:1,transformOrigin:"bottom left",stagger:.2})
    tl.to('ul.transition li',{duration:2,scaleY:0,transformOrigin:"bottom left",stagger:.1})
}
function contentAnimation(){
    console.log("la je suis entre ")
    var tl = gsap.timeline();
    tl.to('ul.transition li',{duration:.5,scaleY:0,transformOrigin:"bottom left",stagger:.2})
    /* tl.from('.lets',{duration:5,translateX:150,opacity:0})
    tl.from('.game',{duration:1.5,translateY:150,opacity:0})*/
}

const tl =  gsap.timeline()
function delay(n){
    n = n || 5000;
    return new Promise(done=>{
        setTimeout(()=>{
            done()
        },n)
    })
}

barba.init({
    sync:true,
    transitions:[
        {
        async leave(){
            const done = this.async()
            pageTransition()
            await delay(1500)
            done()
        },
        async enter(){
            contentAnimation()

        }
    }]
})
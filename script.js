
let ione = document.querySelector("#header .ri-home-9-line");
let home = document.querySelector("#hero1 h6");
ione.addEventListener("mouseenter", function(){
    home.style.display = "block"
   
})
ione.addEventListener("mouseleave", function(){
   home.style.display = "none"
   
});

let itwo = document.querySelector(".ri-folder-2-line");
let projects = document.querySelector("#hero2 h6");
itwo.addEventListener("mouseenter", function(){
    projects.style.display = "block"
   
})
itwo.addEventListener("mouseleave", function(){
   projects.style.display = "none"
   
});

let ithree = document.querySelector(".ri-tools-line");
let tools = document.querySelector("#hero3 h6");
ithree.addEventListener("mouseenter", function(){
    tools.style.display = "block"
   
})
ithree.addEventListener("mouseleave", function(){
   tools.style.display = "none"
   
});

let ifour = document.querySelector(".ri-edit-line");
let about = document.querySelector("#hero4 h6");
ifour.addEventListener("mouseenter", function(){
    about.style.display = "block"
   
})
ifour.addEventListener("mouseleave", function(){
   about.style.display = "none"
   
});
// let call = document.querySelector(".ri-home-9-line")
// call.addEventListener("click",function(){
      
// })


let tl = gsap.timeline();
tl.to("#iclass",{
    y:10,
    x: 0,
    opacity:1,
    stagger: 0.2,
    duration: 1,
    ease: "power2.out",

})
tl.from("#left img",{
    y:15,
    x: 0,
    opacity:0,
    stagger: 0.2,
    duration: 1,
    ease: "power9.out",
})
tl.from("#left h1",{
    y:15,
    x: 0,
    opacity:0,
    stagger: 0.2,
    duration: 0.5,
    ease: "power9.out",
})
tl.from("#left svg",{
    y:15,
    x: 0,
    opacity:0,
    stagger: 0.2,
    duration: 0.5,
    ease: "power9.out",
})
tl.from("#left p",{
    y:15,
    x: 0,
    opacity:0,
    stagger: 0.2,
    duration: 0.5,
    ease: "power9.out",
})
tl.to("#left #icons",{
    y:20,
    x: 0,
    opacity:1,
    stagger: 0.2,
    duration: 0.5,
    ease: "power9.out",
})
tl.to("#left #icons",{
    y:20,
    x: 0,
    opacity:1,
    stagger: 0.2,
    duration: 0.5,
    ease: "power9.out",
})
tl.to("#right h1",{
    y:10,
    x: 0,
    opacity:1,
    stagger: 0.2,
    duration: 0.5,
    ease: "power9.out",
})
tl.to("#right p",{
    y:10,
    x: 0,
    opacity:1,
    stagger: 0.2,
    duration: 0.5,
    ease: "power9.out",
})
tl.to("#right1",{
    y:10,
    x: 0,
    opacity:1,
    stagger: 0.2,
    duration: 0.5,
    ease: "power9.out",
})
tl.to("#right2",{
    y:10,
    x: 0,
    opacity:1,
    stagger: 0.2,
    duration: 0.5,
    ease: "power9.out",
})












gsap.to("#page h1",{
    y:0,
    opacity:1,
    stagger:0.2,
    duration:1,
    scrollTrigger:{
    scroller:"body",
     trigger: "#page h1",
     top:"40%",
     start: "top 70%",
     end:"bottom -60%",

    }
    
})  
gsap.to("#items #one",{
    y:10,
    opacity:1,
    stagger:0.2,
    duration:1,
    scrollTrigger:{
    scroller:"body",
     trigger: "#page h1",
     top:"40%",
     start: "top 20%",
     end:"bottom -60%",
    }
    
}) 
gsap.to("#items #one1",{
    y:10,
    opacity:1,
    stagger:0.2,
    duration:1,
    scrollTrigger:{
    scroller:"body",
     trigger: "#page h1",
     top:"40%",
     start: "top 20%",
     end:"bottom -60%",
    }
    
}) 
gsap.to("#items #one2",{
    y:10,
    opacity:1,
    stagger:0.2,
    duration:1,
    scrollTrigger:{
    scroller:"body",
     trigger: "#page h1",
     top:"40%",
     start: "top 20%",
     end:"bottom -60%",

    }
    
}) 



    gsap.to("#text1 h1",{
        y:-15,
        opacity:1,
        stagger:0.2,
        duration:1,
        scrollTrigger:{
        scroller:"body",
         trigger: "#page h1",
         top:"0%",
         start: "top 30%",
         end:"bottom 90%",
    
        }
        
    }) 
    gsap.to("#paragraph h3",{
        y:-15,
        opacity:1,
        stagger:0.2,
        duration:1,
        scrollTrigger:{
        scroller:"body",
         trigger: "#page h1",
         top:"40%",
         start: "top 30%",
         end:"bottom -60%",
    
        }
        
    }) 

    gsap.to("#paragraph p",{
        y:-15,
        opacity:1,
        stagger:0.2,
        duration:1,
        scrollTrigger:{
        scroller:"body",
         trigger: "#page h1",
         top:"40%",
         start: "top 30%",
         end:"bottom -60%",
    
        }
        
    }) 
    
    
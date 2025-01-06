function loadingAnimation(){var tl =gsap.timeline()


    tl.from(".line h1",{
        y:150,
        stagger:0.22,
        delay:0.5
    
    })
    tl.from("#lin1-part1, .line h2",{
        opacity:0,
        onStart:function(){
            var h5timer = document.querySelector("#line1-part1 h5")
            var grow =0
            setInterval(function(){
                if (grow<100){
                    grow++
                    h5timer.innerHTML=grow
                }else{
                    h5timer.innerHTML=grow
                }
            },35)
            
        }
    })
    
    tl.to(".line h2",{
        animationName:"anime",
        opacity:1
    })
    tl.to("#loader",{
        opacity:0,
        duration:0.2,
        delay:3.3
    })
    
    tl.from("#page1",{
        delay:0.2,
        y:1600,
        opacity:0,
        
        ease:Power4
    })
    tl.to("#loader",{
        display:"none"
    })
    tl.from("#nav",{
        opacity:0
    })
     tl.from(".hero h1, .hero h2,.hero h3",{
        y:112,
        stagger:0.2,
        delay:-0.6
     }) 
    tl.from("#hero1,#page2",{
        opacity:0,
    },"-=1")
}   

function locomotive(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});





// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}

loadingAnimation()
locomotive()
// var tl =gsap.timeline()


// tl.from(".line h1",{
//     y:150,
//     stagger:0.22,
//     delay:0.5

// })
// tl.from("#lin1-part1, .line h2",{
//     opacity:0,
//     onStart:function(){
//         var h5timer = document.querySelector("#line1-part1 h5")
//         var grow =0
//         setInterval(function(){
//             if (grow<100){
//                 grow++
//                 h5timer.innerHTML=grow
//             }else{
//                 h5timer.innerHTML=grow
//             }
//         },35)
        
//     }
// })

// tl.to(".line h2",{
//     animationName:"anime",
//     opacity:1
// })
// tl.to("#loader",{
//     opacity:0,
//     duration:0.2,
//     delay:3.9
// })

// tl.from("#page1",{
//     delay:0.2,
//     y:1600,
//     opacity:0,
    
//     ease:Power4
// })
// tl.to("#loader",{
//     display:"none"
// })




// document.addEventListener("mousemove",function(dets){
//     gsap.to("#crsr",{
//         left:dets.x,
//         top:dets.y
//     })
// })



// function cursor(){
//     Shery.makeMagnet("#nav-part2 h4" /* Element to target.*/, {
//         //Parameters are optional.
//         ease: "cubic-bezier(0.23, 1, 0.320, 1)",
//         duration: 1,
//       }); 
// }
//  cursor()






function sheryAnimation(){
    Shery.imageEffect(".image-div", {
        style: 2,
        config:{"resolutionXY":{"value":100},"distortion":{"value":true},"mode":{"value":-3},"mousemove":{"value":0},"modeA":{"value":1},"modeN":{"value":0},"speed":{"value":1,"range":[-500,500],"rangep":[-10,10]},"frequency":{"value":50,"range":[-800,800],"rangep":[-50,50]},"angle":{"value":0.5,"range":[0,3.141592653589793]},"waveFactor":{"value":1.4,"range":[-3,3]},"color":{"value":10212607},"pixelStrength":{"value":3,"range":[-20,100],"rangep":[-20,20]},"quality":{"value":5,"range":[0,10]},"contrast":{"value":1,"range":[-25,25]},"brightness":{"value":1,"range":[-1,25]},"colorExposer":{"value":0.18,"range":[-5,5]},"strength":{"value":0.2,"range":[-40,40],"rangep":[-5,5]},"exposer":{"value":8,"range":[-100,100]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7272637416038993},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.61,"range":[0,10]},"metaball":{"value":0.37,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.44,"range":[0,2]},"noise_scale":{"value":7.63,"range":[0,100]}},
        gooey:true
      });
}
sheryAnimation()

function cursorAnimation (){
    Shery.mouseFollower({
        //Parameters are optional.
        skew: true,
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        duration: 1,
      });
    //   shery.makeMagnet("#nav-part2 h4");



 var videoContainer = document.querySelector("#video-container");
 var video = document.querySelector("#video-container video");

    videoContainer.addEventListener("mouseenter",function(){
       videoContainer.addEventListener("mousemove",function(dets){
        gsap.to(".mousefollower",{
            opacity:0
        })
        gsap.to("#video-cursor",{
            left:dets.x - 430,      
            y:dets.y - 200
        })
       
       })
     videoContainer.addEventListener("mouseleave",function(){
        gsap.to(".mousefollower",{
            opacity:1
        })
        gsap.to("#video-cursor",{
            left:"70%",
            top:"-1%"
        })
     })

     

      })


      var flag = 0
      videoContainer.addEventListener("click",function(){
        if(flag == 0){
            video.play()
    
            video.style.opacity = 1
            document.querySelector("#video-cursor").innerHTML = `<i class="ri-pause-line"></i>`
           gsap.to("#video-cursor",{
            scale:0.5
           })
           flag = 1
        }else{
            video.pause()
    
            video.style.opacity = 0
            document.querySelector("#video-cursor").innerHTML = `<i class="ri-play-fill"></i>`
           gsap.to("#video-cursor",{
            scale:1
           })
           flag = 0
        }
       })

}

cursorAnimation()

document.addEventListener("mousemove",function(dets){
    gsap.to("#flag",{
        x:dets.x,
        y:dets.y
    })
})
document.querySelector("#hero3").addEventListener("mouseenter",function(){
    gsap.to("#flag",{
        opacity:1
    })
})
document.querySelector("#hero3").addEventListener("mouseleave",function(){
    gsap.to("#flag",{
        opacity:0
    })
})




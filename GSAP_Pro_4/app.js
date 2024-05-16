// gsap.to("#box_1",{
//     x:1500,
//     rotate:360,
//     duration:1.5,
//     delay:1
// })


// gsap.to("#box_2",{
//     x:1500,
//     backgroundColor:"yellow",
//     duration:1.5,
//     delay:2.5
// })

// gsap.to("#box_3",{
//     x:1500,
//     scale:0.5,
//     borderRadius:"50%",
//     duration:1.5,
//     delay:4
// })


let tl = gsap.timeline()


tl.to("#box_1",{
    x:1500,
    rotate:360,
    duration:2,
    delay:1
})

tl.to("#box_2",{
    x:1500,
    duration:2,
    backgroundColor: "yellow"
})

tl.to("#box_3",{
    x:1500,
    duration:2,
    borderRadius: "50%",
    scale: 0.5
})
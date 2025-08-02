let main=document.querySelector(".main")

let numSq=document.querySelector("#squares")

let square
let num
numSq.addEventListener("keydown",(event)=>{

    if (event.key=="Enter"){
        
        num=numSq.value

        for (let i=0;i<(num**2);i++){
        let a=document.createElement("div")
        a.style.flex=`1 1 ${100/num}%`
        a.style.height=`${100/num}%`
        a.className="b"
        main.appendChild(a)
        }
    }
})


let b=document.querySelectorAll(".b")
main.addEventListener("mouseover",(event)=>{
    if (event.target!=main){
        event.target.style.backgroundColor=`black`
    }
})
let reset=document.querySelector(".reset")
reset.addEventListener("click",()=>{
    let square
})
//event.target.style.backgroundColor=`#${(Math.floor(Math.random()*1000000)).toString().padStart(6,"0")}`
//for rainbow mode
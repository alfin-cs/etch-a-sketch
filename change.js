let main=document.querySelector(".main")

let numSq=document.querySelector("#squares")

let square
let num
numSq.addEventListener("keydown",(event)=> {

    if (event.key=="Enter"){
        createDiv()
    }
})
function createDiv(){
    main.innerHTML=""
        
    num=numSq.value
    

    for (let i=0;i<(num**2);i++){
        let a=document.createElement("div")
        a.style.flex=`1 1 ${100/num}%`
        a.style.height=`${100/num}%`
        a.className="b"
        main.appendChild(a)
    }
}


let b=document.querySelectorAll(".b")
console.log(b)
main.addEventListener("mouseover",(event)=>{
    if (!isActive){
        if (event.target!=main){
            event.target.style.backgroundColor=`black`
            event.target.style.opacity=`${(event.target.style.opacity)+0.1}`
        }
    }else{
        if (event.target!=main){
            event.target.style.background=`#${(Math.floor(Math.random()*1000000)).toString().padStart(6,"0")}`
        }
    }
    
})
let reset=document.querySelector(".reset")
reset.addEventListener("click",()=>{
     main.innerHTML=""
     createDiv()
})
let rainbow=document.querySelector(".rainbow")
let isActive = false;

let rainbowGradient = "linear-gradient(90deg, rgba(255,0,0) 0%, rgba(255,154,0) 10%, rgba(208,222,33) 20%, rgba(79,220,74) 30%, rgba(63,218,216) 40%, rgba(47,201,226) 50%, rgba(28,127,238) 60%, rgba(95,21,242) 70%, rgba(186,12,248) 80%, rgba(251,7,217) 90%, rgba(255,0,0) 100%)";

rainbow.addEventListener("click", () => {
  if (!isActive) {
    rainbow.style.background = rainbowGradient;
  } else {
    rainbow.style.background = "white"; // ⬅️ same property
  }
  isActive = !isActive;
});

//event.target.style.background=`#${(Math.floor(Math.random()*1000000)).toString().padStart(6,"0")}`
//for rainbow mode
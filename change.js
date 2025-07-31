let main=document.querySelector(".main")
for (i=0;i<100;i++){
    let a=document.createElement("div")
    a.style.flex=`1 1 ${100/10}%`
    a.className="b"
    main.appendChild(a)
}
main.addEventListener("hover",(event)=>{
    let div=event.target
    div.style.background
})
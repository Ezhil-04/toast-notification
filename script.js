let success=`<i class="fa-solid fa-circle-check" style="color: #54ff47;"></i>  Successfully completed`
let error=`<i class="fa-solid fa-circle-xmark" style="color: #f00000;"></i> Error occured`
let invalid=`<i class="fa-solid fa-circle-exclamation" style="color: #FFD43B;"></i> Invalid inputs`

function notify(msg){
    console.log(msg);
    let box=document.createElement("div");
    box.classList.add("box");
    box.innerHTML=msg;
    notifybox.appendChild(box);
    if(msg.includes("completed")){
        box.classList.add("success");
    }
    if(msg.includes("Error")){
        box.classList.add("error");
    }
    if(msg.includes("Invalid")){
        box.classList.add("invalid");
    }

    setTimeout(()=>{
        box.remove()
    },5000)

    
    
}

let btn1=document.getElementById("btn1");
let btn2=document.getElementById("btn2");
let btn3=document.getElementById("btn3");
let notifybox=document.getElementById("notifybox")


let fun1=notify.bind(null,success);
let fun2=notify.bind(null,error);
let fun3=notify.bind(null,invalid);
btn1.addEventListener("click",fun1)
btn2.addEventListener("click",fun2)
btn3.addEventListener("click",fun3)



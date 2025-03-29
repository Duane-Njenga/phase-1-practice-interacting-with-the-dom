let counter = document.getElementById("counter")

let counterValue = parseInt(counter.textContent);
let incrementInterval = setInterval(increment , 1000);
document.addEventListener("DOMContentLoaded", () =>{
    incrementInterval;

})

function increment(){
    counterValue++;
    counter.innerText = `${counterValue}`
    
}
let plus = document.getElementById('plus')
plus.addEventListener("click", increment)

function decrement(){
    counterValue --
}
let minus = document.getElementById('minus');
minus.addEventListener("click", decrement)

let like = document.getElementById('heart');
let count =0
like.addEventListener("click", () => {
    let likes = document.getElementsByTagName('ul');
    console.log(likes);
    
    if(counterValue === counterValue){
        count ++;
        let li = document.createElement("li");
        li.innerHTML = `${counterValue} has been liked<span>${count++}</span>times`
        count = 0;
        likes.innerText = `${li}`
        
        
    }else{
        count = 0 
    }
    
    

    // console.log(count);
    
    
    

})

let pauseBtn = document.getElementById('pause');
 
pauseBtn.addEventListener("click",() =>{
    if(pauseBtn.innerText === "pause"){
    clearInterval(incrementInterval)
    pauseBtn.innerText = `Resume`
    minus.setAttribute("disabled","disabled")
    plus.setAttribute("disabled","disabled")
    like.setAttribute("disabled","disabled")

    }else{
        pauseBtn.innerText = `pause`;
        incrementInterval = setInterval(increment , 1000);
        minus.removeAttribute("disabled","disabled")
        plus.removeAttribute("disabled","disabled")
        like.removeAttribute("disabled","disabled")

    }
})



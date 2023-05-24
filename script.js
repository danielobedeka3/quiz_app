const num1=Math.ceil(Math.random()*10)
const num2=Math.ceil(Math.random()*10)
const correctAns=num1*num2;
let score=JSON.parse(localStorage.getItem("score"));
const questionElm=document.getElementById("question");
const formEl=document.getElementById("form");
const inputEl=document.getElementById("input");
const scoreEl=document.getElementById("score")
scoreEl.innerText=`Sore: ${score}`

questionElm.innerText=`What is ${num1} by ${num2}?`

formEl.addEventListener("submit",()=>{
    const userAns=+inputEl.value;
    if( userAns===correctAns){
        score++
        console.log(score)
        updateLocalStorage()
    }
    else{
        score--
        console.log(score)
        updateLocalStorage()
    }

})

function updateLocalStorage(){
    localStorage.setItem("score",JSON.stringify(score))
}

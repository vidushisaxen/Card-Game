function one(){
    var card=document.getElementById("one");
    card.classList.add("hidden");
    var image = card.querySelector("img");
    image.style.display="none";
    console.log(card);
    
}
function two(){
    var card=document.getElementById("two");
    card.classList.add("hidden");
    var image = card.querySelector("img");
    image.style.display="none";
}
function three(){
    var card=document.getElementById("three");
    card.classList.add("hidden");
    var image = card.querySelector("img");
    image.style.display="none";
}
function four(){
    var card=document.getElementById("four");
    card.classList.add("hidden");
    var image = card.querySelector("img");
    image.style.display="none";
}
function five(){
    var card=document.getElementById("five");
    card.classList.add("hidden");
    var image = card.querySelector("img");
    image.style.display="none";
}
function six(){
    var card=document.getElementById("six");
    card.classList.add("hidden");
    var image = card.querySelector("img");
    image.style.display="none";
}
function seven(){
    var card=document.getElementById("seven");
    card.classList.add("hidden");
    var image = card.querySelector("img");
    image.style.display="none";
}
function eight(){
    var card=document.getElementById("eight");
    card.classList.add("hidden");
    var image = card.querySelector("img");
    image.style.display="none";
}

var a= document.querySelectorAll("img")
var b = document.querySelector(".result")
var prev="";
var cur="";

a.forEach((img)=>{
   
    cur="";
    img.addEventListener("click",function(event){
        console.log(cur);
        prev=cur;
        console.log(prev)
        cur = img.getAttribute("data-card");
        console.log(cur);
        if(prev == cur){
            b.textContent = "Winner";
        }
        else if(prev!=cur){
            var x = document.querySelector(`[data-card="${cur}"]`)
            var y = x.closest(".box"); 
            var m = document.querySelector(`[data-card="${prev}"]`)
            var n = x.closest(".box"); 
            revert(x,y,m,n);
            
        }
        
    })
})

function revert(x,y,m,n){
    console.log(x);
            console.log(y);
    var z=y.id;
    y.classList.remove("hidden");
    console.log(y);
    n.classList.remove("hidden");
    // var image = y.querySelector(x);
    // image.style.display="block";
}

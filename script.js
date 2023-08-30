var h = document.querySelector("#pl button")
flag=0
h.addEventListener("click",function(){
    if(flag ==0){
        h.innerHTML ="added to cart"
        h.style.backgroundColor = "lightgreen"
        h.style.color ="purple"
        flag =1
    }
    else{
        h.innerHTML ="add to cart"
        h.style.backgroundColor = "white"
        h.style.color ="black"
        flag= 0
    }
})

var q = document.querySelector("#lp button")
flag=0
q.addEventListener("click",function(){
    if(flag ==0){
        q.innerHTML ="added to cart"
        q.style.backgroundColor = "lightgreen"
        q.style.color ="purple"
        flag =1
    }
    else{
        q.innerHTML ="add to cart"
        q.style.backgroundColor = "white"
        q.style.color ="black"
        flag= 0
    }
})


var e= document.querySelector("#bp button")
flag=0
e.addEventListener("click",function(){
    if(flag ==0){
        e.innerHTML ="added to cart"
        e.style.backgroundColor = "lightgreen"
        e.style.color ="purple"
        flag =1
    }
    else{
        e.innerHTML ="add to cart"
        e.style.backgroundColor = "white"
        e.style.color ="black"
        flag= 0
    }
})

var o= document.querySelector("#pp button")
flag=0
o.addEventListener("click",function(){
    if(flag ==0){
        o.innerHTML ="added to cart"
        o.style.backgroundColor = "lightgreen"
        o.style.color ="purple"
        flag =1
    }
    else{
        o.innerHTML ="add to cart"
        o.style.backgroundColor = "white"
        o.style.color ="black"
        flag= 0
    }
})

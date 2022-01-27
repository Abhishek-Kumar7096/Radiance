let prev = document.getElementById("prev")
let next = document.getElementById("next")
let thumbnail = document.getElementsByClassName("thumbnail")
let hero = document.getElementById("hero")

let backgroungImg = ["images/bg1.png", "images/bg2.png", "images/bg3.png", "images/bg4.png", "images/bg5.png"]

let i = 0
next.onclick = function(){
    if(i<4){
        hero.style.backgroundImage = "url('" + backgroungImg[i+1]+"')"
        thumbnail[i+1].classList.add("active")
        thumbnail[i].classList.remove("active")
        i++
    }
    else{
        hero.style.backgroundImage = "url('" + backgroungImg[0]+"')"
        thumbnail[0].classList.add("active")
        thumbnail[i].classList.remove("active")
        i = 0
    }
}
prev.onclick = function(){
    if(i>0){
        hero.style.backgroundImage = "url('" + backgroungImg[i-1]+"')"
        thumbnail[i-1].classList.add("active")
        thumbnail[i].classList.remove("active")
        i--
    }
    else{
        hero.style.backgroundImage = "url('" + backgroungImg[4]+"')"
        thumbnail[4].classList.add("active")
        thumbnail[i].classList.remove("active")
        i = 4
    }
}




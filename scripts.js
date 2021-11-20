
//using getElementById you dont need #


    


let userImg = document.getElementById("userI")
let compImg = document.getElementById("compI")

let pics = [
    "Assets/rock.jpg",
    "Assets/paper.jpg",
    "Assets/scissors.jpg"]

let rbut = document.getElementById("rockB")
let pbut = document.getElementById("paperB")
let sbut = document.getElementById("scissorsB")

let options = ["rock","paper","scissors"]

let output = document.getElementById("winner")



///////////////////////////////////

rbut.addEventListener("click",function()
{

let seed = Math.round(Math.random() * 2)
let compchoice = options[seed]    
compImg.setAttribute("src", pics[seed])    
userchoice = "rock"
userImg.setAttribute("src", pics[0])

if(compchoice == 'rock')
{
    output.textContent = "tie!"
}
else if(compchoice == "paper")
{
    output.textContent = "You lose ;)"
}
else
{
    output.textContent = "You win!"
}



})

//////////////////////////////////

pbut.addEventListener("click",function()
{


let seed = Math.round(Math.random() * 2)
let compchoice = options[seed]        
compImg.setAttribute("src", pics[seed])    
userchoice = "paper"
userImg.setAttribute("src", pics[1])

if(compchoice == 'paper')
{
    output.textContent = "tie!"
}
else if(compchoice == 'scissors')
{
    output.textContent = "You lose ;)"
}
else
{
    output.textContent = "You win!"
}

})

////////////////////////////////////

sbut.addEventListener("click",function()
{

let seed = Math.round(Math.random() * 2)
let compchoice = options[seed]        
compImg.setAttribute("src", pics[seed])
userchoice = "scissors"
userImg.setAttribute("src", pics[2])

if(compchoice == 'scissors')
{
    output.textContent = "tie!"
}
else if(compchoice == 'rock')
{
    output.textContent = "You lose ;)"
}
else
{
    output.textContent = "You win!"
}

    
    })




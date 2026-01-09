let counter1 = 0
let counter2 = 0

let mainOutput1 = document.getElementById("counter1")
let mainOutput2 = document.getElementById("counter2")

function addLeft1(){
    counter1 = counter1 + 1
    mainOutput1.innerText = counter1
    
}

function addLeft2(){
    counter1 = counter1 + 2
    mainOutput1.innerText = counter1
}

function addLeft3(){
    counter1 = counter1 + 3
    mainOutput1.innerText = counter1   
}

function clearLeft(){
    counter1 = 0
    mainOutput1.innerText = counter1   
}





function addRight1(){
    counter2 = counter2 + 1
    mainOutput2.innerText = counter2
    
}

function addRight2(){
    counter2 = counter2 + 2
    mainOutput2.innerText = counter2
}

function addRight3(){
    counter2 = counter2 + 3
    mainOutput2.innerText = counter2 
}

function clearRight(){
    counter2 = 0
    mainOutput2.innerText = counter2  
}
var fullName = document.querySelector('#fullName')
var con2 = document.querySelector('#con2')
var con1 = document.querySelector('#con1')
var conCount = document.querySelector('#connectionCount')
var reqcounter = document.querySelector('#reqs')
rcounter = 2
counter = 500
console.log(reqcounter);

function nameChange(){
    fullName.innerHTML = "Alex Santana";
}

function remove(){
    con1.remove();
}

function remove2(){
    con2.remove();
}

function conCountadd(){
    counter ++;
    conCount.innerHTML = counter;
}

function rcountersub(){
    rcounter --;
    reqcounter.innerHTML = rcounter;
}
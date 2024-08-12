function addone(){
    document.getElementById("score-home").value++;
}

function addtwo(){
    let addtwo = document.getElementById("score-home");
    let value = parseInt(addtwo.value);
    newvalue = value + 2; 
    addtwo.value = newvalue;
}
function addthree(){
    let addthree = document.getElementById("score-home");
    let value = parseInt(addthree.value);
    newvalue = value + 3;
    addthree.value = newvalue;
}


function guestaddone(){
    document.getElementById("score-guest").value++;
}

function guestaddtwo(){
    let addtwo = document.getElementById("score-guest");
    let value = parseInt(addtwo.value);
    newvalue = value + 2;
    addtwo.value = newvalue;
}
function guestaddthree(){
    let addthree = document.getElementById("score-guest");
    let value = parseInt(addthree.value);
    newvalue = value + 3;
    addthree.value = newvalue;
}

function resetScores(){
    document.getElementById("score-home").value = 0;
    document.getElementById("score-guest").value = 0;
}
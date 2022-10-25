let contatore = 0;

function plus() {
 contatore++;
 document.getElementById("number").innerHTML=contatore
}

function minus() {
    if (contatore != 0) {
        contatore--;  
    }
    
    document.getElementById("number").innerHTML=contatore    
}

function reset() {
    if (contatore != 0) {
        contatore =0;  
    }
    
    document.getElementById("number").innerHTML=contatore    
}

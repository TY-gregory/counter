/// dynamic var///

let titleCounter = document.querySelector('#tit')

let counter = document.createElement('div');
counter.className = "counterNun";
counter.innerHTML = 0;
titleCounter.after(counter);

let boxButton = document.createElement('div');
boxButton.className = "button";
counter.after(boxButton);

let plus = document.createElement('div');
plus.className = "operator";
plus.innerHTML = "+";
boxButton.prepend(plus);


let minus = document.createElement('div');
minus.className = "operator";
minus.innerHTML = "-";
boxButton.prepend(minus);

let reset = document.createElement('div');
reset.className = "reset";
reset.innerHTML = "RESET";
boxButton.after(reset);


////// function //////

function plusnumber() {
    counter.innerHTML = +(counter.innerHTML) + 1; 
    
  };
  
  
  function minusnumber() {
    counter.innerHTML = +(counter.innerHTML) - 1;
    
  };
  
  
  function resetnumber() {
    counter.innerHTML = 0;
   
  };


  //// add event////
  
  plus.addEventListener('click', plusnumber);
  minus.addEventListener('click', minusnumber);
  reset.addEventListener('click', resetnumber);

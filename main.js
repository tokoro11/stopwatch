let display = document.getElementById("display");
let start = document.getElementById("start");
let stop = document.getElementById("stop");
let reset = document.getElementById("reset");

let hours = 0;
let minutes = 0;
let seconds =0;
let aSecond =0;

// let status;
// let interval;

function stopWatch(){
 aSecond++;
 if(aSecond /10 == 1){
   seconds++;
   aSecond = 0;
  
 if(seconds / 60 == 1){
    minutes++;
    seconds = 0;

     
 if(minutes / 60 == 1){
    hours++;
    minutes = 0;
  }
  }
  }

  display.innerHTML = hours + ":" + minutes + ":" + seconds + ":" + aSecond; 
  }

 start.addEventListener("click", function(){
   interval = setInterval(stopWatch, 100);
  }
  )
  
  
  
 stop.addEventListener("click", function(){
  clearInterval(interval);

  }
  )

reset.addEventListener("click", function(){
  clearInterval(interval);
  display.innerHTML = "0:0:0:0";
  $("#start").prop('disabled', false );
  }
  )

$(document).ready(function(){
  $("#start").click(function() {
  $("#start").prop('disabled', true);

  })
  })

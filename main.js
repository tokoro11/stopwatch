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
}
)

// $(document).ready(function(){
//   $("#start").click(function() {
//     $("#start").prop('disabled', true);

// })
// })


// function clickBtn1(){
	
// if (document.getElementById("clickBtn2").disabled === true){
//   document.getElementById("clickBtn2").removeAttribute("disabled");;

// }else{
//   // disabled属性を設定
//   document.getElementById("clickBtn2").setAttribute("disabled", true);
 
// }
// }

// #stop.prop( 'disabled', true )




// $(function() {
//   $("#start").change(function() {
//     $(button).prop('disabled', true);
//   });
// });

// $("#pugi").prop("disabled", false);

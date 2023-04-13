// const hamburger=document.querySelector('.hamburger');
const nav=document.getElementsByClassName('nav')[0];
const form=document.getElementsByTagName('form')[0];
// var limitFunc = function(){
//     if (window.innerWidth>800 && nav.style.display==="none"){
//        nav.style.display="";
//     }
// };
// var removeClass = function(){
//   if(window.innerWidth < 900){
    
//     for(let l=0;l<elements.length-1;l++){
//       console.log(l);
//       elements[l].classList.removeClass('rellax');
//     }
//   }
// }


// window.addEventListener('resize',removeClass);










// hamburger.addEventListener('click',function(){

    
//     this.classList.toggle('is-active');
    
//     if(nav.style.display==='block'){
//      nav.style.display='';   
//     }else{
//         nav.style.display='block'
//     }
// });

// window.addEventListener("resize", limitFunc);

var items = document.querySelectorAll("li");

function isItemInView(item){
  var rect = item.getBoundingClientRect();
  return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function callbackFunc() {
    for (var i = 0; i < items.length; i++) {
      if (isItemInView(items[i])) {
        items[i].classList.add("show");
      }
    }
  }

  // listen for events
  window.addEventListener("load", callbackFunc);
  window.addEventListener("resize", callbackFunc);
  window.addEventListener("scroll", callbackFunc);

  //canada
  let options = {
    startAngle: -1.55,
    size: 150,
    value: 0.85,
    fill: '#800020'
  }
  $(".circle .bar").circleProgress(options).on('circle-animation-progress',
  function(event, progress, stepValue){
    $(this).parent().find("span").text(String(stepValue.toFixed(2).substr(2)) + "%");
  });
  $(".js .bar").circleProgress({
    value: 0.80
  });
  $(".node .bar").circleProgress({
    value: 0.90
  });      
  $(".react .bar").circleProgress({
    value: 0.80
  });
  $(".ui .bar").circleProgress({
    value: 0.89
  });
  $(".linux .bar").circleProgress({
    value: 0.90
  });
  $(".git .bar").circleProgress({
    value: 0.84
  });







  
jQuery(document).ready(function($) {

    $(".scroll").click(function(){
    
    /* event.preventDefault(); */
    
    
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
    
    });
    
    });
    
    
    //메뉴 클릭시 자연스러운 스크롤 이동
    

    var bg = document.getElementsByClassName("frame-2");

setInterval(function(){
  var color = Math.random()*0xffffff;
  color = parseInt(color);
  color = color.toString(16);
  
  bg.style.background = "#" + color;
  
},3000);
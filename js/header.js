const header = document.querySelector('header');

function scrollEvent(){
    document.addEventListener("scroll", function(){
        if(document.documentElement.scrollTop > 100){
            header.classList.add("scroll_bar");
        }else{
            header.classList.remove("scroll_bar");
        }
    });
}

scrollEvent();



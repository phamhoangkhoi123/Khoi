/*==================================================
        PHK PREMIUM V3
        SCRIPT.JS
==================================================*/

"use strict";

/*==================================================
                SELECTOR
==================================================*/

const body = document.body;

const header = document.querySelector("header");

const loader = document.getElementById("loader");

const menuBtn = document.querySelector(".menu-btn");

const sidebar = document.querySelector(".sidebar");

const sidebarClose = document.querySelector(".sidebar-close");

const overlay = document.querySelector(".overlay");

const themeBtn = document.getElementById("theme-toggle");



/*==================================================
                LOADER
==================================================*/

window.addEventListener("load",()=>{

    if(!loader) return;

    setTimeout(()=>{

        loader.style.opacity="0";

        loader.style.visibility="hidden";

        loader.style.pointerEvents="none";

        setTimeout(()=>{

            loader.remove();

        },600);

    },1000);

});



/*==================================================
            HEADER SCROLL
==================================================*/

window.addEventListener("scroll",()=>{

    if(window.scrollY>30){

        header.classList.add("scrolled");

    }else{

        header.classList.remove("scrolled");

    }

});



/*==================================================
            SIDEBAR
==================================================*/

function openSidebar(){

    sidebar.classList.add("active");

    overlay.classList.add("active");

    body.style.overflow="hidden";

}

function closeSidebar(){

    sidebar.classList.remove("active");

    overlay.classList.remove("active");

    body.style.overflow="";

}



if(menuBtn){

    menuBtn.addEventListener("click",openSidebar);

}

if(sidebarClose){

    sidebarClose.addEventListener("click",closeSidebar);

}

if(overlay){

    overlay.addEventListener("click",closeSidebar);

}



/*==================================================
        CLOSE MENU WHEN CLICK LINK
==================================================*/

document.querySelectorAll(".sidebar a")

.forEach(link=>{

    link.addEventListener("click",()=>{

        closeSidebar();

    });

});



/*==================================================
            DARK MODE
==================================================*/

const savedTheme = localStorage.getItem("theme");

if(savedTheme==="light"){

    body.classList.add("light");

    if(themeBtn){

        themeBtn.textContent="☀️";

    }

}else{

    body.classList.remove("light");

    if(themeBtn){

        themeBtn.textContent="🌙";

    }

}



if(themeBtn){

themeBtn.addEventListener("click",()=>{

body.classList.toggle("light");

if(body.classList.contains("light")){

localStorage.setItem("theme","light");

themeBtn.textContent="☀️";

}else{

localStorage.setItem("theme","dark");

themeBtn.textContent="🌙";

}

});

}
/*==================================================
            SCROLL REVEAL
==================================================*/

const reveals = document.querySelectorAll(".reveal");

function revealOnScroll(){

    const trigger = window.innerHeight * 0.85;

    reveals.forEach(item=>{

        const top = item.getBoundingClientRect().top;

        if(top < trigger){

            item.classList.add("show");

        }

    });

}

window.addEventListener("scroll", revealOnScroll);

window.addEventListener("load", revealOnScroll);



/*==================================================
            BACK TO TOP
==================================================*/

const backTop = document.querySelector(".back-top");

window.addEventListener("scroll",()=>{

    if(!backTop) return;

    if(window.scrollY > 400){

        backTop.classList.add("show");

    }else{

        backTop.classList.remove("show");

    }

});

if(backTop){

    backTop.addEventListener("click",()=>{

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });

}



/*==================================================
            RIPPLE EFFECT
==================================================*/

document.querySelectorAll(".ripple").forEach(button=>{

button.addEventListener("click",function(e){

const circle=document.createElement("span");

const size=Math.max(this.clientWidth,this.clientHeight);

circle.style.width=size+"px";

circle.style.height=size+"px";

circle.style.left=(e.clientX-this.getBoundingClientRect().left-size/2)+"px";

circle.style.top=(e.clientY-this.getBoundingClientRect().top-size/2)+"px";

this.appendChild(circle);

setTimeout(()=>{

circle.remove();

},600);

});

});



/*==================================================
            ACTIVE NAV
==================================================*/

const navLinks=document.querySelectorAll(".navbar a");

navLinks.forEach(link=>{

link.addEventListener("click",()=>{

navLinks.forEach(item=>item.classList.remove("active"));

link.classList.add("active");

});

});



/*==================================================
            SMOOTH SCROLL
==================================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

const target=document.querySelector(this.getAttribute("href"));

if(!target) return;

e.preventDefault();

target.scrollIntoView({

behavior:"smooth"

});

});

});



/*==================================================
        RESIZE
==================================================*/

window.addEventListener("resize",()=>{

if(window.innerWidth>768){

closeSidebar();

}

});



/*==================================================
        ESC CLOSE
==================================================*/

window.addEventListener("keydown",(e)=>{

if(e.key==="Escape"){

closeSidebar();

}

});



/*==================================================
        END
==================================================*/

console.log(

"%cPHK PREMIUM V3",

"color:#7c5cff;font-size:18px;font-weight:bold;"

);

console.log(

"Website Ready 🚀"

);
/*======================================
    PHK PREMIUM WEBSITE
    SCRIPT.JS
=======================================*/

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if (loader) {

        setTimeout(() => {

            loader.style.opacity = "0";
            loader.style.visibility = "hidden";

            setTimeout(() => {

                loader.remove();

            }, 700);

        }, 1200);

    }

});

/*=========================
THEME
=========================*/

const themeBtn = document.getElementById("theme-toggle");

const body = document.body;

if (localStorage.getItem("theme") === "light") {

    body.classList.add("light");

    if (themeBtn) {

        themeBtn.innerHTML =
        '<i class="fa-solid fa-sun"></i>';

    }

}

if (themeBtn) {

themeBtn.addEventListener("click", () => {

body.classList.toggle("light");

if (body.classList.contains("light")) {

localStorage.setItem("theme", "light");

themeBtn.innerHTML =
'<i class="fa-solid fa-sun"></i>';

}

else {

localStorage.setItem("theme", "light");

themeBtn.innerHTML =
'<i class="fa-solid fa-moon"></i>';

}

});

}

/*=========================
Typing Effect
=========================*/

const typing = document.getElementById("typing");

const texts = [

"Frontend Developer",

"Website Designer",

"Content Creator",

"Welcome To My Website"

];

let textIndex = 0;

let charIndex = 0;

let deleting = false;

function typingEffect(){

if(!typing) return;

const current = texts[textIndex];

if(!deleting){

typing.textContent=current.substring(0,charIndex);

charIndex++;

if(charIndex>current.length){

deleting=true;

setTimeout(typingEffect,1800);

return;

}

}else{

typing.textContent=current.substring(0,charIndex);

charIndex--;

if(charIndex<0){

deleting=false;

charIndex=0;

textIndex++;

if(textIndex>=texts.length){

textIndex=0;

}

}

}

setTimeout(typingEffect,deleting?45:90);

}

typingEffect();

/*=========================
Progress Bar
=========================*/

const progressBar=document.getElementById("progress-bar");

window.addEventListener("scroll",()=>{

if(!progressBar) return;

const totalHeight=

document.documentElement.scrollHeight-

window.innerHeight;

const progress=

(window.scrollY/totalHeight)*100;

progressBar.style.width=progress+"%";

});

/*=========================
Back To Top
=========================*/

const back=document.getElementById("backToTop");

window.addEventListener("scroll",()=>{

if(!back) return;

if(window.scrollY>500){

back.classList.add("show");

}else{

back.classList.remove("show");

}

});

if(back){

back.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

}

/*=========================
Header Blur
=========================*/

const header=document.getElementById("header");

window.addEventListener("scroll",()=>{

if(!header) return;

if(window.scrollY>60){

header.style.background="rgba(8,8,15,.75)";

header.style.backdropFilter="blur(25px)";

header.style.boxShadow="0 10px 40px rgba(0,0,0,.3)";

}else{

header.style.background="rgba(255,255,255,.06)";

header.style.boxShadow="none";

}

});
/*=========================
SCROLL REVEAL
=========================*/

const revealElements = document.querySelectorAll(
".hero-card,.social-card,.stat-box,.about-card,.contact-card"
);

function revealOnScroll(){

    const trigger = window.innerHeight - 120;

    revealElements.forEach((item)=>{

        const top = item.getBoundingClientRect().top;

        if(top < trigger){

            item.classList.add("active");

        }

    });

}

window.addEventListener("scroll",revealOnScroll);

revealOnScroll();

/*=========================
RIPPLE EFFECT
=========================*/

document.querySelectorAll(
".primary-btn,.secondary-btn,.go-btn"
).forEach((button)=>{

button.addEventListener("click",function(e){

const circle=document.createElement("span");

circle.classList.add("ripple");

const size=Math.max(this.clientWidth,this.clientHeight);

circle.style.width=size+"px";

circle.style.height=size+"px";

const rect=this.getBoundingClientRect();

circle.style.left=(e.clientX-rect.left-size/2)+"px";

circle.style.top=(e.clientY-rect.top-size/2)+"px";

this.appendChild(circle);

setTimeout(()=>{

circle.remove();

},600);

});

});

/*=========================
SOCIAL CARD HOVER
=========================*/

const cards=document.querySelectorAll(".social-card");

cards.forEach((card)=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

const rotateY=((x/rect.width)-0.5)*12;

const rotateX=((y/rect.height)-0.5)*-12;

card.style.transform=
`perspective(800px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
translateY(-8px)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform="perspective(800px) rotateX(0) rotateY(0)";

});

});

/*=========================
FLOATING SHAPES
=========================*/

const shapes=document.querySelectorAll(".shape");

shapes.forEach((shape)=>{

let posX=0;

let posY=0;

setInterval(()=>{

posX=(Math.random()*40)-20;

posY=(Math.random()*40)-20;

shape.style.transform=
`translate(${posX}px,${posY}px)`;

},3500);

});

/*=========================
BUTTON HOVER SCALE
=========================*/

document.querySelectorAll(
".primary-btn,.secondary-btn,.go-btn"
).forEach((btn)=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transition=".3s";

btn.style.transform="scale(1.05)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="scale(1)";

});

});

/*=========================
COUNTER ANIMATION
=========================*/

const counters=document.querySelectorAll(".stat-box h2");

let counterPlayed=false;

function runCounter(){

if(counterPlayed) return;

const stats=document.querySelector(".stats");

if(!stats) return;

const top=stats.getBoundingClientRect().top;

if(top<window.innerHeight-100){

counterPlayed=true;

counters.forEach((counter)=>{

const target=parseInt(counter.innerText);

if(isNaN(target)) return;

let count=0;

const speed=Math.ceil(target/60);

const update=()=>{

count+=speed;

if(count>=target){

counter.innerText=target+"+";

}else{

counter.innerText=count+"+";

requestAnimationFrame(update);

}

};

update();

});

}

}

window.addEventListener("scroll",runCounter);

runCounter();
/*=========================
CUSTOM CURSOR
=========================*/

const cursorDot = document.querySelector(".cursor-dot");
const cursorOutline = document.querySelector(".cursor-outline");

if(cursorDot && cursorOutline){

document.addEventListener("mousemove",(e)=>{

const x=e.clientX;
const y=e.clientY;

cursorDot.style.left=x+"px";
cursorDot.style.top=y+"px";

cursorOutline.animate({

left:x+"px",
top:y+"px"

},{
duration:250,
fill:"forwards"

});

});

document.querySelectorAll("a,button").forEach(el=>{

el.addEventListener("mouseenter",()=>{

cursorOutline.style.transform="translate(-50%,-50%) scale(1.8)";
cursorOutline.style.borderColor="#7c5cff";

});

el.addEventListener("mouseleave",()=>{

cursorOutline.style.transform="translate(-50%,-50%) scale(1)";
cursorOutline.style.borderColor="rgba(255,255,255,.4)";

});

});

}

/*=========================
PARALLAX HERO
=========================*/

const hero=document.querySelector(".hero");

window.addEventListener("mousemove",(e)=>{

if(!hero) return;

const x=(e.clientX/window.innerWidth-0.5)*15;
const y=(e.clientY/window.innerHeight-0.5)*15;

hero.style.transform=
`translate(${x}px,${y}px)`;

});

/*=========================
PARALLAX AURORA
=========================*/

const aurora=document.querySelectorAll(".aurora span");

window.addEventListener("mousemove",(e)=>{

const mouseX=e.clientX/window.innerWidth;
const mouseY=e.clientY/window.innerHeight;

aurora.forEach((item,index)=>{

const speed=(index+1)*20;

item.style.transform=
`translate(${mouseX*speed}px,${mouseY*speed}px)`;

});

});

/*=========================
FADE IN
=========================*/

const fadeItems=document.querySelectorAll(

".hero-text,.avatar-box,.section-title,.footer-logo"

);

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.animate([

{

opacity:0,
transform:"translateY(50px)"

},

{

opacity:1,
transform:"translateY(0)"

}

],{

duration:800,
fill:"forwards"

});

}

});

},{threshold:.2});

fadeItems.forEach(item=>{

observer.observe(item);

});

/*=========================
BUTTON GLOW
=========================*/

document.querySelectorAll(

".primary-btn,.go-btn"

).forEach(btn=>{

btn.addEventListener("mousemove",(e)=>{

const rect=btn.getBoundingClientRect();

btn.style.setProperty(

"--x",

`${e.clientX-rect.left}px`

);

btn.style.setProperty(

"--y",

`${e.clientY-rect.top}px`

);

});

});

/*=========================
AUTO HIGHLIGHT NAV
=========================*/

const sections=document.querySelectorAll("section");
const navLinks=document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-150;

if(scrollY>=top){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});

/*=========================
SMOOTH SCROLL
=========================*/

navLinks.forEach(link=>{

link.addEventListener("click",(e)=>{

const href=link.getAttribute("href");

if(href.startsWith("#")){

e.preventDefault();

const target=document.querySelector(href);

if(target){

window.scrollTo({

top:target.offsetTop-100,

behavior:"smooth"

});

}

}

});

});

/*=========================
CONSOLE LOG
=========================*/

console.log(

"%c PHK PREMIUM WEBSITE ",

"background:#7c5cff;color:white;font-size:18px;padding:8px 18px;border-radius:20px;"

);
/*=====================================
    PHK PREMIUM WEBSITE
    PART 4 - FINAL
======================================*/

/*=========================
STAR BACKGROUND
=========================*/

function createStar(){

    const star=document.createElement("div");

    star.className="star";

    document.body.appendChild(star);

    const size=Math.random()*3+1;

    star.style.width=size+"px";
    star.style.height=size+"px";

    star.style.left=Math.random()*window.innerWidth+"px";
    star.style.top="-20px";

    star.style.opacity=Math.random();

    const duration=Math.random()*6000+4000;

    star.animate([

        {transform:"translateY(0px)",opacity:1},

        {transform:`translateY(${window.innerHeight+50}px)`,opacity:0}

    ],{

        duration:duration,

        easing:"linear"

    });

    setTimeout(()=>{

        star.remove();

    },duration);

}

setInterval(createStar,500);

/*=========================
CARD GLOW
=========================*/

document.querySelectorAll(".social-card").forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.boxShadow="0 25px 50px rgba(124,92,255,.35)";

});

card.addEventListener("mouseleave",()=>{

card.style.boxShadow="";

});

});

/*=========================
IMAGE FLOAT
=========================*/

const avatar=document.querySelector(".avatar");

if(avatar){

setInterval(()=>{

avatar.animate([

{

transform:"translateY(0px)"

},

{

transform:"translateY(-10px)"

},

{

transform:"translateY(0px)"

}

],{

duration:2500

});

},2500);

}

/*=========================
HEADER SHADOW
=========================*/

window.addEventListener("scroll",()=>{

const header=document.querySelector("header");

if(!header) return;

if(window.scrollY>50){

header.style.boxShadow="0 10px 40px rgba(0,0,0,.45)";

}else{

header.style.boxShadow="0 10px 30px rgba(0,0,0,.18)";

}

});

/*=========================
LAZY ANIMATION
=========================*/

const lazy=document.querySelectorAll("img");

const lazyObserver=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="scale(1)";

}

});

});

lazy.forEach(img=>{

img.style.opacity="0";

img.style.transform="scale(.95)";

img.style.transition=".8s";

lazyObserver.observe(img);

});

/*=========================
KEYBOARD SHORTCUT
=========================*/

document.addEventListener("keydown",(e)=>{

if(e.key==="Home"){

window.scrollTo({

top:0,

behavior:"smooth"

});

}

});

/*=========================
COPY EMAIL
=========================*/

const email=document.querySelector(".email-copy");

if(email){

email.addEventListener("click",()=>{

navigator.clipboard.writeText(email.innerText);

alert("Đã sao chép Email!");

});

}

/*=========================
ONLINE STATUS
=========================*/

const online=document.querySelector(".online");

if(online){

setInterval(()=>{

online.classList.toggle("pulse");

},1000);

}

/*=========================
PERFORMANCE
=========================*/

let ticking=false;

window.addEventListener("scroll",()=>{

if(!ticking){

window.requestAnimationFrame(()=>{

ticking=false;

});

ticking=true;

}

});

/*=========================
PRELOAD IMAGE
=========================*/

const preload=new Image();

preload.src="avatar.jpg";

/*=========================
END
=========================*/

console.log("%cWebsite Loaded Successfully ✔",
"color:#00ff99;font-size:15px;font-weight:bold;");
const images = [
"https://images.unsplash.com/photo-1501785888041-af3ef285b470",
"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
"https://images.unsplash.com/photo-1470770841072-f978cf4d019e",
"https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
];

const slider = document.querySelector(".hero-slider");

images.forEach(src=>{
const img=document.createElement("img");
img.src=src;
slider.appendChild(img);
});

let current=0;

function slideHero(){
current++;
if(current>=images.length){
current=0;
slider.style.transition="none";
slider.style.transform="translateX(0)";
setTimeout(()=>slider.style.transition="transform 1.2s ease-in-out",50);
return;
}
slider.style.transform=`translateX(-${current*100}vw)`;
}

setInterval(slideHero,10000);

function sendEnquiry(){
alert("Enquiry form removed. Please contact directly.");
}

/* Smooth Scroll */

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
anchor.addEventListener('click',function(e){
e.preventDefault();
document.querySelector(this.getAttribute('href')).scrollIntoView({
behavior:'smooth'
});
});
});
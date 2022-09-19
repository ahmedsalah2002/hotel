var swiper = new Swiper(".review-slider", {
  spaceBetween: 20,
  loop:true,
  autoplay: {
      delay: 2500,
      disableOnInteraction: false,
  },
  breakpoints: {
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
  },
});




let icons=document.querySelectorAll(".search");
let overlay=document.querySelector(".overlay");
let cancel=document.querySelector(".cancel");

icons[1].addEventListener("click",function(){
  overlay.style.display="flex"
  cancel.onclick=function(){
    overlay.style.display="none"
  }
  
})



let circle=document.querySelectorAll(".circle");
let video=document.querySelector(".video video");

circle[0].addEventListener("click",(e)=>{
  if(e.target.classList.contains("active")!==true){
    e.target.classList.add("active");
    circle[1].classList.remove("active");
    video.src=e.target.dataset.src
  }
})
circle[1].addEventListener("click",(e)=>{
  if(e.target.classList.contains("active")!==true){
    e.target.classList.add("active");
    circle[0].classList.remove("active");
    video.src=e.target.dataset.src
  }
})


let sections=document.querySelectorAll("section");
let navsLink=document.querySelectorAll("nav .navbar-nav a")


window.addEventListener('scroll' ,function () {
        sections.forEach((e)=>{
            let top=window.scrollY;
            let offset=e.offsetTop;
            let height=e.offsetHeight;
            let id =e.getAttribute("id")
            if(top>=offset-200 && top< offset+height){
                navsLink.forEach((links)=>{
                    links.classList.remove("active")
                    document.querySelector("nav .navbar-nav a[href*="+id+"]").classList.add("active")
                    
                })
            }
        })
})




let Speciality=document.querySelectorAll(".Speciality-cont");
let SpecialityImage=document.querySelectorAll(".Speciality-cont .spec-image img");


Speciality.forEach((e,i)=>{
  e.addEventListener('mouseover', (event) => {
    SpecialityImage[i].style.top="0%"
  });
  e.addEventListener('mouseleave', (event) => {
    SpecialityImage[i].style.top="-100%"
  });
})




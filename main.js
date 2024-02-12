document.addEventListener("DOMContentLoaded", function() {

window.addEventListener("scroll",()=>{
  document.querySelector(".navbar").classList.toggle
  ('window-scroll', window.scrollY >0)
});


// Navbar Menu

let Open = document.querySelector("#open");
let Close = document.querySelector("#close");
let Menu = document.querySelector(".navright ul");


  Open.addEventListener("click",()=>{
      Menu.style.display = "flex";
      Menu.style.right = "0";
      Close.style.display = "block";
      Open.style.display = "none";
  });

  Close.addEventListener("click",()=>{
      Menu.style.display = "none";
      Open.style.display = "block";
  });




// Single Product Js
let MainImg = document.querySelector(".MainImg");
let SPI = document.querySelectorAll(".SingleProductImages");
SPI.forEach(Img =>{
  Img.addEventListener("click",()=>{
    MainImg.src = Img.src;
  });
});


let FormBtn = document.querySelector(".submit");
    FormBtn.addEventListener("click",()=>{
        setTimeout(() => {
        let Inputs = document.querySelector(".emailid").value = ""; 
        },400);
    })




    // let ValidUrls = ["about", "blog", "cart", "contact", "index","404", "Sblog", "shop", "Sproduct", "thankyou"];

    // let CurrentUrl = window.location.pathname.split('/').pop().toLowerCase();
    
    // if (!ValidUrls.includes(CurrentUrl)) {
    //     console.log("Redirecting to 404.html");
    //     window.location.href = "/404.html";
    // }
    
    













});







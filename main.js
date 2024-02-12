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





// let ValidUrls = ["about", "blog", "cart", "contact", "index", "page-not-found", "Sblog", "shop", "Sproduct", "thankyou"];

// let CurrentUrl = window.location.pathname.split('/').pop().toLowerCase();

// if (!ValidUrls.includes(CurrentUrl)) {
//     console.log("Redirecting to page-not-found.html");
//     window.location.href = "/page-not-found.html";
// }


let ValidUrls = [
  "http://127.0.0.1:5500/about.html",
  "http://127.0.0.1:5500/blog.html",
  "http://127.0.0.1:5500/cart.html",
  "http://127.0.0.1:5500/contact.html",
  "http://127.0.0.1:5500/Index.html",
  // "http://127.0.0.1:5500/404.html", 
  "http://127.0.0.1:5500/Sblog.html", 
  "http://127.0.0.1:5500/shop.html", 
  "http://127.0.0.1:5500/Sproduct.html", 
  "http://127.0.0.1:5500/thankyou.html"
];

urlExists(ValidUrls);

async function urlExists(urls) {
  for (let i = 0; i < urls.length; i++) {
    try {
      let response = await fetch(urls[i], { method: 'HEAD' });

      if (!response.ok) {
        window.location.href = "/404.html";
        break; // Exit the loop if a non-OK response is encountered
      }
    } catch (error) {
      console.error('Error checking URL:', error);
      // Handle errors as needed
    }
  }
}












});







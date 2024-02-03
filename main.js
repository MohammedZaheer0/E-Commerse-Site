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



// Shop    
const products = document.querySelectorAll('.product');



products.forEach((product) => {
product.addEventListener('click', function () {
  
  window.location.href = "shop.html";
  const imageElement = product.querySelector('.product_image_is');
  const clothElement = product.querySelector('.cloth_is');
  const priceElement = product.querySelector('.price');

  let GetProductDetailes = JSON.parse(localStorage.getItem("ProductDetailes")) ?? [];  
  if (imageElement && clothElement && priceElement) {
    const imageSrc = imageElement.src;
    const clothName = clothElement.textContent;
    const price = priceElement.textContent;

    GetProductDetailes.push({
      image: imageSrc,
      clothName: clothName,
      price: price,
      uniqueId: Math.floor(Math.random()*100)
    });
    console.log(GetProductDetailes)
    localStorage.setItem("ProductDetailes",JSON.stringify(GetProductDetailes));

    window.location.href = "Sproduct.html";
    
  }
});

});


 let ProductData = ()=>{
let ProductDetailes = JSON.parse(localStorage.getItem("ProductDetailes")) ?? [];
console.log(ProductDetailes);

  ProductDetailes.forEach((Img,i) =>{
    let MainImageElement = document.querySelector(".MainImg");
    let clothNameElement = document.querySelector(".clothName");
    let clothPriceElement = document.querySelector(".clothprice");

  MainImageElement.src = Img.image;
  clothNameElement.textContent = Img.clothName;
  clothPriceElement.textContent = Img.price;
  });
}
ProductData();


let AddToCart = document.querySelector(".addToCart");
AddToCart.addEventListener("click",function(){
  ProductData();
  window.location.href = "cart.html";
  })

  let Xmark = document.querySelector(".delete");
  Xmark.addEventListener("click",()=>{
  localStorage.clear("ProductDetailes");
  });







// Single Product Js
let MainImg = document.querySelector(".MainImg");
let SPI = document.querySelectorAll(".SingleProductImages");
SPI.forEach(Img =>{
  Img.addEventListener("click",()=>{
    MainImg.src = Img.src;
  });
});


// From Input Clear
// let FormBtn = document.getElementById("submit");
// FormBtn.addEventListener("click",()=>{
//     let Inputs = document.querySelectorAll("#name, #email,#subject,#message");
//     Inputs.forEach(input =>{
//         input.value = "";
//     });
// });



});


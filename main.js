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
let AllProducts = document.querySelectorAll(".product");
AllProducts.forEach(Product => {
    Product.addEventListener("click",()=>{
        window.location.href = "Sproduct.html";
    });
});



// Single Product Js
let MainImg = document.getElementById("MainImg");
let SPI = document.querySelectorAll(".SingleProductImages");
SPI.forEach(Img =>{
    Img.addEventListener("click",()=>{
        MainImg.src = Img.src;
    });
});


// From Input Clear
let FormBtn = document.getElementById("submit");
FormBtn.addEventListener("click",()=>{
    let Inputs = document.querySelectorAll("#name, #email,#subject,#message");
    Inputs.forEach(input =>{
        input.value = "";
    });
});
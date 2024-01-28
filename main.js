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
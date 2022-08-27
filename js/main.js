let tabs = document.querySelectorAll(".tabs li");
let tabsArray = Array.from(tabs);
let divs = document.querySelectorAll(".content div");
let divsArray = Array.from(divs);

tabsArray.forEach((li)=>{
li.addEventListener("click",work)
});
function work(a){
    tabsArray.forEach((e)=>{
        e.classList.remove("active");
    });
    a.currentTarget.classList.add("active");
    divsArray.forEach((div)=>{
        div.style.display = "none";
    });
    document.querySelector(a.currentTarget.dataset.cont).style.display = "block";
}
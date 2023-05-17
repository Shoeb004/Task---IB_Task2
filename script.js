
let navlist =document.querySelector('.nav-list');
let openMenu =document.querySelector('.openMenu');
let CloseMenu =document.querySelector('.closeMenu');


openMenu.addEventListener('click',show);
CloseMenu.addEventListener('click',close);

function show(){
    navlist.style.display="flex";
    navlist.style.top="0";
    console.log("Hello Show")

}
function close(){
    navlist.style.top="-100%";
    console.log("Hello close")
}
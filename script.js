const navbar = document.querySelector(".nav-toggle");
const dropdown = document.querySelector(".dropdown-icon");
const close = document.querySelector(".icon-close");

dropdown.addEventListener ("click",function(){
    navbar.classList.toggle('show-links');
    dropdown.style.display = 'none'
    close.style.display = 'flex'
});

close.addEventListener ("click",function(){
    navbar.classList.toggle('show-links');
    close.style.display = 'none'
    dropdown.style.display = 'flex'
});

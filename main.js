let search = document.querySelector('.search-box');

document.querySelector('#search-icon').onclick = () => {
    search.classList.toggle('active');
    navbar.classList.remove('active');
}


let navbar = document.querySelector('.navbar');

document.querySelector('#menu-icon').onclick = () => {
    navbar.classList.toggle('active');
    search.classList.remove('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
    search.classList.remove('active');
}



let header = document.querySelector('header');

window.addEventListener('scroll', () => {
    header.classList.toggle('shadow',window.scrollY > 0);

});



// select the element
const counters = document.querySelectorAll('.counter1');


// iterate through all the counter elements
counters.forEach(counter1 => {
  // function to increment the counter
  function updateCount() {
    const target = +counter1.getAttribute('data-count');
    const count = +counter1.innerHTML;

    const inc = Math.floor((target - count) / 100);

    if (count < target && inc > 0) {
      counter1.innerHTML = (count + inc);
      // repeat the function
      setTimeout(updateCount, 100);
    }
    // if the count not equal to target, then add remaining count
    else {
      counter1.innerHTML = target;
    }
  }
  updateCount();
});

function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("btn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}    
window.addEventListener("load",()=>{
  const loader=document.querySelector(".loader");

  loader.classList.add("loader-hidden");
  loader.addEventListener("transitioned",()=>{
    document.body.removeChild("loader");
  })
})






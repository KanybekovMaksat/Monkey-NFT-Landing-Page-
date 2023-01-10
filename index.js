// fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
// {price.bpi.USD.rate}

  
  fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=ethereum')
  .then(response => response.json())
  .then(data => {
    const ethPrice = data[0].current_price;
    const ethPriceElement = document.querySelector('.launch__eth-title');
    ethPriceElement.textContent = `${ethPrice}$`
  });



  function showKyrgyzstanTime() {
  var kyrgyzstanTime = new Date();

  var hours = kyrgyzstanTime.getHours();
  var minutes = kyrgyzstanTime.getMinutes();
  var seconds = kyrgyzstanTime.getSeconds();
    
   const showTime = document.querySelector('.launch__time-title');
   showTime.textContent = `${hours}H ${minutes}M ${seconds}S`;
  }

setInterval(showKyrgyzstanTime, 1000);



window.onscroll = function() {
  if (window.pageYOffset >= 150) {
    document.querySelector(".navigation").style.display = "flex";
  }
  else{
    document.querySelector(".navigation").style.display = "none";
  }
};

let hours = 7;
let minutes = 60;
let seconds = 60;
let count = hours * minutes * seconds;

let counter = document.querySelectorAll('.trend__info-counter');


setInterval(function(){
    count--;

    let h = Math.floor(count / (60 * 60));
    let m = Math.floor(count % (60 * 60) / 60);
    let s = count % 60;

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
    
    counter.forEach(element => {
      element.textContent= `${h}h : ${m}m : ${s}s`
    });

    if (count === 0) {
        clearInterval();
    }
}, 1000);


function validateForm() {
  var inputs = document.getElementsByTagName("input");
  
  for (var i = 0; i < inputs.length; i++) {
    if (inputs[i].hasAttribute("required")) {
      if (inputs[i].value == "") {
        alert("Please fill out all required fields");
        return false;
      }
    }
  }
  return true;
}

const alert  = document.querySelector('.success-send');
const closeAlert = document.querySelector('.success__send-close');

closeAlert.addEventListener('click', () => {
  alert.style.transform = 'translateY(-999px)';
})

const form = document.getElementById("myForm");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const input = document.getElementById("input").value;
  try {
    fetch("https://63ba438b56043ab3c7986e49.mockapi.io/nftemail", {
      method: "POST",
      body: JSON.stringify({ input }),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.text())
      .then(() => alert.style.transform = "translateY(0px)")
      .then(() => form.reset())
      .catch((error) => {
        throw error;
      });
  } catch (error) {
    alert(error);
  }
});



const like = document.querySelector(".treasure__card-like");

like.addEventListener('click', () => {
  like.classList.toggle('treasure__card-liked')
})

//this is fetch for get ethereum price
  fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=ethereum')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    const ethPrice = data[0].current_price;
    const ethPriceElement = document.querySelector('.launch__eth-title');
    ethPriceElement.textContent = `${ethPrice}$`
  });



// this function for get date KG
  function showKyrgyzstanTime() {
  var kyrgyzstanTime = new Date();

  var hours = kyrgyzstanTime.getHours();
  var minutes = kyrgyzstanTime.getMinutes();
  var seconds = kyrgyzstanTime.getSeconds();
    
   const showTime = document.querySelector('.launch__time-title');
   showTime.textContent = `${hours}H ${minutes}M ${seconds}S`;
  }

setInterval(showKyrgyzstanTime, 1000);



//this function for visibility navigation of page
window.onscroll = function() {
  if (window.pageYOffset >= 150) {
    document.querySelector(".navigation").style.display = "flex";
  }
  else{
    document.querySelector(".navigation").style.display = "none";
  }
};



// this function for reverse counter
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



//this function for validate form
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


//customize alert(modal popup) object
const alert  = document.querySelector('.success-send');
const closeAlert = document.querySelector('.success__send-close');


//function close customize alert(modal popup)
closeAlert.addEventListener('click', () => {
  alert.style.transform = 'translateY(-999px)';
})

//this event to send email to server
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


//this event auto close alert(modal popup) after 5sec
form.addEventListener('submit', () =>{
  setTimeout(() => {
    alert.style.transform = "translateY(-999px)";
  }, 5000)
})


//initialization a aos(Animate On Scroll Library) 
AOS.init();


//this event for card add to favorite 
const likes = document.querySelectorAll('.treasure__card-like');


likes.forEach((like) => {
  like.addEventListener('click', () => {
    const saveId = like.getAttribute('id');
    if(like.classList.contains('treasure__card-liked')) {
      like.classList.remove('treasure__card-liked');
      like.classList.remove('collection__card-liked');
      localStorage.removeItem(saveId);
    } else {
      localStorage.setItem(saveId, true);
      like.classList.add('treasure__card-liked');
    }
  });
});



const collectionCards = document.querySelectorAll('.collection__card-like');

collectionCards.forEach((like) => {
  like.addEventListener('click', () => {
    const collectionId = like.getAttribute('id')
    if(like.classList.contains('collection__card-liked')) {
      localStorage.removeItem(collectionId);
    } else{
      localStorage.setItem(collectionId, true)
    }
    like.classList.toggle('collection__card-liked');
  })
})



window.onload = () => {
  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    let likedButton = document.getElementById(key);
    if(likedButton) {
      likedButton.classList.add('treasure__card-liked');
      likedButton.classList.add('collection__card-liked');
    }
    
  }
}


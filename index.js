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
  if (window.pageYOffset >= 300) {
    document.querySelector(".navigation").style.display = "flex";
  }
  else{
    document.querySelector(".navigation").style.display = "none";
  }
};
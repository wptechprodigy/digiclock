function clock() {
  // Get Current Date
  const fullDate = new Date();
  let currentHours = fullDate.getHours();
  let currentMinutes = fullDate.getMinutes();
  let currentSeconds = fullDate.getSeconds();
  
  let hours = document.querySelector('.hours');
  let minutes = document.querySelector('.minutes');
  let seconds = document.querySelector('.seconds');
  
  if (currentHours < 10) {
    currentHours = '0' + currentHours;
  }
  
  if (currentMinutes < 10) {
    currentMinutes = '0' + currentMinutes;
  }
  
  if (currentSeconds < 10) {
    currentSeconds = '0' + currentSeconds;
  }
  
  hours.innerHTML = currentHours;
  minutes.innerHTML = ': ' + currentMinutes;
  seconds.innerHTML = ': ' + currentSeconds;
}

setInterval(clock, 100);


// console.log(fullDate.getHours());


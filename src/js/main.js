const hourElm = document.getElementById('hour');
const minutesElm = document.getElementById('minutes');
const userDetailsBlock = document.querySelector('.user-details');
const greetBlock = document.querySelector('.greet_msg');
const greet_msg = document.getElementById('greet-msg');
const userNameElm = document.getElementById('user-name');
const submitBtn = document.getElementById('submit');

// function to set time
function setTime() {
  let now = new Date();

  hourElm.innerHTML = now.getHours();
  minutesElm.innerHTML = now.getMinutes();
}

//function for set User Details
function getDetails(e) {
  e.preventDefault();
  
  const userName = document.getElementById('user-name_value').value;

  JSON.stringify(localStorage.setItem('userNameKey', userName));
  
  userDetailsBlock.style.display = "none";
  greetBlock.style.display = 'block';
  setGreet();
}

// function for set Greet
function setGreet() {
  let userName = localStorage.getItem('userNameKey');
  let now = new Date();
  let hours = now.getHours();

  //set greet msg according to hours
  if(hours >= 4 && hours <= 12) {
    greet_msg.innerHTML =  'Good Morning';
  } else if(hours >= 13 && hours <= 16) {
    greet_msg.innerHTML = 'Good AfterNoon';
  } else if(hours >= 17 && hours <= 20) {
    greet_msg.innerHTML = 'Good Evening';
  } else if(hours >= 21 && hours <= 23){
    greet_msg.innerHTML = 'Good Night';
  } else if(hours >= 0 && hours <= 3) {
    greet_msg.innerHTML = 'Good Night';
  }

  userNameElm.innerHTML = userName; 
}



function init() {
  //Setting Time
  setTimeout(setTime, 1000);

  //Check Username is present in localStorage or not
  if(localStorage.getItem('userNameKey') === null) {
    userDetailsBlock.style.display = 'block';
    submitBtn.addEventListener('click', getDetails);
  } else {
    greetBlock.style.display = 'block';
    setGreet();
  }
}

init();
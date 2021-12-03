var DATECLASS = new Date();
var WEEKDAYS = ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'];

function getUsername() {
  let username = prompt("Adınızı Giriniz");
  let pageUsername = document.querySelector("#username");

  if (username == null || username == ""){
    username = "Anonim Kullanıcı"
  }
  pageUsername.innerHTML = username;

};

function date() {
  const year = DATECLASS.getFullYear();
  const month = (DATECLASS.getMonth() + 1);
  const day = DATECLASS.getDate();
  const weekday = WEEKDAYS[DATECLASS.getDay()];

  let dayObject = document.querySelector("#day");
  let monthObject = document.querySelector("#month");
  let yearObject = document.querySelector("#year");
  let weekdayObject = document.querySelector("#weekday");

  dayObject.innerHTML = (day < 10) ? ("0"+day) : day;
  monthObject.innerHTML += (month < 10) ? ("0"+month) : month;
  yearObject.innerHTML += year;
  weekdayObject.innerHTML = weekday;
};

function time() { 
  const hour = new Date().getHours();
  const minute = new Date().getMinutes();
  const second = new Date().getSeconds();

  let hourObject = document.querySelector("#hour");
  let minuteObject = document.querySelector("#minute");
  let secondObject = document.querySelector("#second");

  hourObject.textContent = `${(hour < 10) ? ("0"+hour) : hour} `;
  minuteObject.textContent = `: ${(minute < 10) ? ("0"+minute) : minute} `;
  secondObject.textContent = `: ${(second < 10) ? ("0"+second) : second}`;

  setTimeout(time, 1000);
};

getUsername();
date();
time();

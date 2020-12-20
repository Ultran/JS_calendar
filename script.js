const dayOne = document.querySelector(".day-one");
const dayTwo = document.querySelector(".day-two");
const dayThree = document.querySelector(".day-three");
const dayFour = document.querySelector(".day-four");
const dayFive = document.querySelector(".day-five");
const daySix = document.querySelector(".day-six");
const daySeven = document.querySelector(".day-seven");

const todayDate = new Date();

let newDate = 0;

const addWeek = function () {
  newDate.setDate(newDate.getDate() + 1);
  setNewDate(newDate);
  console.log(newDate);
};

const subtractWeek = function () {
  newDate.setDate(newDate.getDate() - 13);
  setNewDate(newDate);
  console.log(newDate);
};

function setNewDate(dateInput) {
  function addDay(dateInput) {
    newDate = dateInput;
    newDate.setDate(newDate.getDate() + 1);
    return newDate;
  }
  dayOne.textContent = dateInput;
  dayTwo.textContent = addDay(dateInput);
  dayThree.textContent = addDay(dateInput);
  dayFour.textContent = addDay(dateInput);
  dayFive.textContent = addDay(dateInput);
  daySix.textContent = addDay(dateInput);
  daySeven.textContent = addDay(dateInput);
}

setNewDate(todayDate);

document.querySelector(".button-right").addEventListener("click", addWeek);
document.querySelector(".button-left").addEventListener("click", subtractWeek);

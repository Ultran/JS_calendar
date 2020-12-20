class Calendar {
  constructor(startedTimestamp) {
    if (isNaN(startedTimestamp.getTime())) {
      throw new Error("invalid date");
    }

    this.now = new Date(startedTimestamp);
  }

  createButtons() {
    const calcContainer = document.querySelector(".calendar");
    const buttonPrevious = document.createElement("button");
    const buttonNext = document.createElement("button");
    buttonPrevious.textContent = "last week";
    buttonNext.textContent = "next week";
    buttonPrevious.classList.add("button1");
    buttonNext.classList.add("button2");
    calcContainer.appendChild(buttonPrevious);
    calcContainer.appendChild(buttonNext);
    buttonPrevious.addEventListener("click", this.lastweek);
    buttonNext.addEventListener("click", this.nextWeek);
  }

  createCalendar() {
    const calcContainer = document.querySelector(".calendar");
    let addDate = this.now;

    for (let i = 0; i < 7; i++) {
      const div = document.createElement("div");
      div.classList.add("calendar__day");
      div.textContent = addDate;
      calcContainer.appendChild(div);
      addDate.setDate(addDate.getDate() + 1);
    }
    this.createButtons();
  }

  nextWeek() {
    for (let i = 1; i < 8; i++) {
      document.querySelector(`.calendar__day:nth-child(${i})`).textContent =
        calendar.now;
      calendar.now.setDate(calendar.now.getDate() + 1);
    }
  }
  lastweek() {
    calendar.now.setDate(calendar.now.getDate() - 14);
    for (let i = 1; i < 8; i++) {
      document.querySelector(`.calendar__day:nth-child(${i})`).textContent =
        calendar.now;
      calendar.now.setDate(calendar.now.getDate() + 1);
    }
  }
}

const startDate = new Date();
const calendar = new Calendar(startDate);
calendar.createCalendar();

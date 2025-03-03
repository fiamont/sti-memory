console.log("level1");

const timer = document.getElementById("timer");
let timerInterval;
let myData = [];

window.onload = function startTimer() {
  clearInterval(timerInterval);
  let second = 0,
    minute = 0,
    hour = 0;

  timerInterval = setInterval(function () {
    timer.innerHTML =
      (hour ? hour + ":" : "") +
      (minute < 10 ? "0" + minute : minute) +
      ":" +
      (second < 10 ? "0" + second : second);
    second++;

    if (second == 60) {
      minute++;
      second = 0;
    }
    if (minute == 60) {
      hour++;
      minute = 0;
    }
  }, 1000);
};

const section = document.querySelector("section");

//get data
const getData = () => [
  {
    name: "Butterfly",
    image: "/images/butterfly.png",
  },
  {
    name: "Cat",
    image: "/images/cat.png",
  },
  {
    name: "Dino",
    image: "/images/dino.png",
  },
  {
    name: "Dog",
    image: "/images/dog.png",
  },
  {
    name: "Dolphin",
    image: "/images/dolphin.png",
  },
  {
    name: "Elephant",
    image: "/images/elephant.png",
  },
  {
    name: "Butterfly",
    image: "/images/butterfly.png",
  },
  {
    name: "Cat",
    image: "/images/cat.png",
  },
  {
    name: "Dino",
    image: "/images/dino.png",
  },
  {
    name: "Dog",
    image: "/images/dog.png",
  },
  {
    name: "Dolphin",
    image: "/images/dolphin.png",
  },
  {
    name: "Elephant",
    image: "/images/elephant.png",
  },
];

//Randomize
const randomize = () => {
  const cardData = getData();
  cardData.sort(() => Math.random() - 0.5);
  return cardData;
};

//Cardgenerator function
const cardGenerator = () => {
  const cardData = randomize();
  console.log(cardData);
  //Generate the HTML
  cardData.forEach((item) => {
    const card = document.createElement("div");
    const face = document.createElement("img");
    const back = document.createElement("div");
    card.classList = "card";
    face.classList = "face";
    back.classList = "back";
    //attach the info to the cards
    face.src = item.image;
    card.setAttribute("name", item.name);
    //attach the cards to the section
    section.appendChild(card);
    card.appendChild(face);
    card.appendChild(back);

    card.addEventListener("click", (e) => {
      card.classList.toggle("toggleCard");
      checkCard(e);
    });
  });

  //Check cards
  const checkCard = (e) => {
    console.log(e);
    const clickedCard = e.target;
    clickedCard.classList.add("flipped");
    const flippedCards = document.querySelectorAll(".flipped");

    if (flippedCards.length === 2) {
      if (
        flippedCards[0].getAttribute("name") ===
        flippedCards[1].getAttribute("name")
      ) {
        console.log("match");
        flippedCards.forEach((card) => {
          card.classList.remove("flipped");
          card.style.pointerEvents = "none";
          card.classList.add("done");
        });
      } else {
        console.log("wrong");
        flippedCards.forEach((card) => {
          card.classList.remove("flipped");
          setTimeout(() => card.classList.remove("toggleCard"), 1000);
        });
      }
    }
    const allCards = document.querySelectorAll(".done");
    if (allCards.length === 12) {
      console.log("Done! Congratulations!!!");
      delay();
      stopTimer();
    }
  };

  let stopedTime;

  function delay() {
    timeout = setTimeout(modalFunc, 1500);
  }

  function modalFunc() {
    const congrats = document.getElementById("modal");
    congrats.classList.add("active");
  }

  function stopTimer() {
    clearInterval(timerInterval);
    stopedTime = timer.innerHTML;
    console.log(stopedTime);
  }
};

cardGenerator();

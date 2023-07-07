console.log("level3");

const timer = document.getElementById("timer");
let timerInterval;
let myData = [];

//get data from json
/*const generateGetData = () => {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", "/js/level.json");
  //xhr.open("GET", "https://fiamont-backend.herokuapp.com/levelThree", false)
  //xhr.open("GET", "http://localhost:3001/levelThree", false)
  xhr.send();
  let data = JSON.parse(xhr.response);
  myData = [];
  for (i = 0; i < 16; i++) {
    myData.push(data[i]);
    myData.push(data[i]);
  }
  console.log("AJAX Run");
  console.log(myData);
};*/

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
    image: "https://openclipart.org/image/400px/281767",
  },
  {
    name: "Cat",
    image: "https://openclipart.org/image/400px/227472",
  },
  {
    name: "Dino",
    image: "https://openclipart.org/image/400px/314119",
  },
  {
    name: "Dog",
    image: "https://openclipart.org/image/400px/17692",
  },
  {
    name: "Dolphin",
    image: "https://openclipart.org/image/400px/300661",
  },
  {
    name: "Elephant",
    image: "https://openclipart.org/image/400px/83479",
  },
  {
    name: "Frog",
    image: "https://openclipart.org/image/400px/169932",
  },
  {
    name: "Hippo",
    image: "https://openclipart.org/image/400px/22337",
  },
  {
    name: "Honeybee",
    image: "https://openclipart.org/image/400px/191898",
  },
  {
    name: "Horse",
    image: "https://openclipart.org/image/400px/170851",
  },
  {
    name: "Lion",
    image: "https://openclipart.org/image/400px/335742",
  },
  {
    name: "Mouse",
    image: "https://openclipart.org/image/400px/17558",
  },
  {
    name: "Owl",
    image: "https://openclipart.org/image/400px/168873",
  },
  {
    name: "Sloth",
    image: "https://openclipart.org/image/400px/335271",
  },
  {
    name: "Turtle",
    image: "https://openclipart.org/image/400px/173367",
  },
  {
    name: "Zebra",
    image: "https://openclipart.org/image/400px/314473",
  },
  {
    name: "Butterfly",
    image: "https://openclipart.org/image/400px/281767",
  },
  {
    name: "Cat",
    image: "https://openclipart.org/image/400px/227472",
  },
  {
    name: "Dino",
    image: "https://openclipart.org/image/400px/314119",
  },
  {
    name: "Dog",
    image: "https://openclipart.org/image/400px/17692",
  },
  {
    name: "Dolphin",
    image: "https://openclipart.org/image/400px/300661",
  },
  {
    name: "Elephant",
    image: "https://openclipart.org/image/400px/83479",
  },
  {
    name: "Frog",
    image: "https://openclipart.org/image/400px/169932",
  },
  {
    name: "Hippo",
    image: "https://openclipart.org/image/400px/22337",
  },
  {
    name: "Honeybee",
    image: "https://openclipart.org/image/400px/191898",
  },
  {
    name: "Horse",
    image: "https://openclipart.org/image/400px/170851",
  },
  {
    name: "Lion",
    image: "https://openclipart.org/image/400px/335742",
  },
  {
    name: "Mouse",
    image: "https://openclipart.org/image/400px/17558",
  },
  {
    name: "Owl",
    image: "https://openclipart.org/image/400px/168873",
  },
  {
    name: "Sloth",
    image: "https://openclipart.org/image/400px/335271",
  },
  {
    name: "Turtle",
    image: "https://openclipart.org/image/400px/173367",
  },
  {
    name: "Zebra",
    image: "https://openclipart.org/image/400px/314473",
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
    if (allCards.length === 32) {
      console.log("Done! Congratulations!");
      delay();
      stopTimer();
      //delay2();
    }
  };

  let name;
  let stopedTime;

  function delay() {
    timeout = setTimeout(modalFunc, 1500);
  }

  function modalFunc() {
    const congrats = document.getElementById("modal");
    congrats.classList.add("active");
  }
  function delay2() {
    timeout = setTimeout(alertFunc, 3000);
  }

  function alertFunc() {
    name = window.prompt("Enter name to save your time to highscore!:");
    console.log(name);
  }

  function stopTimer() {
    clearInterval(timerInterval);
    stopedTime = timer.innerHTML;
    console.log(stopedTime);
  }
};
cardGenerator();

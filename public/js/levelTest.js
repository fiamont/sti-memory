console.log("level 1")

const timer = document.getElementById('timer');
let timerInterval;

window.onload = function startTimer() {
    clearInterval(timerInterval);
    let second = 0,
      minute = 0,
      hour = 0;
  
    timerInterval = setInterval(function () {
      timer.innerHTML =
        (hour ? hour + ':' : '') +
        (minute < 10 ? '0' + minute : minute) +
        ':' +
        (second < 10 ? '0' + second : second);
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

age();

function age(){
    var xhr = new XMLHttpRequest()
    // xhr.open("GET", "http://localhost:3001/highscore")
    //xhr.open("GET", "http://fiamont-backend.herokuapp.com/highscore")
    xhr.open("GET", "/js/levelOne.json")
    xhr.onload = function() {
        var data = JSON.parse(this.response);
        createSection(data);
    
    }
    xhr.send();
}

function createSection(data){
    var appElement = document.getElementById("levelOne")

    
    appElement.appendChild(createImage(data[0].image, data[0].name))
    appElement.appendChild(createImage(data[1].image, data[1].name))
    appElement.appendChild(createImage(data[2].image, data[2].name))
    appElement.appendChild(createImage(data[3].image, data[3].name))
    appElement.appendChild(createImage(data[4].image, data[4].name))
    appElement.appendChild(createImage(data[5].image, data[5].name))
    appElement.appendChild(createImage(data[0].image, data[0].name))
    appElement.appendChild(createImage(data[1].image, data[1].name))
    appElement.appendChild(createImage(data[2].image, data[2].name))
    appElement.appendChild(createImage(data[3].image, data[3].name))
    appElement.appendChild(createImage(data[4].image, data[4].name))
    appElement.appendChild(createImage(data[5].image, data[5].name))

}
function createImage(url, name){
    var anImage = document.createElement("img")
    anImage.src=url
    anImage.id=name
    anImage.classList.add("face")
    return anImage;
}
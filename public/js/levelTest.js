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

    for(i=0;i<12;i++){
      appElement.appendChild(createImage(data[i].image, data[i].name))
    }

}
function createImage(url, name){
    var anImage = document.createElement("img")
    anImage.src=url
    anImage.id=name
    anImage.classList.add("face")
    return anImage;
}
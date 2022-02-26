console.log("level 1")

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

    /* appElement.appendChild(createAFrontCard())
    appElement.appendChild(createAFrontCard())
    appElement.appendChild(createAFrontCard())
    appElement.appendChild(createAFrontCard())
    appElement.appendChild(createAFrontCard())
    appElement.appendChild(createAFrontCard())
    appElement.appendChild(createAFrontCard())
    appElement.appendChild(createAFrontCard())
    appElement.appendChild(createAFrontCard())
    appElement.appendChild(createAFrontCard())
    appElement.appendChild(createAFrontCard())
    appElement.appendChild(createAFrontCard()) */
    appElement.appendChild(createImage(data[0].image))
    appElement.appendChild(createImage(data[1].image))
    appElement.appendChild(createImage(data[2].image))
    appElement.appendChild(createImage(data[3].image))
    appElement.appendChild(createImage(data[4].image))
    appElement.appendChild(createImage(data[5].image))
    appElement.appendChild(createImage(data[0].image))
    appElement.appendChild(createImage(data[1].image))
    appElement.appendChild(createImage(data[2].image))
    appElement.appendChild(createImage(data[3].image))
    appElement.appendChild(createImage(data[4].image))
    appElement.appendChild(createImage(data[5].image))
    /* appElement.appendChild(createABackCard())
    appElement.appendChild(createABackCard())
    appElement.appendChild(createABackCard())
    appElement.appendChild(createABackCard())
    appElement.appendChild(createABackCard())
    appElement.appendChild(createABackCard())
    appElement.appendChild(createABackCard())
    appElement.appendChild(createABackCard())
    appElement.appendChild(createABackCard())
    appElement.appendChild(createABackCard())
    appElement.appendChild(createABackCard())
    appElement.appendChild(createABackCard()) */

}
function createImage(url){
    var anImage = document.createElement("img")
    anImage.src=url
    anImage.classList.add("face")
    return anImage;
}
function createAFrontCard(){
    var aFrontCard = document.createElement("div")
    aFrontCard.classList.add("card")
    return aFrontCard;
}
function createABackCard(){
    var aBackCard = document.createElement("div")
    aBackCard.classList.add("back")
    return aBackCard;
}
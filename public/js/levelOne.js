console.log("level1")

age();

function age(){
    var xhr = new XMLHttpRequest()
    xhr.open("GET", "/js/data.json")
    xhr.onload = function() {
        var data = JSON.parse(this.response);
        createCard(data);
    }
    xhr.send()
}

function createCard(data){
    var appElement = document.getElementById("levelOne")
    var aCard = document.createElement("img")
    appElement.appendChild(aCard)
    aCard.appendChild(createImage(data[0].image))

}

function createImage(url){
    var anImage = document.createElement("img")
    anImage.src=url
    anImage.classList.add("image")
    aCell.appendChild(anImage)
    return anImage;
}

const section = document.querySelector('section');

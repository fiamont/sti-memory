console.log("level1")

age();

function age(){
    var xhr = new XMLHttpRequest()
    xhr.open("GET", "C:\Java\kursenJavaScript\sti-frontend\public\js\levelOne.json")
    xhr.onload = function() {
        var data = JSON.parse(this.response);
        createCardStack(data)
    }
    xhr.send()
}

function createCardStack(){
    var appElement = document.getElementById("levelOne")
    var aCard = document.createElement("image")
    appElement.appendChild(aCard)


    aTable.appendChild(createCard(data[0].name, data[0].image))
    aTable.appendChild(createCard(data[1].image))
    aTable.appendChild(createCard(data[2].image))
    aTable.appendChild(createCard(data[3].image))
    aTable.appendChild(createCard(data[4].image))
    aTable.appendChild(createCard(data[5].image))
    aTable.appendChild(createCard(data[6].image))
    aTable.appendChild(createCard(data[7].image))
    aTable.appendChild(createCard(data[8].image))
    aTable.appendChild(createCard(data[9].image))
    aTable.appendChild(createCard(data[10].image))
    aTable.appendChild(createCard(data[11].image))
    aTable.appendChild(createCard(data[12].image))
    aTable.appendChild(createCard(data[13].image))
    aTable.appendChild(createCard(data[14].image))
    aTable.appendChild(createCard(data[15].image))

}

function createCard(image){
    var aCard = document.createElement("image")
    aRow.appendChild(createCell(image))
    return aCard;
}
console.log("homepage")

age();

function age(){
    var xhr = new XMLHttpRequest()
    // xhr.open("GET", "http://localhost:3001/highscore")
    //xhr.open("GET", "http://fiamont-backend.herokuapp.com/highscore")
    xhr.open("GET", "/js/data.json")
    xhr.onload = function() {
        var data = JSON.parse(this.response);
        createTable(data);
    
    }
    xhr.send();
}

function createTable(data){
    var appElement = document.getElementById("highscore")

    var mainHeading = document.createElement("h3")
    mainHeading.innerHTML = "Fastest player"
    appElement.appendChild(mainHeading)

    var aHeading = document.createElement("h4")
    aHeading.innerHTML = "Level 1"
    appElement.appendChild(aHeading)

    var aTable = document.createElement("table")
    appElement.appendChild(aTable)
    aTable.appendChild(createRow(data[0].time, data[0].player, data[0].image))
    aTable.appendChild(createRow(data[1].time, data[1].player, data[1].image))
    aTable.appendChild(createRow(data[2].time, data[2].player, data[2].image))
    

    var anotherHeading = document.createElement("h4")
    anotherHeading.innerHTML = "Level 2"
    appElement.appendChild(anotherHeading)
    var anotherTable = document.createElement("table")
    appElement.appendChild(anotherTable)
    anotherTable.appendChild(createRow(data[3].time, data[3].player, data[3].image))
    anotherTable.appendChild(createRow(data[1].time, data[1].player, data[1].image))
    anotherTable.appendChild(createRow(data[2].time, data[2].player, data[2].image)) 


}
function createRow(time, player, url){
    var aRow = document.createElement("tr")
    aRow.appendChild(createImageCell(url))
    aRow.appendChild(createCell(time))
    aRow.appendChild(createCell(player))
    return aRow;
}
function createCell(content){
    var aCell = document.createElement("td")
    aCell.innerHTML = content
    return aCell;


}
function createImageCell(url){
    var aCell = document.createElement("td")
    var anImage = document.createElement("img")
    anImage.src=url
    anImage.classList.add("tableLogo")
    aCell.appendChild(anImage)
    return aCell;
}


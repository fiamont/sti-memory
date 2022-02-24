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
    var aHeading = document.createElement("h3")
    aHeading.innerHTML = "HIGHSCORE"
    appElement.appendChild(aHeading)
    var aTable = document.createElement("table")
    appElement.appendChild(aTable)
    aTable.appendChild(createRow(data[0].name, data[0].points, data[0].player, data[0].url))
    aTable.appendChild(createRow(data[1].name, data[1].points, data[1].player, data[1].url))
    aTable.appendChild(createRow(data[2].name, data[2].points, data[2].player, data[2].url))
    aTable.appendChild(createRow(data[3].name, data[3].points, data[3].player, data[3].url))

}
function createRow(name, points, player, url){
    var aRow = document.createElement("tr")
    aRow.appendChild(createImageCell(url))
    aRow.appendChild(createCell(name))
    aRow.appendChild(createCell(points))
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


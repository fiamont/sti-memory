
age();

function age(){
    var xhr = new XMLHttpRequest()
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
    aHeading.innerHTML = "Highscore"
    appElement.appendChild(aHeading)
    var aTable = document.createElement("table")
    appElement.appendChild(aTable)
    aTable.appendChild(createRow(data[0].name, data[0].points))
    aTable.appendChild(createRow(data[1].name, data[1].points))
    aTable.appendChild(createRow(data[2].name, data[2].points))

}
function createRow(name, points){
    var aRow = document.createElement("tr")
    aRow.appendChild(createCell(name))
    aRow.appendChild(createCell(points))
    return aRow;
}
function createCell(content){
    var aCell = document.createElement("td")
    aCell.innerHTML = content
    return aCell;


}


var tableData = [
    {name:"Tetris", points:56}
    ,{name:"Memory", points:50}
    ,{name:"Snake", points:48}
]
tableData = JSON.stringify(tableData)
console.log(tableData)

var ettElement = document.getElementById("app")

var aTable = document.createElement("table")
aTable.appendChild(createRow())

ettElement.appendChild(aTable)



function buttonClick(){
    aTable.appendChild(createRow())
}

function createRow(){
    var aRow = document.createElement("tr") 
    aRow.appendChild(createCell())   
    return aRow
}

function createCell(){
    var aCell = document.createElement("td")
    return aCell;
}

function createTable(){
    
}
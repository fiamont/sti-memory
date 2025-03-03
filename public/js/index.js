function createTable(data) {
  var appElement = document.getElementById("fastestPlayer");

  var mainHeading = document.createElement("h3");
  mainHeading.innerHTML = "Fastest player";
  mainHeading.id = "fastestPlayerHeader";
  appElement.appendChild(mainHeading);

  var aTable = document.createElement("table");
  appElement.appendChild(aTable);
  aTable.appendChild(
    createRow(data[0].level, data[0].time, data[0].player, data[0].image)
  );
  aTable.appendChild(
    createRow(data[0].level, data[0].time, data[0].player, data[0].image)
  );
  aTable.appendChild(
    createRow(data[1].level, data[1].time, data[1].player, data[1].image)
  );
  aTable.appendChild(
    createRow(data[1].level, data[1].time, data[1].player, data[1].image)
  );
  aTable.appendChild(
    createRow(data[2].level, data[2].time, data[2].player, data[2].image)
  );
  aTable.appendChild(
    createRow(data[2].level, data[2].time, data[2].player, data[2].image)
  );
}
function createRow(level, time, player, url) {
  var aRow = document.createElement("tr");
  aRow.appendChild(createImageCell(url));
  aRow.appendChild(createCell(level));
  aRow.appendChild(createCell(time));
  aRow.appendChild(createCell(player));
  return aRow;
}
function createCell(content) {
  var aCell = document.createElement("td");
  aCell.innerHTML = content;
  return aCell;
}
function createImageCell(url) {
  var aCell = document.createElement("td");
  var anImage = document.createElement("img");
  anImage.src = url;
  anImage.classList.add("tableImage");
  aCell.appendChild(anImage);
  return aCell;
}

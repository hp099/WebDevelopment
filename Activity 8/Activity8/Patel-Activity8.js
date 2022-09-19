var names = ["Tom", "Lily", "Jose", "Sarah"];
var height = [65, 60, 72, 68];

var $ = function (id) { return document.getElementById(id); };



window.onload = function () {
    $("show_results").onclick = showResult;
    $("add").onclick = addHeight;
    $("display_height").onclick = displayHeight;
};

function showResult(){
    $("result").innerHTML = "";
    let maxHeight = -1;
    let sumHeight = 0;

    let heights;
    for (heights of height){
        sumHeight += heights;
        if (heights > maxHeight){
            maxHeight = heights;
        }
    }
    let avgHeight = sumHeight / height.length;

    let headingNode = document.createElement("h2");
    let heading = document.createTextNode("Results");
    headingNode.appendChild(heading);

    let avgNode = document.createElement("p");
    let avg = document.createTextNode(`Average Height = ${avgHeight}`);
    avgNode.appendChild(avg);

    let highNode = document.createElement("p");
    let high = document.createTextNode(`Highest height = ${maxHeight}`);
    highNode.appendChild(high);

    $("result").appendChild(headingNode);
    $("result").appendChild(avgNode);
    $("result").appendChild(highNode);
    $("result").show();
}

function displayHeight(){
    $("height_table").innerHTML = "";

    let headingNode = document.createElement("h2");
    let heading = document.createTextNode("Heights");
    headingNode.appendChild(heading);

    $("height_table").title = "Heights"

    let table = document.createElement('table');
    let headerRow = document.createElement("tr");
    headerRow.innerHTML = "<tr><th>Name</th><th>Height</th></tr>";

    table.appendChild(headerRow);

    for (let i = 0; i < height.length; i++){
        let row = document.createElement('tr');

        row.innerHTML = `<tr><td>${names[i]}</td><td>${height[i]}</td></tr>`;

        table.appendChild(row);
    }

    $("height_table").appendChild(headingNode);
    $("height_table").appendChild(table);
}

function addHeight() {

    // data validation
    let len = document.getElementById("name").value.length;
    let heightVal =  document.getElementById("height").value;

    if (len === 0 || (heightVal < 0 || heightVal > 100)) {
        alert("You must enter a name and a valid height")
    } else {
        names.push(document.getElementById("name").value);
        height.push(document.getElementById("height").value);
    }
    $("name").focus();
}

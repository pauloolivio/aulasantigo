/*global $, window, document, console */
var steelShapesCache = {};
var currentShapesArray = [];
function loadShapesTable(data) {
    if (data.length <= 0) {
        return;
    }
    currentShapesArray = data;
    var i, str, isAISC = ('AISC_Manual_Label' in data[0]),
        nameKey = isAISC ? 'AISC_Manual_Label' : 'Name';

    str = "<table class='table'><thead>";
    str += "<tr>";
    str += "<th>Name</th>";
    str += "<th>Area</th>";
    if (isAISC) {
        str += "<th>Weight (lbs/ft)</th>";
    }
    str += "<th>Iz (in<sup>4</sup>)</th>";
    str += "<th>Iy (in<sup>4</sup>)</th>";
    str += "</thead>";

    for(i = 0; i < data.length; i++) {
        str += "<tr class='wsShape_" + i + "'>";
        str += "<td>" + data[i][nameKey] + "</td>";
        str += "<td>" + data[i].A + "</td>";
        if (isAISC) {
            str += "<td>" + Number(data[i].W).toFixed(2) + "</td>";
        }
        str += "<td>" + data[i].Ix + "</td>";
        str += "<td>" + data[i].Iy + "</td>";
    }
    str += "</table>";
    $("#shape-table").html(str);

    $('#shape-table tr').click(function (event) {
        var myClass = $(this).attr("class"),
            index = myClass.split(/wsShape_/)[1];
        //console.log(currentShapesArray[index]);
        $("#shapeSelectorModal").trigger( "shape-selector-iz-selected", currentShapesArray[index] );
        $(function () {
            $('#shapeSelectorModal').modal('toggle');
        });
    });
}

function getShapes(filename) {
    if (!(filename in steelShapesCache)) {
        $.get("shape-data/" + filename, function (data) {
            steelShapesCache[filename] = data;
            loadShapesTable(data);
        });
    } else {
        loadShapesTable(steelShapesCache[filename]);
    }
}

function customShape() {
    $("#shape-table").html("");
}




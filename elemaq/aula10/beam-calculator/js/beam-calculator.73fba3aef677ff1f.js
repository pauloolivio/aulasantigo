/*global $, window, document */
var ENGLISH_UNITS = "english";
var METRIC_UNITS = "metric";
var gUnits = ENGLISH_UNITS;
var M_PI = 3.14159265;

var previousPoint = null;
var nDataPoints = 10;
var beams = [];
var cachedIndex = 1;

function changeUnits(cssClassName, newUnitStr) {
    var i, elements = document.getElementsByClassName(cssClassName);
    for (i = 0; i < elements.length; i += 1) {
        elements.item(i).innerHTML = newUnitStr;
    }
}

function setUnits() {
    if (gUnits === ENGLISH_UNITS) {
        changeUnits('units-force', 'kips');
        changeUnits('units-force-per-length', 'kips/in');
        changeUnits('units-pressure', 'ksi');
        changeUnits('units-moment', 'kip-in');
        changeUnits('units-length', 'in');
    } else {
        changeUnits('units-force', 'kN');
        changeUnits('units-force-per-length', 'kN/m');
        changeUnits('units-pressure', 'kPa');
        changeUnits('units-moment', 'kN-m');
        changeUnits('units-length', 'm');
    }
}

function setEnglishUnits() {
    gUnits = ENGLISH_UNITS;
    setUnits();
    $("#units-dropdown").html("Sistema Inglês (inches, kips, ksi)");
}

function setMetricUnits() {
    gUnits = METRIC_UNITS;
    setUnits();
    $("#units-dropdown").html("Sistema Métrico (meters, kN, kPa)");
}

function setupConstantsForm() {
    $("#instructions").html("");
    var str = "<h3>Constants</h3>";
    str += "<form action='post' name='constant_data'>";
    str += "Young's Modulus, E: <input type='text' id='E-input' name='E' value='29000' onchange='recalculate();'>";
    str += "<br>Moment of Inertia, I: <input type='text' id='I-input' name='I' value='100' onchange='recalculate();'><br></form>";
    $("#constants").html(str);
}

function getLength(index) {
    var L = $("#L-input").val();
    switch (index) {
        //simply supported beams
        case 0:
        case 1:
        case 3:
        case 4:
        case 6:
        case 7:
        case 8:
            L = $("#L-input").val();
            break;
        case 2:
        case 5:
            L = Number($("#b-input").val()) + Number($("#a-input").val());
            break;

            //cantilevers
        case 9:
        case 10:
        case 16:
        case 17:
            L = $("#L-input").val();
            break;
        case 12:
        case 14:
            L = Number($("#b-input").val()) + Number($("#a-input").val());
            break;
        default:
            break;
    }
    return Number(L);
}

function getDimensionsAndLoad(index) {
    var res = {};
    res.E = $("#E-input").val();
    res.I = $("#I-input").val();
    res.M = $("#M-input") ? $("#M-input").val() : 0;
    res.q = $("#q-input") ? $("#q-input").val() : 0;
    res.p = $("#P-input") ? $("#P-input").val() : 0;
    res.a = $("#a-input") ? $("#a-input").val() : 0;
    res.b = $("#b-input") ? $("#b-input").val() : 0;
    res.L = getLength(index);
    res.beamID = index + 1;
    return res;
}

function showTooltip(x, y, contents) {
    $('<div id="tooltip">' + contents + '</div>').css({
        position: 'absolute',
        display: 'none',
        top: y + 5,
        left: x + 5,
        border: '1px solid #fdd',
        padding: '2px',
        'background-color': '#fee',
        opacity: 0.80
    }).appendTo("body").fadeIn(200);
}

function toolTipHover(event, pos, item) {
    if (item) {
        if (previousPoint !== item.datapoint) {
            previousPoint = item.datapoint;

            $("#tooltip").remove();
            var x = item.datapoint[0].toFixed(2),
                y = item.datapoint[1].toFixed(4);

            showTooltip(item.pageX, item.pageY, item.series.label + " @ " + x + " in = " + y);
        }
    } else {
        $("#tooltip").remove();
        previousPoint = null;
    }
}

function showChart(data, label, element) {
    var d = [],
        options = {
            legend: { show: false },
            //legend: { show: show_legend, noColumns: 2, container:$("#beam-graph-legend") },
            lines: { show: true },
            points: { show: true },
            //yaxis: { label: item + " (in)"  },
            grid: { hoverable: true }
        };
    d.push({ label: label, data: data });
    $(element).bind("plothover", toolTipHover);
    $.plot($(element), d, options);
}

function showDataTable(displacements, thetas, moments, shears) {
    var maxLength, longestArray, str, i, x, d, t, m, s;
    str = '<table class="table table-striped table-hover">';
    str += '<tr><th>x (<span class="units-length"></span>)</th>';
    str += '<th>Deslocamento (<span class="units-length"></span>)</th>';
    str += '<th>Inclinação (degrees)</th>';
    str += '<th>Momento Fletor (<span class="units-moment"></span>)</th>';
    str += '<th>Força Cortante (<span class="units-force"></span>)</th></tr>';

    maxLength = Math.max(displacements.length, thetas.length);
    maxLength = Math.max(maxLength, moments.length);
    maxLength = Math.max(maxLength, shears.length);

    longestArray = displacements;
    if (thetas.length > displacements.length) {
        longestArray = thetas;
    }
    if (moments.length > thetas.length) {
        longestArray = moments;
    }
    if (shears.length > moments.length) {
        longestArray = shears;
    }

    function makeMap(array) {
        var map = {},
            r;
        for (i = 0; i < array.length; i += 1) {
            x = parseFloat(array[i][0]).toPrecision(5);
            r = parseFloat(array[i][1]).toPrecision(5);
            if (x in map) {
                map[x].push(r);
            } else {
                map[x] = [r];
            }
        }
        return map;
    }

    d = makeMap(displacements);
    t = makeMap(thetas);
    m = makeMap(moments);
    s = makeMap(shears);

    function pop(element) {
        var r = element.pop();
        if (r === undefined) {
            return '--';
        }
        return r;
    }

    for (i = 0; i < longestArray.length; i += 1) {
        if (longestArray[i] !== undefined && longestArray[i][0] !== undefined) {
            x = parseFloat(longestArray[i][0]).toPrecision(5);
            str += "<tr><td>" + x + "</td>";
            str += "<td>" + pop(d[x]) + "</td>";
            str += "<td>" + pop(t[x]) + "</td>";
            str += "<td>" + pop(m[x]) + "</td>";
            str += "<td>" + pop(s[x]) + "</td></tr>";
        }
    }
    str += "</table>";
    $("#result-table").html(str);
}

function showExtremes(displacements, thetas, moments, shears) {
    function setExtremes(array, maxId, locId) {
        var i, max = array[0][1],
            max_at = array[0][0];
        for (i = 0; i < array.length; i++) {
            if (Math.abs(array[i][1]) > max) {
                max = Math.abs(array[i][1]);
                max_at = array[i][0];
            }
        }
        $(maxId).html(parseFloat(max).toPrecision(5));
        $(locId).html(parseFloat(max_at).toPrecision(5));
    }

    setExtremes(displacements, '#max-displacement', '#max-displacement-location');
    setExtremes(shears, '#max-shear', '#max-shear-location');
    setExtremes(moments, '#max-moment', '#max-moment-location');
}

function BeamClass() {
    this.imagePath = "";
    this.eqnImagePath = "";
    this.dimensions = [];
    this.isPiecewise = false;
    this.a = -1;
}

BeamClass.prototype.AddDimension = function(dimName, defaultValue, unit) {
    this.dimensions.push({ name: dimName, value: defaultValue, unit: unit });
};

BeamClass.prototype.SetupImages = function() {
    var str = '<img src="' + this.imagePath + '" width="160px" alt="beam image"/>';
    $("#current-beam-image").html(str);
    str = '<img src="' + this.eqnImagePath + '" alt="beam equation"/>';
    $("#current-beam-equations").html(str);
};

/**
 * set up the beam dimensions form
 * requires <div id="dimensions"> on the html page
 * */
BeamClass.prototype.SetupDimensionForm = function(index) {
    //put the user dimensions on the worksheet
    var i, label, value, unit, text = "<form name='beam_data'>";
    for (i = 0; i < this.dimensions.length; i += 1) {
        if (this.dimensions[i] !== undefined) {
            label = this.dimensions[i].name;
            value = this.dimensions[i].value;
            unit = this.dimensions[i].unit;
            text += '<div class="form-group">';
            text += '<label class="control-label" for="' + label + '-input"><i>' + label + ' (<span class="' + unit + '"></span>)</i></label>';
            text += '<input class="form-control" type="text" id="' + label + '-input" value="' + value + '"  onchange="recalculate();"></div>';
        }
    }

    text += '<div class="form-group">';
    text += '<label class="control-label" for="x-input"><i>point of interest, x (<span class="units-length"></span>)</i></label>';
    text += '<input class="form-control" type="text" id="x-input" value="60" onchange="recalculate();"></div>';
    $('#dimensions').html(text);
    $('#calculate-button').html('<p class="btn btn-success btn-md" onclick="onCalculateButtonTap(' + index + ')" role="button">Calculate</p>');
};

//simple beam 1
var simpleBeam1 = new BeamClass();
simpleBeam1.imagePath = "./beam-calculator/images/simple-1.png";
simpleBeam1.eqnImagePath = "./beam-calculator/images/simple_1_eqns.png";
simpleBeam1.AddDimension("q", "1", "units-force-per-length");
simpleBeam1.AddDimension("L", "120", "units-length");
beams.push(simpleBeam1);

//simple beam 2
var simpleBeam2 = new BeamClass();
simpleBeam2.imagePath = "./beam-calculator/images/simple-2.png";
simpleBeam2.eqnImagePath = "./beam-calculator/images/simple_2_eqns.png";
simpleBeam2.AddDimension("q", "1", "units-force-per-length");
simpleBeam2.AddDimension("a", "60", "units-length");
simpleBeam2.AddDimension("L", "120", "units-length");
beams.push(simpleBeam2);

var simpleBeam3 = new BeamClass();
simpleBeam3.imagePath = "./beam-calculator/images/simple-3.png";
simpleBeam3.eqnImagePath = "./beam-calculator/images/simple_3_eqns.png";
simpleBeam3.AddDimension("a", "60", "units-length");
simpleBeam3.AddDimension("b", "60", "units-length");
simpleBeam3.AddDimension("P", "1", "units-force");
beams.push(simpleBeam3);

var simpleBeam4 = new BeamClass();
simpleBeam4.imagePath = "./beam-calculator/images/simple-4.png";
simpleBeam4.eqnImagePath = "./beam-calculator/images/simple_4_eqns.png";
simpleBeam4.AddDimension("a", "60", "units-length");
simpleBeam4.AddDimension("L", "120", "units-length");
simpleBeam4.AddDimension("P", "1", "units-force");
beams.push(simpleBeam4);

var simpleBeam5 = new BeamClass();
simpleBeam5.imagePath = "./beam-calculator/images/simple-5.png";
simpleBeam5.eqnImagePath = "./beam-calculator/images/simple_5_eqns.png";
simpleBeam5.AddDimension("M", "10", "units-moment");
simpleBeam5.AddDimension("L", "120", "units-length");
beams.push(simpleBeam5);

//moment located at "a" AND a >= L/2!
var simpleBeam6 = new BeamClass();
simpleBeam6.imagePath = "./beam-calculator/images/simple-6.png";
simpleBeam6.eqnImagePath = "./beam-calculator/images/simple_6_eqns.png";
simpleBeam6.AddDimension("M", "10", "units-moment");
simpleBeam6.AddDimension("a", "60", "units-length");
simpleBeam6.AddDimension("b", "60", "units-length");
beams.push(simpleBeam6);

var simpleBeam7 = new BeamClass();
simpleBeam7.imagePath = "./beam-calculator/images/simple-7.png";
simpleBeam7.eqnImagePath = "./beam-calculator/images/simple_7_eqns.png";
simpleBeam7.AddDimension("M", "10", "units-moment");
simpleBeam7.AddDimension("L", "120", "units-length");
beams.push(simpleBeam7);

var simpleBeam8 = new BeamClass();
simpleBeam8.imagePath = "./beam-calculator/images/simple-8.png";
simpleBeam8.eqnImagePath = "./beam-calculator/images/simple_8_eqns.png";
simpleBeam8.AddDimension("q", "1", "units-force-per-length");
simpleBeam8.AddDimension("L", "120", "units-length");
beams.push(simpleBeam8);

var simpleBeam9 = new BeamClass();
simpleBeam9.imagePath = "./beam-calculator/images/simple-9.png";
simpleBeam9.eqnImagePath = "./beam-calculator/images/simple_9_eqns.png";
simpleBeam9.AddDimension("q", "1", "units-force-per-length");
simpleBeam9.AddDimension("L", "120", "units-length");
beams.push(simpleBeam9);

//cantilevers...
//cantilever beam 1
var cantileverBeam1 = new BeamClass();
cantileverBeam1.imagePath = "./beam-calculator/images/cantilever-1.png";
cantileverBeam1.eqnImagePath = "./beam-calculator/images/cantilever_1_eqns.png";
cantileverBeam1.AddDimension("q", "1", "units-force-per-length");
cantileverBeam1.AddDimension("L", "120", "units-length");
beams.push(cantileverBeam1);

//cantilever beam 2
var cantileverBeam2 = new BeamClass();
cantileverBeam2.imagePath = "./beam-calculator/images/cantilever-2.png";
cantileverBeam2.eqnImagePath = "./beam-calculator/images/cantilever_2_eqns.png";
cantileverBeam2.AddDimension("q", "1", "units-force-per-length");
cantileverBeam2.AddDimension("a", "25", "units-length");
cantileverBeam2.AddDimension("L", "120", "units-length");
beams.push(cantileverBeam2);

var cantileverBeam3 = new BeamClass();
cantileverBeam3.imagePath = "./beam-calculator/images/cantilever-3.png";
cantileverBeam3.eqnImagePath = "./beam-calculator/images/cantilever_4_eqns.png";
cantileverBeam3.AddDimension("L", "120", "units-length");
cantileverBeam3.AddDimension("P", "1", "units-force");
beams.push(cantileverBeam3);

var cantileverBeam4 = new BeamClass();
cantileverBeam4.imagePath = "./beam-calculator/images/cantilever-4.png";
cantileverBeam4.eqnImagePath = "./beam-calculator/images/cantilever_5_eqns.png";
cantileverBeam4.AddDimension("a", "60", "units-length");
cantileverBeam4.AddDimension("b", "60", "units-length");
cantileverBeam4.AddDimension("P", "1", "units-force");
beams.push(cantileverBeam4);

//moment located at "a" AND a >= L/2!
var cantileverBeam5 = new BeamClass();
cantileverBeam5.imagePath = "./beam-calculator/images/cantilever-5.png";
cantileverBeam5.eqnImagePath = "./beam-calculator/images/cantilever_6_eqns.png";
cantileverBeam5.AddDimension("L", "120", "units-length");
cantileverBeam5.AddDimension("M", "1", "units-moment");
beams.push(cantileverBeam5);

var cantileverBeam6 = new BeamClass();
cantileverBeam6.imagePath = "./beam-calculator/images/cantilever-6.png";
cantileverBeam6.eqnImagePath = "./beam-calculator/images/cantilever_7_eqns.png";
cantileverBeam6.AddDimension("a", "60", "units-length");
cantileverBeam6.AddDimension("b", "60", "units-length");
cantileverBeam6.AddDimension("M", "1", "units-moment");
beams.push(cantileverBeam6);

var cantileverBeam7 = new BeamClass();
cantileverBeam7.imagePath = "./beam-calculator/images/cantilever-7.png";
cantileverBeam7.eqnImagePath = "./beam-calculator/images/cantilever_8_eqns.png";
cantileverBeam7.AddDimension("q", "1", "units-force-per-length");
cantileverBeam7.AddDimension("L", "120", "units-length");
beams.push(cantileverBeam7);

var cantileverBeam8 = new BeamClass();
cantileverBeam8.imagePath = "./beam-calculator/images/cantilever-8.png";
cantileverBeam8.eqnImagePath = "./beam-calculator/images/cantilever_9_eqns.png";
cantileverBeam8.AddDimension("q", "1", "units-force-per-length");
cantileverBeam8.AddDimension("L", "120", "units-length");
beams.push(cantileverBeam8);

function delta(index, nPoints) {
    var E, I, M, q, P, a, b, x_prime, L, beamID, deltas = [],
        x = 0,
        points = [],
        res = 0,
        i;
    E = $("#E-input").val();
    I = $("#I-input").val();
    M = $("#M-input") ? $("#M-input").val() : 0;
    q = $("#q-input") ? $("#q-input").val() : 0;
    P = $("#P-input") ? $("#P-input").val() : 0;
    a = $("#a-input") ? $("#a-input").val() : 0;
    b = $("#b-input") ? $("#b-input").val() : 0;
    x_prime = $("#x-input") ? $("#x-input").val() : 0;
    L = getLength(index);
    beamID = index + 1;

    for (i = 0; i <= nPoints; i += 1) {
        x = i / nPoints * L;
        points.push(x);
        if (x_prime > x && x_prime < (i + 1) / nPoints * L) {
            // points.push(x_prime * 1.0);
            points.push(parseFloat(x_prime));
        }
    }

    for (i = 0; i < points.length; i += 1) {
        x = points[i];
        if (beamID === 1) {
            res = (q * x) / (24 * E * I) * (L * L * L - 2 * L * x * x + x * x * x);
        } else if (beamID === 2) {
            //L is actually length 2 input for this one
            if (x <= a) {
                res = (q * x) / (24 * L * E * I) * (Math.pow(a, 4) - 4 * Math.pow(a, 3) * L + 4 * Math.pow(a, 2) * Math.pow(L, 2) + 2 * Math.pow(a, 2) * Math.pow(x, 2) - 4 * a * L * Math.pow(x, 2) + L * Math.pow(x, 3));
            } else {
                res = (q * Math.pow(a, 2)) / (24 * L * E * I) * (-Math.pow(a, 2) * L + 4 * Math.pow(L, 2) * x + Math.pow(a, 2) * x - 6 * L * Math.pow(x, 2) + 2 * Math.pow(x, 3));
            }
        } else if (beamID === 3) {
            if (x <= a) {
                res = (P * b * x) / (6 * L * E * I) * (L * L - b * b - x * x);
            } else {
                res = (P * a * (x - L)) / (6 * L * E * I) * (a * a - 2 * L * x + x * x);
            }
        } else if (beamID === 4) {
            if (x <= a) {
                res = (P * x) / (6 * E * I) * (3 * a * L - 3 * a * a - x * x);
            } else if (x <= L - a) {
                res = (P * a) / (6 * E * I) * (3 * L * x - 3 * x * x - a * a);
            } else {
                res = -(P * (x - L)) / (6 * E * I) * (3 * a * L - 3 * a * a - (x - L) * (x - L));
            }
        } else if (beamID === 5) {
            res = (M * x) / (6 * E * I * L) * (2 * L * L - 3 * L * x + x * x);
        } else if (beamID === 6) {
            if (x <= a) {
                res = (M * x) / (6 * L * E * I) * (6 * a * L - 3 * a * a - 2 * L * L - x * x);
            } else {
                res = -(M * (L - x)) / (6 * L * E * I) * (6 * b * L - 3 * b * b - 2 * L * L - (L - x) * (L - x));
            }
        } else if (beamID === 7) {
            res = (M * x) / (2 * E * I) * (L - x);
        } else if (beamID === 8) {
            res = (q * x) / (360 * L * E * I) * (7 * Math.pow(L, 4) - 10 * L * L * x * x + 3 * Math.pow(x, 4));
        } else if (beamID === 9) {
            if (x <= L / 2) {
                res = (q * x) / (960 * L * E * I) * (5 * L * L - 4 * x * x) * (5 * L * L - 4 * x * x);
            } else {
                res = -(q * (x - L)) / (960 * L * E * I) * (5 * L * L - 4 * (x - L) * (x - L)) * (5 * L * L - 4 * (x - L) * (x - L));
            }
        }
        //cantilevers
        else if (beamID === 10) {
            res = (q * x * x) / (24 * E * I) * (6 * L * L - 4 * L * x + x * x);
        } else if (beamID === 11) {
            if (x <= a) {
                res = (q * x * x) / (24 * E * I) * (6 * a * a - 4 * a * x + x * x);
            } else {
                res = (q * a * a * a) / 24 / E / I * (4 * x - a);
            }
        } else if (beamID === 12) {
            res = (P * x * x) / (6 * E * I) * (3 * L - x);
        } else if (beamID === 13) {
            if (x <= a) {
                res = (P * x * x) / (6 * E * I) * (3 * a - x);
            } else {
                res = (P * a * a) / (6 * E * I) * (3 * x - a);
            }
        } else if (beamID === 14) {
            res = (M * x * x) / (2 * E * I);
        } else if (beamID === 15) {
            if (x <= a) {
                res = (M * x * x) / (2 * E * I);
            } else {
                res = (M * a) / (2 * E * I) * (2 * x - a);
            }
        } else if (beamID === 16) {
            res = (q * x * x) / (120 * L * E * I) * (10 * L * L * L - 10 * L * L * x + 5 * L * x * x - x * x * x);
        } else if (beamID === 17) {
            res = (q * x * x) / (120 * L * E * I) * (20 * L * L * L - 10 * L * L * x + x * x * x);
        }
        deltas.push([x, res]);
    }
    return deltas;
}

function theta(index, nPoints) {
    var E, I, M, q, P, a, b, x_prime, L, beamID, thetas = [],
        x = 0,
        points = [],
        res = 0,
        i;
    E = $("#E-input").val();
    I = $("#I-input").val();
    M = $("#M-input") ? $("#M-input").val() : 0;
    q = $("#q-input") ? $("#q-input").val() : 0;
    P = $("#P-input") ? $("#P-input").val() : 0;
    a = $("#a-input") ? $("#a-input").val() : 0;
    b = $("#b-input") ? $("#b-input").val() : 0;
    x_prime = $("#x-input") ? $("#x-input").val() : 0;
    L = getLength(index);
    beamID = index + 1;

    for (i = 0; i <= nPoints; i += 1) {
        x = i / nPoints * L;
        points.push(x);
        if (x_prime > x && x_prime < (i + 1) / nPoints * L) {
            points.push(x_prime * 1.0);
        }
    }

    for (i = 0; i < points.length; i += 1) {
        x = points[i];
        if (beamID === 1) {
            res = q / (24 * E * I) * (L * L * L - 6 * L * x * x + 4 * x * x * x);
        } else if (beamID === 2) {
            if (x <= a) {
                res = q / (24 * L * E * I) * (Math.pow(a, 4) - 4 * Math.pow(a, 3) * L + 4 * Math.pow(a, 2) * Math.pow(L, 2) + 6 * Math.pow(a, 2) * Math.pow(x, 2) - 12 * a * L * Math.pow(x, 2) + 4 * L * Math.pow(x, 3));
            } else {
                res = (q * Math.pow(a, 2)) / (24 * L * E * I) * (4 * Math.pow(L, 2) + Math.pow(a, 2) - 12 * L * x + 6 * Math.pow(x, 2));
            }
        } else if (beamID === 3) {
            if (x <= a) {
                res = (P * b) / (6 * L * E * I) * (L * L - b * b - 3 * x * x);
            } else {
                res = (P * a) / (6 * L * E * I) * (a * a - 6 * L * x + 3 * x * x + 2 * L * L);
            }
        } else if (beamID === 4) {
            if (x <= a) {
                res = P / (2 * E * I) * (a * L - a * a - x * x);
            } else if (x <= L - a) {
                res = (P * a) / (2 * E * I) * (L - 2 * x);
            } else {
                res = -P / (2 * E * I) * (a * L - a * a - (L - x) * (L - x));
            }
        } else if (beamID === 5) {
            res = M / (6 * E * I * L) * (2 * L * L - 6 * L * x + 3 * x * x);
        } else if (beamID === 6) {
            if (x <= a) {
                res = M / (6 * L * E * I) * (6 * a * L - 3 * a * a - 2 * L * L - 3 * x * x);
            } else {
                res = M / (6 * L * E * I) * (6 * b * L - 3 * b * b - 2 * L * L - 3 * (x - L) * (x - L));
            }
        } else if (beamID === 7) {
            res = M / (2 * E * I) * (L - 2 * x);
        } else if (beamID === 8) {
            res = q / (360 * L * E * I) * (7 * Math.pow(L, 4) - 30 * L * L * x * x + 15 * Math.pow(x, 4));
        } else if (beamID === 9) {
            if (x <= L / 2) {
                res = q / (192 * L * E * I) * (5 * L * L - 4 * x * x) * (L * L - 4 * x * x);
            } else {
                res = -q / (192 * L * E * I) * (5 * L * L - 4 * (x - L) * (x - L)) * (L * L - 4 * (x - L) * (x - L));
            }
        }
        //cantilevers
        else if (beamID === 10) {
            res = (q * x) / (6 * E * I) * (3 * L * L - 3 * L * x + x * x);
        } else if (beamID === 11) {
            if (x <= a) {
                res = (q * x) / (6 * E * I) * (3 * a * a - 3 * a * x + x * x);
            } else {
                res = q * a * a * a / 6 / E / I;
            }
        }
        /*else if(beamID == 11 ){
            //alert( "L= " + L + " a= " + a + " b= " + b + " x=" + x);
            if( x <= a){
                theta = 0;//(q*b*x)/(2*E*I)*(L+a-x);
                //alert( x );
            }
            else
                theta = q/6/E/I*(Math.pow(x,3)-3*L*x*x+3*L*L*x-Math.pow(a,3));
            //alert( theta );
        }*/
        else if (beamID === 12) {
            res = (P * x) / (2 * E * I) * (2 * L - x);
        } else if (beamID === 13) {
            if (x <= a) {
                res = (P * x) / (2 * E * I) * (2 * a - x);
            } else {
                res = (P * a * a) / (2 * E * I);
            }
        } else if (beamID === 14) {
            res = (M * x) / (E * I);
        } else if (beamID === 15) {
            if (x <= a) {
                res = (M * x) / (E * I);
            } else {
                res = (M * a) / (E * I);
            }
        } else if (beamID === 16) {
            res = (q * x) / (24 * L * E * I) * (4 * L * L * L - 6 * L * L * x + 4 * L * x * x - x * x * x);
        } else if (beamID === 17) {
            res = (q * x) / (24 * L * E * I) * (8 * L * L * L - 6 * L * L * x + x * x * x);
        }

        res *= 180 / M_PI;
        thetas.push([x, res]);
    }

    return thetas;
}

function moment(index, nPoints) {
    var M, q, P, a, b, x_prime, L, beamID, moments = [],
        x = 0,
        points = [],
        res = 0,
        i;
    M = $("#M-input") ? $("#M-input").val() : 0;
    q = $("#q-input") ? $("#q-input").val() : 0;
    P = $("#P-input") ? $("#P-input").val() : 0;
    a = $("#a-input") ? $("#a-input").val() : 0;
    b = $("#b-input") ? $("#b-input").val() : 0;
    x_prime = $("#x-input") ? $("#x-input").val() : 0;
    L = getLength(index);
    beamID = index + 1;

    for (i = 0; i <= nPoints; i += 1) {
        x = i / nPoints * L;
        points.push(x);
        if (x_prime > x && x_prime < (i + 1) / nPoints * L) {
            points.push(x_prime * 1.0);
        }
    }

    for (i = 0; i < points.length; i += 1) {
        x = points[i];
        if (beamID === 1) {
            res = (q * x) / 2 * (x - L);
            moments.push([x, res]);
        } else if (beamID === 2) {
            if (x <= a) {
                res = (q * x) / (2 * L) * (Math.pow(a, 2) - 2 * a * L + L * x);
                moments.push([x, res]);
            }
            if (x >= a) {
                res = (-q * a * a) / (2 * L) * (L - x);
                moments.push([x, res]);
            }
        } else if (beamID === 3) {
            if (x <= a) {
                res = -(P * b * x) / L;
                moments.push([x, res]);
            }
            if (x >= a) {
                res = -(P * a) / L * (L - x);
                moments.push([x, res]);
            }
        } else if (beamID === 4) {
            if (x <= a) {
                res = -P * x;
                moments.push([x, res]);
            }
            if (x >= a && x <= L - a) {
                res = -P * a;
                moments.push([x, res]);
            }
            if (x >= L - a) {
                res = -P * (L - x);
                moments.push([x, res]);
            }
        } else if (beamID === 5) {
            res = M / L * (x - L);
            moments.push([x, res]);
        } else if (beamID === 6) {
            if (x <= a) {
                res = -(M * x) / L;
                moments.push([x, res]);
            }
            if (x >= a) {
                res = -M / L * (x - L);
                moments.push([x, res]);
            }
        } else if (beamID === 7) {
            res = -M;
            moments.push([x, res]);
        } else if (beamID === 8) {
            res = (q * x) / (6 * L) * (x * x - L * L);
            moments.push([x, res]);
        } else if (beamID === 9) {
            if (x <= L / 2) {
                res = (q * x) / (12 * L) * (4 * x * x - 3 * L * L);
                moments.push([x, res]);
            }
            if (x >= L / 2) {
                res = -(q * (x - L)) / (12 * L) * (4 * (x - L) * (x - L) - 3 * L * L);
                moments.push([x, res]);
            }
        }
        //cantilevers
        else if (beamID === 10) {
            res = q / 2 * (L * L - 2 * L * x + x * x);
            moments.push([x, res]);
        } else if (beamID === 11) {
            if (x <= a) {
                res = (q / 2) * (a * a - 2 * a * x + x * x);
                moments.push([x, res]);
            }
            if (x >= a) {
                res = 0;
                moments.push([x, res]);
            }
        } else if (beamID === 12) {
            res = P * (x - L);
            moments.push([x, res]);
        } else if (beamID === 13) {
            if (x <= a) {
                res = P * (x - a);
                moments.push([x, res]);
            }
            if (x >= a) {
                res = 0;
                moments.push([x, res]);
            }
        } else if (beamID === 14) {
            res = -M;
            moments.push([x, res]);
        } else if (beamID === 15) {
            if (x <= a) {
                res = -M;
                moments.push([x, res]);
            }
            if (x >= a) {
                res = 0;
                moments.push([x, res]);
            }
        } else if (beamID === 16) {
            res = q / (6 * L) * (L * L * L - 3 * L * L * x + 3 * L * x * x - x * x * x);
            moments.push([x, res]);
        } else if (beamID === 17) {
            res = q / (6 * L) * (2 * L * L * L - 3 * L * L * x + x * x * x);
            moments.push([x, res]);
        }
    }

    return moments;
}

function shear(index, nPoints) {
    var M, q, P, a, b, x_prime, L, beamID, shears = [],
        x = 0,
        points = [],
        res = 0,
        i;
    M = $("#M-input") ? $("#M-input").val() : 0;
    q = $("#q-input") ? $("#q-input").val() : 0;
    P = $("#P-input") ? $("#P-input").val() : 0;
    a = $("#a-input") ? $("#a-input").val() : 0;
    b = $("#b-input") ? $("#b-input").val() : 0;
    x_prime = $("#x-input") ? $("#x-input").val() : 0;
    L = getLength(index);
    beamID = index + 1;

    for (i = 0; i <= nPoints; i += 1) {
        x = i / nPoints * L;
        points.push(x);
        if (x_prime > x && x_prime < (i + 1) / nPoints * L) {
            points.push(x_prime * 1.0);
        }
    }

    for (i = 0; i < points.length; i += 1) {
        x = points[i];
        if (beamID === 1) {
            res = q / 2 * (2 * x - L);
            shears.push([x, res]);
        } else if (beamID === 2) {
            if (x <= a) {
                res = q / (2 * L) * (Math.pow(a, 2) - 2 * a * L + 2 * L * x);
                shears.push([x, res]);
            }
            if (x >= a) {
                res = (q * a * a) / (2 * L);
                shears.push([x, res]);
            }
        } else if (beamID === 3) {
            if (x <= a) {
                res = -(P * b) / L;
                shears.push([x, res]);
            }
            if (x >= a) {
                res = P * a / L;
                shears.push([x, res]);
            }
        } else if (beamID === 4) {
            if (x <= a) {
                res = -P;
                shears.push([x, res]);
            }
            if (x <= L - a && x >= a) {
                res = 0;
                shears.push([x, res]);
            }
            if (x >= L - a) {
                res = P;
                shears.push([x, res]);
            }
        } else if (beamID === 5) {
            res = M / L;
            shears.push([x, res]);
        } else if (beamID === 6) {
            res = -M / L;
            shears.push([x, res]);
        } else if (beamID === 7) {
            res = 0;
            shears.push([x, res]);
        } else if (beamID === 8) {
            res = q / (6 * L) * (3 * x * x - L * L);
            shears.push([x, res]);
        } else if (beamID === 9) {
            if (x <= L / 2) {
                res = q / (4 * L) * (4 * x * x - L * L);
                shears.push([x, res]);
            }
            if (x >= L / 2) {
                res = -q / (4 * L) * (4 * (x - L) * (x - L) - L * L);
                shears.push([x, res]);
            }
        }
        //cantilevers
        else if (beamID === 10) {
            res = q * (x - L);
            shears.push([x, res]);
        } else if (beamID === 11) {
            if (x <= a) {
                res = q * (x - a);
                shears.push([x, res]);
            }
            if (x >= a) {
                res = 0;
                shears.push([x, res]);
            }
        } else if (beamID === 12) {
            res = P;
            shears.push([x, res]);
        } else if (beamID === 13) {
            if (x <= a) {
                res = P;
                shears.push([x, res]);
            }
            if (x >= a) {
                res = 0;
                shears.push([x, res]);
            }
        } else if (beamID === 14) {
            res = 0;
            shears.push([x, res]);
        } else if (beamID === 15) {
            res = 0;
            shears.push([x, res]);
        } else if (beamID === 16) {
            res = -q / (2 * L) * (L * L - 2 * L * x + x * x);
            shears.push([x, res]);
        } else if (beamID === 17) {
            res = q / (2 * L) * (-L * L + x * x);
            shears.push([x, res]);
        }
    }

    return shears;
}

function calculate(index) {
    var deltas, thetas, moments, shears;
    cachedIndex = index;
    deltas = delta(index, nDataPoints);
    thetas = theta(index, nDataPoints);
    moments = moment(index, nDataPoints);
    shears = shear(index, nDataPoints);
    showChart(deltas, "Deslocamento", "#displacement-chart");
    showChart(thetas, "Inclinação", "#theta-chart");
    showChart(moments, "Momento Fletor", "#moment-chart");
    showChart(shears, "Força Cortante", "#shear-chart");
    showDataTable(deltas, thetas, moments, shears);
    showExtremes(deltas, thetas, moments, shears);
    setUnits();
}

function onCalculateButtonTap(index) {
    calculate(index);
    $('html,body').animate({
        scrollTop: $("#beam-plots-top").offset().top - 100
    }, 500);
}

function recalculate() {
    calculate(cachedIndex);
}

function setupBeam(index) {
    setupConstantsForm();
    beams[index].SetupImages();
    beams[index].SetupDimensionForm(index);
    //set the class to selected, clear others
    $("#beam-selector").children().children().removeClass("selected");
    $("#simply-supported").children().removeClass("selected");
    $("#cantilever").children().removeClass("selected");
    $("#beam-" + index).addClass("selected");
    calculate(index);
    setUnits();
}

function updateIButton() {
    var ix = $("#I-input").val();
    $('#shape-selector-button').html('Custom Shape');
    setUnits();
}

function setup() {
    setupBeam(0);
    $("#I-input").change(function(e) { updateIButton(); });
    getShapes('AISC/W-shapes.json');
    $('body').bind('shape-selector-iz-selected', function(e, shape) {
        //console.log(e);
        //console.log(shape);
        var ix = shape.Ix,
            isAISC = ('AISC_Manual_Label' in shape),
            nameKey = isAISC ? 'AISC_Manual_Label' : 'Name',
            shapeName = shape[nameKey];
        $('#I-input').val(ix);
        $('#shape-selector-button').html(shape[nameKey] + ": " + ix + " <span class='units-length'></span><sup>4</sup>");
        setUnits();
        recalculate();
    });
}

function OnBeamSelected(index) {
    setupBeam(index);
    $('html,body').animate({
        scrollTop: $("#beam-drawing-top").offset().top - 100
    }, 500);
}
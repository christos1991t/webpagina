$(document).ready(function () {

    var array = [];
    var array_1 = [];
    var x = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

    for (let i = 0; i < x.length; i++) {

        var h = 5;

        var b = 3;

        var m = (h * x[i]) + 6;
        var q = b * (x[i] ** 2);

        array.push(m);
        array_1.push(q)

    }

    TESTER = document.getElementById('tester');
    Plotly.newPlot(TESTER, [{
        x: x,
        y: array
    }], {
        margin: { t: 0 }
    });

    TESTER_1 = document.getElementById('tester_1');
    Plotly.newPlot(TESTER_1, [{
        x: x,
        y: array_1
    }], {
        margin: { t: 0 }
    });




});

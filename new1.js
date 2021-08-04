
function berek(){
var x = [];
        console.log(x);
        x_1 = prompt("will this change in the website too?");
        x_2 = prompt("Why wont it change");

        for (let j = x_1; j <= x_2; j++) {

            x.push(j);
            console.log(j);
            console.log(document.getElementById("input"));

        }




        var y = [];
        var y_1 = [];

        for (let i = 0; i < x.length; i++) {

            var h = 5;
            var m = (h * x[i]) + x[i] ** 3;
            var q = (6 * Math.sin(5*x[i])) + Math.cos(10*x[i]);

            y.push(m);
            y_1.push(q);

        }





      //code for diagram it works. the x and y must be there though as its the only way to understand what goes where

        Lin = document.getElementById('lin');
        Plotly.newPlot(Lin, [{
            x: x,
            y: y
        }], {
            margin: { t: 0 }
        });

        Qua = document.getElementById('qua');
        Plotly.newPlot(Qua, [{
            x: x,
            y: y_1 
        }], {
            margin: { t: 0 }
        });

};
console.log("succes");


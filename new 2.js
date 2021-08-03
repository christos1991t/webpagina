function sConsole(event) {

            event.preventDefault();
       
            var x_1 = data.value;
            var x_2 = data_1.value;

            console.log(data.value);
            console.log(x_2);

            var x = [];
            console.log(x);


            for (let j = x_1; j <= x_2; j++) {

                x.push(j);
                console.log(j);
                console.log(x);


            }



            var y = [];
            var y_1 = [];

            for (let i = 0; i <= x.length; i++) {

                var h = 5;
                var m = (h * x[i]) + x[i] ** 3;
                var q = (6 * Math.sin(5 * x[i])) + Math.cos(10 * x[i]);

                y.push(m);
                y_1.push(q);

            }



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
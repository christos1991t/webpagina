$(document).ready(function () {

    var org = ["ProcessMinded", "Mourik", "RWS"];
    var d = new Date();
    var NoTimeDate = d.getFullYear() + '/' + (d.getMonth() + 1) + '/' + d.getDate() + '-' + d.getHours() + ':' + d.getMinutes();


    var table = document.getElementById("t");

    var row = table.insertRow();
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);


    cell1.innerHTML = `<td class="td1"> <div contenteditable id="d" class="tt"></div></td> `;
    cell2.innerHTML = `<td class="td1"> <div contenteditable id="d" class="tt"></div></td> `;
    cell3.innerHTML = `<td class="td1"> <div contenteditable id="d" class="tt"></div></td>`;
    cell4.innerHTML = `<td class="td1"> <div contenteditable id="d" class="tt" type="date"></div></td>`;
    cell5.innerHTML = `<td class="td1"> <div id="d" class="tt">${NoTimeDate}</div></td>`;
    cell6.innerHTML = `<td class="td1"><div contenteditable id="d" class="tt"></div></td>`;





    $('#b_1').click(function () {

        var table = document.getElementById("t");
        var row = table.insertRow();

        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        var cell6 = row.insertCell(5);


        cell1.innerHTML = `<td> <div contenteditable id="d" class="tt"></div></td>`;
        cell2.innerHTML = `<td> <div contenteditable id="d" class="tt"></div></td>`;
        cell3.innerHTML = `<td> <div contenteditable id="d" class="tt"></div></td>`;
        cell4.innerHTML = `<td> <div contenteditable id="d" class="tt"></div></td>`;
        cell5.innerHTML = `<td> <div id="d" class="tt">${NoTimeDate}</div></td>`;
        cell6.innerHTML = `<td><div contenteditable id="d" class="tt"></div></td>`;
    });


    $('#b_2').click(function () {

        var doc = new jsPDF('0','pt','a0');
        var test1 = doc.html(document.getElementById('d'));
        test1.save('Gegevens Tabel.pdf');

    });


    $('#b_3').click(function () {

        $("#t").table2excel({
            exclude: ".noExport",
            filename: "name-of-the-file",
        })

    });


    google.charts.load('current', { packages: ["orgchart"] });
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Name');
        data.addColumn('string', 'Manager');
        data.addColumn('string', 'ToolTip');


        // For each orgchart box, provide the name, manager, and tooltip to show.
        data.addRows([
            [{ 'v': 'ProcessMinded', 'f': 'ProcessMinded' },
                '', 'The President'],
            [{ 'v': 'Diensten', 'f': 'Diensten' },
                'ProcessMinded', 'VP'],
            [{ 'v': 'Producten', 'f': 'Producten' },
                'ProcessMinded', 'VP'],
            [{ 'v': 'Projecten', 'f': 'Projecten' },
                'ProcessMinded', 'VP'],
            ['Systems Engineering', 'Diensten', ''],
            ['QA', 'Diensten', ''],
            ['Promise Online', 'Producten', ''],
            ['Mourik', 'Projecten', ''],
            ['<a class="link" href="https://www.processminded.nl/projecten/tennet-ijmuiden-ver/">Tennet</a>', 'Projecten', ''],
            ['Heel en Beesel', 'Mourik', ''],
            ['Oost Nederland(Niet gegund)', 'Mourik', ''],
            ['Groningen', 'Oost Nederland(Niet gegund)', ''],
            ['GWE project', '<a class="link" href="https://www.processminded.nl/projecten/tennet-ijmuiden-ver/">Tennet</a>', ''],
            ['5Gw project', '<a class="link" href="https://www.processminded.nl/projecten/tennet-ijmuiden-ver/">Tennet</a>', '']
        ]);

        // Create the chart.
        var chart = new google.visualization.OrgChart(document.getElementById('chart_div'));

        // Draw the chart, setting the allowHtml option to true for the tooltips.
        chart.draw(data, { 'allowHtml': true });

    }



});


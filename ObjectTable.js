class veri {
    constructor(name,sur,year,org) {
        this.name=name; //name of the verificateur 
        this.sur=sur; // Surname of the verificateur
        this.year= year; // the verification is valid until this year
        this.org=org;  // Organazation of the verificateur

    }

    current(x){
        
        return this.year -x 

       


    }

}



let v1 = new veri("Christos", "Topalidis", 2035 ,"PM")

let d = new Date();
let h = d.getFullYear();

document.getElementById("d1").innerHTML= `

<ul>

<li> Name: ${v1.name} </li>
<li> Surname: ${v1.sur} </li>
<li> Valid until: ${v1.year}</li>
<li> Organazation: ${v1.org}</li>
<li> Years until validity ends : ${ v1.current(h)} </li>

</ul>


`
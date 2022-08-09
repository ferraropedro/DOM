
let titulo=document.getElementById("titulo");
titulo.style.textAlign="center";
titulo.style.margin="30px";

let abajo=document.getElementById("abajo");
abajo.style.textAlign="center";

let principal=document.getElementById("principal");
principal.style.margin="30px";

// lista de productos 

const productos = [{id: 1, nombre: "fernet", precio: 2000},
                    {id: 2, nombre: "vino tinto", precio: 1000},
                    {id: 3, nombre: "vino blanco", precio: 850},
                    {id: 4, nombre: "champagne", precio: 3000},
                    {id: 5, nombre: "smirnof", precio: 2000},
                    {id: 6, nombre: "absolut", precio: 3500},
                    {id: 7, nombre: "sixpack imperial", precio: 800},
                    {id: 8, nombre: "sixpack andes", precio: 800},
                    {id: 9, nombre: "cocacola", precio: 300},
                    {id: 10, nombre: "sprite", precio: 300},
                    {id: 11, nombre: "speed", precio: 200},
                    {id: 12, nombre: "agua", precio: 100}]

//cartas

let cartas=document.getElementById("cartas");
for(const producto of productos){
    let carta=document.createElement("div");
    carta.className="card col-md-3";
    carta.innerHTML=`
        <div class="card-body">
            <h5 class="card-title">${producto.nombre}</h5>
            <p class="card-text">${producto.precio}</p>
            <a href="#" class="btn btn-primary">COMPRAR</a>
        </div>
    `;
    cartas.append(carta);
}


let titulo=document.getElementById("titulo");
titulo.style.textAlign="center";
titulo.style.margin="30px";
titulo.style.color="white"
titulo.style.backgroundColor="RoyalBlue"
titulo.style.padding="30px";

let abajo=document.getElementById("abajo");
abajo.style.textAlign="center";
abajo.style.color="RoyalBlue"

let principal=document.getElementById("principal");
principal.style.margin="30px";

let fin=document.getElementById("fin");
fin.style.margin="30px";
fin.style.padding="20px";


// lista de productos 

const carrito = []

const productos = [{id: 1, nombre: "fernet", precio: 2000, foto: "./imagenes/Fernet_Branca.jpg"},
                    {id: 2, nombre: "vino tinto", precio: 1000, foto: "./imagenes/vinotinto.jpeg"},
                    {id: 3, nombre: "vino blanco", precio: 850, foto: "./imagenes/vinoblanco.jpg"},
                    {id: 4, nombre: "champagne", precio: 3000, foto: "./imagenes/champagne.jpg"},
                    {id: 5, nombre: "smirnof", precio: 2000, foto: "./imagenes/smirnof.jpeg"},
                    {id: 6, nombre: "absolut", precio: 3500, foto: "./imagenes/absolut.jpg"},
                    {id: 7, nombre: "sixpack imperial", precio: 800, foto: "./imagenes/imperial.jpg"},
                    {id: 8, nombre: "sixpack andes", precio: 800, foto: "./imagenes/andes.jpg"},
                    {id: 9, nombre: "cocacola", precio: 300, foto: "./imagenes/cocacola.jpg"},
                    {id: 10, nombre: "sprite", precio: 300, foto: "./imagenes/sprite.jpg"},
                    {id: 11, nombre: "speed", precio: 200, foto: "./imagenes/speed.jpeg"},
                    {id: 12, nombre: "agua", precio: 100, foto: "./imagenes/agua.jpg"}
]

//cartas

let cartas=document.getElementById("cartas");
for(const producto of productos){
    let carta=document.createElement("div");
    carta.className="card col-md-3";
    carta.innerHTML=`
        <img src="${producto.foto}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${producto.nombre}</h5>
            <p class="card-text">${producto.precio}</p>
            <button id="miBoton--${producto.nombre}" class="btn btn-primary">COMPRAR</button>
        </div>
    `;
    cartas.append(carta);

 
    let miBoton= document.getElementById(`miBoton--${producto.nombre}`)

    miBoton.addEventListener("click", (e) => {
        e.preventDefault()
        console.log("agregaste esta bebida al carrito")
        carrito.push(producto)
    })
    
}

//boton sw suma total del carrito

let botonFinDeCompra = document.getElementById("fin")
let precioFinal = 0
let checkOut = 0
botonFinDeCompra.addEventListener ("click", (e) => {
    e.preventDefault ();
    precioFinal = carrito.map (carrito => carrito.precio)
    checkOut = precioFinal.reduce ((ac,el) => ac + el,0)
    console.table(carrito);
    const filtro = carrito.filter ((pro) => pro.celiacos==true)
    console.log ("Los siguientes productos son aptos para celiacos")
    console.log (filtro)

    console.log ("El total a pagar es $" + checkOut)


})
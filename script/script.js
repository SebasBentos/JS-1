const persona = [];

for (let i = 0; i < 1; i++) {

    let nombre = prompt("Ingrese tu nombre de usuario");
    let contraseña = prompt("Ingrese tu contraseña");

    let obj = { nombre: nombre, contraseña: contraseña };

    persona.push(obj);

}

console.log(persona);

let edad = prompt("Ingrese su edad");

if (edad >= 18) {
    alert("Sos mayor de edad. Podes ingresar.");
} else {
    alert("Sos menor de edad. No podes ingresar.");
}


let respuesta = prompt("Desea hacer una compra?");

while (respuesta != "si" && respuesta != "Si" && respuesta != "SI") {
    alert("muchas gracias, vuelva pronto");
}
alert(" sera atendido en la brevedad");


function compras() {

    const recorrer = [
        { id: 1, nombre: "zapatillas", precio: 9000 },
        { id: 2, nombre: "remeras", precio: 4250 },
        { id: 3, nombre: "pantalones", precio: 8500 },
        { id: 4, nombre: "medias", precio: 1200 },
        { id: 4, nombre: "boxer", precio: 2500 },
    ];

    let direccion = prompt("Ingrese su direccion");
    const numeroDireccion = prompt("Ingrese numero de direccion");
    let producto = prompt("Que producto desea comprar?: \n1-Zapatillas. \n2-Remeras. \n3- Pantales. \n4- Medias. \n5-Boxes.");


    let productos = recorrer.find(item => item.nombre === producto);
    console.log(productos);


    switch (producto) {


        case "1":
            let zapatillasPrecio = 9000;
            let zappatilla = prompt("ingrese marca de la zapatilla que decea comprar ");
            let zapatillaNumero = prompt("ingrese cuantas zapatillas decea comprar ");
            let zapatillasTalle = prompt("ingrese el talle de la zapatilla que decea comprar ");

            const stock = 100;
            const ventas = zapatillaNumero
            resta = stock - ventas

            if (resta > 20) {
                console.log("tenemos stock");

            } else if (resta > 1) {
                console.log("quedan pocos stock");
            }
            else {
                console.log("no tenemos mas stock");
            }


            while (producto != "1") {

                alert("Ingrese nuevamente que decea comprar");
            }

            alert(`Su pedido para ${direccion} ${numeroDireccion}  de ${zapatillaNumero} zapatillas ${zappatilla} talles ${zapatillasTalle} esta siendo preparado el precio final es de :${zapatillasPrecio * zapatillaNumero}`);


            break;


        case "2":
            let remerasPrecio = 4250;
            let remereras = prompt("ingrese marca de la remeras decea comprar");
            let remerasNumero = prompt("ingrese la cantidad de remeras que decea comprar");
            let remerasTalle = prompt("ingrese el talle de la remeras que decea comprar ");

            const stockRemera = 50
            const VentasRemera = remerasNumero
            resta = stockRemera - VentasRemera

            if (resta > 20) {
                console.log("tenemos stock");

            } else if (resta > 1) {
                console.log("quedan pocos stock");
            }
            else {
                console.log("no tenemos mas stock");
            }


            while (producto != "2") {
                alert("Ingrese nuevamente que decea comprar");
            }
            alert(`su pedido para ${direccion} ${numeroDireccion}  de ${remerasNumero} remeras ${remereras} talles ${remerasTalle} esta siendo preparado el precio final es de :
                       ${remerasPrecio * remerasNumero}`);
            break;

        case "3":
            let pantalonesPrecio = 8500;
            let pantalones = prompt("ingrese marca de la pantalones decea comprar");
            let pantalonesNumero = prompt("ingrese la cantidad de pantalones que decea comprar");
            let pantalonesTalle = prompt("ingrese el talle de la pantalones que decea comprar ");

            const stockPantalones = 10
            const VentasPantalones = pantalonesNumero
            resta = stockPantalones - VentasPantalones


            if (resta > 20) {
                console.log("tenemos stock");

            } else if (resta > 1) {
                console.log("quedan pocos stock");
            }
            else {
                console.log("no tenemos mas stock");
            }

            while (producto != "3") {
                alert("Ingrese nuevamente que decea comprar");
            }
            alert(`su pedido para ${direccion} ${numeroDireccion}  de ${pantalonesNumero} pantalones ${pantalones} talles ${pantalonesTalle} esta siendo preparado el precio final es de:
                           ${pantalonesPrecio * pantalonesNumero}`);
            break;

        case "4":
            let mediasPrecio = 1200;
            let medias = prompt("ingrese marca de la medias decea comprar");
            let mediasNumero = prompt("ingrese cantidad de par media que decea comprar");
            let mediasTalle = prompt("ingrese el talle de la medias que decea comprar ");

            const stockMedias = 10
            const VentasMedias = MediasNumero
            resta = stockMedias - VentasMedias


            if (resta > 20) {
                console.log("tenemos stock");

            } else if (resta > 1) {
                console.log("quedan pocos stock");
            }
            else {
                console.log("no tenemos mas stock");
            }



            while (producto != ("4")) {
                alert("Ingrese nuevamente que decea comprar");
            }
            alert(`su pedido para ${direccion} ${numeroDireccion}  de ${mediasNumero} medias ${medias} talles ${mediasTalle} esta siendo preparado el precio final es de : ${mediasPrecio * mediasNumero}`);


            break;

        case "5":
            let boxerPrecio = 2500;
            let boxer = prompt("ingrese marca de la boxer decea comprar");
            let boxerNumero = prompt("ingrese cantidad de par boxers que decea comprar");
            let boxersTalle = prompt("ingrese el talle de boxers que decea comprar ");

            const stockBoxer = 25
            const VentasBoxer = boxerNumero
            resta = stockBoxer - VentasBoxer

            if (resta > 20) {
                console.log("tenemos stock");

            } else if (resta > 1) {
                console.log("quedan pocos stock");
            }
            else {
                console.log("no tenemos mas stock");
            }

            while (producto != 5) {
                alert("Ingrese nuevamente que decea comprar");
            }
            alert(`su pedido para ${direccion} ${numeroDireccion}  de ${boxerNumero} boxers ${boxer} talles ${boxersTalle} esta siendo preparado el precio final es de : ${boxerPrecio * boxerNumero}`);

            break;
        default:
            alert("error en el tipeo del producto");
            break;

    }

    producto();

}

compras();

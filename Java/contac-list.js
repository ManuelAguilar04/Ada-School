let listaContacto = [
    {
    id : 1,
    nombre: "Manuel",
    apellido: "Aguilar",
    celular: "98102595",
    ubicacion: {ciudad: "Choluteca"}
},

{
    id : 2,
    nombre: "Jose",
    apellido: "Perez",
    celular: "999999",
    ubicacion: {ciudad: "Cortes"}
},

];

function agregarContacto(nuevoContacto){
    listaContacto.push(nuevoContacto);
}

function contactoBorrar(borrarContacto){
    let nuevalista = listaContacto.filter((contacto)=>contacto.id !== borrarContacto);
}

function imprimirContacto(){
    console.log(listaContacto);
}

let nuevoContacto = {
    id: 2,
    nombre: "Carlos",
    apellido: "Paz",
    celular: "88888888",
    ubicacion: {ciudad: "San Pedro Sula",}
}

agregarContacto(nuevoContacto);
imprimirContacto();
contactoBorrar(1);
imprimirContacto();

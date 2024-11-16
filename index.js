const { registrar, leer } = require('./operaciones');

const [ , , operacion, ...args] = process.argv;

if (operacion === "registrar") {
    const [nombre, edad, animal, color, enfermedad] = args;
    if (!nombre || !edad || !animal || !color || !enfermedad) {
        console.log("Faltan datos para registrar la cita.");
        console.log("Uso: node index.js registrar <nombre> <edad> <animal> <color> <enfermedad>");
    } else {
        registrar(nombre, edad, animal, color, enfermedad);
    }
} else if (operacion === "leer") {
    leer();
} else {
    console.log("Operación no reconocida.");
    console.log("Uso: node index.js <registrar|leer> [args]");
}

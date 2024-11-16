const fs = require('fs');

function registrar(nombre, edad, animal, color, enfermedad) {

    const citas = JSON.parse(fs.readFileSync('citas.json', 'utf-8'));
    
    const nuevaCita = { 
        nombre, 
        edad, 
        animal, 
        color, 
        enfermedad 
    };
    
    citas.push(nuevaCita);
    
    fs.writeFileSync('citas.json', JSON.stringify(citas, null, 2), 'utf-8');
    console.log(`Cita registrada para ${nombre}`);
}

function leer() {
    const citas = JSON.parse(fs.readFileSync('citas.json', 'utf-8'));
    
    if (citas.length === 0) {
        console.log("No hay citas registradas.");
    } else {
        console.log("Citas registradas:");
        citas.forEach((cita, index) => {
            console.log(
                `#${index + 1} Nombre: ${cita.nombre}, Edad: ${cita.edad}, Animal: ${cita.animal}, Color: ${cita.color}, Enfermedad: ${cita.enfermedad}`
            );
        });
    }
}

module.exports = { registrar, leer };

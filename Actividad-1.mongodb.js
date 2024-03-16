db.createCollection("users");
db.users.insertMany(
    [
        {
            nombres : "Mateo",
            apellidos : "velez",
            correo: "mateo.velez@gmail.com",
            ciudad : "Medellin",
            pais : "Colombia",
            salario : "1080",
            edad: 22,
            altura: 175,
            peso : 178, 
        },
        {
            nombre: "Juan",
            apellido: "López",
            correo: "juan.lopez@example.com",
            ciudad: "Ciudad de México",
            pais: "México",
            salario: 35000,
            edad: 45,
            altura: 170,
            peso: 180
        },
        {
            nombre: "Emily",
            apellido: "Johnson",
            correo: "emily.johnson@example.com",
            ciudad: "Nueva York",
            pais: "Estados Unidos",
            salario: 65000,
            edad: 30,
            altura: 165,
            peso: 140
        },
        {
            nombre: "Santiago",
            apellido: "Garcia",
            correo: "santiago.garcia@example.com",
            ciudad: "Madrid",
            pais: "España",
            salario: 40000,
            edad: 55,
            altura: 175,
            peso: 160
        },
        {
            nombre: "Maria",
            apellido: "Santos",
            correo: "maria.santos@example.com",
            ciudad: "São Paulo",
            pais: "Brasil",
            salario: 30000,
            edad: 25,
            altura: 160,
            peso: 130
        },
        {
            nombre: "Ahmed",
            apellido: "Khan",
            correo: "ahmed.khan@example.com",
            ciudad: "Lahore",
            pais: "Pakistán",
            salario: 20000,
            edad: 35,
            altura: 172,
            peso: 150
        },
        {
            nombre: "Li",
            apellido: "Wei",
            correo: "li.wei@example.com",
            ciudad: "Beijing",
            pais: "China",
            salario: 55000,
            edad: 40,
            altura: 168,
            peso: 145
        },
        {
            nombre: "Anna",
            apellido: "Novak",
            correo: "anna.novak@example.com",
            ciudad: "Praga",
            pais: "República Checa",
            salario: 45000,
            edad: 33,
            altura: 170,
            peso: 135
        },
        {
            nombre: "José",
            apellido: "Fernández",
            correo: "jose.fernandez@example.com",
            ciudad: "Buenos Aires",
            pais: "Argentina",
            salario: 38000,
            edad: 48,
            altura: 175,
            peso: 170
        },
        {
            nombre: "Fatima",
            apellido: "Ali",
            correo: "fatima.ali@example.com",
            ciudad: "Karachi",
            pais: "Pakistán",
            salario: 22000,
            edad: 28,
            altura: 163,
            peso: 140
        },
        {
            nombre: "Luca",
            apellido: "Rossi",
            correo: "luca.rossi@example.com",
            ciudad: "Roma",
            pais: "Italia",
            salario: 42000,
            edad: 37,
            altura: 178,
            peso: 160
        },
        {
            nombre: "Sophie",
            apellido: "Dubois",
            correo: "sophie.dubois@example.com",
            ciudad: "Paris",
            pais: "Francia",
            salario: 50000,
            edad: 32,
            altura: 165,
            peso: 125
        },
        {
            nombre: "Amir",
            apellido: "Hosseini",
            correo: "amir.hosseini@example.com",
            ciudad: "Teherán",
            pais: "Irán",
            salario: 28000,
            edad: 42,
            altura: 180,
            peso: 170
        },
        {
            nombre: "Elena",
            apellido: "Ivanova",
            correo: "elena.ivanova@example.com",
            ciudad: "Moscú",
            pais: "Rusia",
            salario: 60000,
            edad: 39,
            altura: 170,
            peso: 140
        },
        {
            nombre: "Mohamed",
            apellido: "Abdelaziz",
            correo: "mohamed.abdelaziz@example.com",
            ciudad: "El Cairo",
            pais: "Egipto",
            salario: 25000,
            edad: 29,
            altura: 175,
            peso: 155
        },
        {
            nombre: "Ananya",
            apellido: "Patel",
            correo: "ananya.patel@example.com",
            ciudad: "Bombay",
            pais: "India",
            salario: 33000,
            edad: 31,
            altura: 160,
            peso: 135
        },
        {
            nombre: "Johan",
            apellido: "Andersson",
            correo: "johan.andersson@example.com",
            ciudad: "Estocolmo",
            pais: "Suecia",
            salario: 48000,
            edad: 43,
            altura: 180,
            peso: 175
        },
        {
            nombre: "Gabriela",
            apellido: "Vargas",
            correo: "gabriela.vargas@example.com",
            ciudad: "Bogotá",
            pais: "Colombia",
            salario: 32000,
            edad: 27,
            altura: 165,
            peso: 150
        },
        {
            nombre: "Marco",
            apellido: "Moretti",
            correo: "marco.moretti@example.com",
            ciudad: "Milán",
            pais: "Italia",
            salario: 47000,
            edad: 36,
            altura: 175,
            peso: 160
        },
        {
            nombre: "Priya",
            apellido: "Gupta",
            correo: "priya.gupta@example.com",
            ciudad: "Delhi",
            pais: "India",
            salario: 27000,
            edad: 34,
            altura: 155,
            peso: 130
        },
        {
            nombre: "Miguel",
            apellido: "Fernández",
            correo: "miguel.fernandez@example.com",
            ciudad: "Madrid",
            pais: "España",
            salario: 37000,
            edad: 50,
            altura: 172,
            peso: 175
        }

    ]
)
db.users.find();

// Obtener todos los usuarios que sean mayores de 18 años.
db.users.find({edad: { $gte: 18 } });

// Obtener todos los usuarios que sean de Londres o de París.
db.users.find({
    $or: [
        {ciudad:{$eq: "Londres"}},
        {ciudad:{$eq: "Paris"}}
    ]
});

// Obtener a todos los usuarios que ganen más de $2000 al mes y tengan menos de 30 años.
db.users.find({
    $and:[
        {salario: {$gt: 2000}},
        {edad: {$lt: 30}}
    ]
});

// Obtener a todos los usuarios que sean de España y ganen más de $3000 al mes.
db.users.find ({
    $and:[
        {pais: {$eq: "España"}},
        {salario: {$gt: 3000}}
    ]
});

// Obtener todos los usuarios que tengan entre 25 y 35 años.
db.users.find({
    $and:[
        {edad: {$gte: 25}},
        {edad: {$lte: 35}}
    ]
})
// Obtener a todos los usuarios que no sean de Estados Unidos.
db.users.find({pais: {$ne: "Estados Unidos"}},)

// Obtener a todos los usuarios que sean de Londres y que ganen más de $2500 o que tengan más de 30 años.
db.users.find({
    ciudad: {$eq: "Madrid"},
    $or:[
        {salario: {$gte: 2500}},
        {edad: {$gte:30}}
    ]
})
// Obtener a todos los usuarios que sean de colombia y tengan un peso mayor a 140 libras.
db.users.find({
    $and:[
        {pais: {$eq: "Colombia"}},
        {peso: {$gte: 178}}
    ]
});
// Obtener a todos los usuarios que no sean de Londres ni de París.
db.users.find({
    $and:[
        {pais: {$ne: "londres"}},
        {pais: {$ne: "paris"}}
    ]
});
// Obtener a todos los usuarios que ganen menos de $2000 al mes o que tengan más de 40 años.
db.users.find({
    $or:[
        {salario: {$lte: 2000}},
        {edad: {$gte: 40}}
    ]
});
// Obtener a todos los usuarios que sean de Canadá y ganen más de $4000 al mes o que tengan una altura mayor a 180 cm.

db.users.find({
    pais: {$eq: "canada"},
    $or:[
        {salario: {$gte: 4000}},
        {altura: {$gte: 180}}
    ]
});
// Obtener todos los usuarios que sean de Italia y tengan entre 20 y 30 años.

db.users.find({
    $and:[
        {ciudad: {$eq: "Italia"}},
        {edad: {$gte: 20}},
        {edad: {$lte: 30}}
    ]
});
// Obtener todos los usuarios que no tengan un correo electrónico registrado.
db.users.find({
    correo: {$exists: false},
});
// Obtener todos los usuarios que sean de Francia y que su salario esté entre $3000 y $5000 al mes.
db.users.find({
    $and:[
        {pais: {$eq: "Francia"}},
        {salario: {$gte: 3000}},
        {salaro: {$lte: 5000}}
    ]
});
// Obtener todos los usuarios que sean de India y que tengan un peso menor a 120 libras o más de 140 libras.
db.users.find({
    pais: {$eq: "India"},
    $or:[
        {peso:{$lte: 120}},
        {peso:{$gte: 140}}
    ]
});
// Obtener todos los usuarios que sean de Argentina o de Chile y que tengan una edad menor a 25 años
db.users.find({
    $or:[
        {pais: {$eq: "Argentina"}},
        {pais: {$eq: "Chile"}},
    ]
    //Me falta el if
});

// Obtener a todos los usuarios que no sean de España ni de México y que ganen menos de $3000 al mes.
db.users.find({
    $and:[
        {pais: {$ne: "España"}},
        {pais: {$ne: "mexico"}},
        {salario:{$lt: 3000}},
    ]
});

// Obtener todos los usuarios que sean de Alemania y que tengan un salario menor a $4000 o una edad mayor a 35 años.
db.uaers.find({
    $and:[
        {pais:{$eq: "Alemania"}},
        {salario:{$lte: 4000}},
        {edad: {$gte: 35}}
    ]

})

// Obtener todos los usuarios que no sean de Colombia y que su altura sea menor a 170 cm.
db.users.find({
    $and:[
        {pais:{$ne: "Colombia"}},
        {altura: {$lte: 170}}
    ]
});
// Obtener todos los usuarios que sean de India y que no tengan un salario registrado.
db.users.find({
    $and:[
        {pais: {$eq: "India"}},
        {salario: {$exists: false}}
    ]
});

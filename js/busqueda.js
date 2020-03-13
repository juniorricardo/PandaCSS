'use stric'

let pepe = {
    foo: 'bar',
    age: 42,
    baz: { myProp: 12 }
}
var objecto = "Licencia{id=15, tipo='Inasistencia de Días', diasD=30}";

var n = objecto.split("Licencia")[1].replace(/=/g,":");

console.log(n);
console.log(pepe.age);
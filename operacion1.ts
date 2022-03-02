const operacion = async(num1:number,num2:number) =>{
let operaciones = await import ('./operacion.js');
let resultado1 = operaciones.suma(num1,num2);
return resultado1;
}

const operaciones = async(num1:number,num2:number) =>{
let resultado = await operacion(num1,num2);
console.log(operaciones);
}
operaciones(30,45)
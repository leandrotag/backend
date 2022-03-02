export const suma = (num1:number,num2:number) =>{
    return new Promise((resolve) =>{
        setTimeout(() => {
        console.log(num1+num2);
    },5000);
    })};

export const resta = (num1:number,num2:number) =>{
    return new Promise((resolve) =>{
        setTimeout(() => {
        console.log(num1-num2);
    },4000);
    })};

/*for (let i=0;i<=100;i++) {
    if ((i%2)==0) {
    console.log(`Число ${i}`);
}
}
    let sum = 0;
for (let i=1;i<=100;i++) {
    sum = sum + i 
}
console.log(`Sum = ${sum}`);*/

let counter = 0;
for (let a=3;a<=7;a++)
{let dividers = 0;
    for (let i=1;i<=a;i++)
    {if ((a%i)==0)
        {/*console.log(`Число делится на ${i}`);*/
        dividers=dividers+1;}
    }
    /*console.log(`dividers = ${dividers}`);*/  
    if (dividers<=2)
    {counter=counter+1;
    console.log(`Простое число = ${a}`);}
}
console.log(`Всего простых чисел: ${counter}`);
function solve(n, m){

    let num1 = Number(n);
    let num2 = Number(m);
    let sum = 0 ;

    for (let index = num1; index <= num2; index++) {
       sum += index;
        
    }
   return  sum;
}

 solve('5','10');


function  solve(strings){

    let sum =0;

    const first =Number( strings.shift());
    const last =Number( strings.pop());
      
    return first + last;
 

}
console.log(solve(['20', '30', '40']))
console.log(solve(['5', '10']))
console.log(solve(['5']));


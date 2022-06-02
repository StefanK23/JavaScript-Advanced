function solve (n,k){
let output = [1];


for (let i = 0; i < n -1; i++) {
    
    let sum = 0;
    let sliced = output.slice(-k);
    sum = sliced.reduce((a,b) => a +b, 0);
    output.push(sum);
}
return output;





}

console.log(solve(6,3));
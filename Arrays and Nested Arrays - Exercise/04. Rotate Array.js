function solve(strings, number){
 
    for (let i = 0; i < number; i++) {
        strings.unshift(strings.pop());
        
        
    }
    console.log(strings.join(" "))
 

}
solve(['1', 
'2', 
'3', 
'4'], 
2
);
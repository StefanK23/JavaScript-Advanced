function solve(strings){

    let initialNumber = 1;
    let result = [];
   
    strings.forEach(element => {
        if(element == "add"){
            result.push(initialNumber);
        }else{
            result.pop();
        }
        initialNumber++;
    });

    if(result.length === 0){
        console.log("Empty");
    }else{
        console.log(result.join('\n'));
    }




}

solve(['add', 
'add', 
'add', 
'add']
) ;
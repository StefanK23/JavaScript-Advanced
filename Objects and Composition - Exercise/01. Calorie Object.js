function solve (strings){
   
    const result = {};
    
    for (let i = 0; i < strings.length; i+=2) {
        result[strings[i]] = Number(strings[i+1]);
        
    }
    console.log(result);
    
  
}
solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);

function solve (n){
  let string = "";
  

  if(n === 0 ){
     n = 5;   
  }

  for (let index = 0; index < n; index++) {
     for (let j = 0; j < n; j++) {
        
         string+= "* ";
     }
     string += '\n';

  }
  console.log(string);
  
}
solve();
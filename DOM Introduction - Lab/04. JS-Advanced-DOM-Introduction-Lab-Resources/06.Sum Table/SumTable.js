function sumTable() {
  
//select first table 
const rows=  document.querySelectorAll('table tr');
let sum =0 ;

// select only rowss , cantaining values
// - find last cell
// - add cell value to sum
for (let i = 1; i < rows.length; i++){

    const cell = rows[i].lastElementChild;
     sum += Number(cell.textContent);  
       
}


// select element with id"sum" and set its value
 document.getElementById('sum').textContent = sum; 
 
}
function addItem() {
  
    // selet input field and read value ;
    const input = document.getElementById('newItemText');

  // create new <li> element and set its content to inptut value
   const liElement =  document.createElement('li');
   liElement.textContent = input.value ;

    
  // select  <ul> and append new<li> element ;
  document.getElementById('items').appendChild(liElement);

  // clear the input field ;
  input.value = "";



}
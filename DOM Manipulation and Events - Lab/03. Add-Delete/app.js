function addItem() {
     
    //Взимаме текстовото поле като променлива 
  const textArea = document.getElementById('newItemText');
   
   //създаваме нов елемент за добавяне в списъка
    const newElement = document.createElement('li');
    
    //казваме,че съдържанието на новия елемент отговаря на текстовото поле
    newElement.textContent = textArea.value;

    //създаваме бутон за изтриване 
    const button = document.createElement('a');
    button.href = '#';
    button.textContent = '[Delete]';
    button.addEventListener('click', removeElement);

    newElement.appendChild(button);

    //добяваме обекта  в полето с нужното АЙ ди
    document.getElementById('items').appendChild(newElement);

    textArea.value = "" ;

       function removeElement(ev){
           const parent = ev.target.parentNode;
           parent.remove();
       }
   
      
 }

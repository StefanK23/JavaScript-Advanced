function create(words) {
   //create div
   //create p 
   // set p content 
   // configure p to be hidden (dispay: none)
   // add <p> to <div>
   //configure <div> eventlistener 

   const content = document.getElementById('content');

   for( let word of words){

  

   const div = document.createElement('div');
   const paragraph = document.createElement('p');
   paragraph.textContent = word;
   paragraph.style.display = 'none';
   div.appendChild(paragraph);

   div.addEventListener('click', reveal);

   content.appendChild(div);

   function reveal(ev) {
     ev.currentTarget.children[0].style.display = '';
   }

 }

}
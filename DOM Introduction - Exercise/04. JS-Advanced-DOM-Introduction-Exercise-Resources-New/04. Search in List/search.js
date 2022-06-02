function search() {
   
   let match = 0;
   const element =Array.from(document.querySelectorAll("ul li"));
   const text = document.getElementById("searchText").value;
   element.forEach ((el) => {
      if(el.textContent.includes(text)){
        el.style.fontWeight = "bold";
        el.style.textDecoration = "underLine" ; 
         match++;
      }else {
         el.style.fontWeight = "normal";
         el.style.textDecoration = "";
      }
     
   })
   document.getElementById('result').textContent = `${match} matches found`




}

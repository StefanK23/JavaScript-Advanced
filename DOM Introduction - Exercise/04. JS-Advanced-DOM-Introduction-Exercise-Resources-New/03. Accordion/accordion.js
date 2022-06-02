function toggle() {
    const butoon = document.querySelector(".button");
    const textDiv = document.getElementById("extra");

    butoon.textContent = butoon.textContent == "More" ? "Less" : "More";
     
    textDiv.style.display = textDiv.style.display == "none" || 
    textDiv.style.display == " " ?  textDiv.style.display = "block" : textDiv.style.display = "none";

    console.log( butoon);

}
function extractText() {
    const items = document.querySelectorAll('#items');

    const  result =  [...items].map(e => e.textContent).join('\n');
       document.getElementById('result').textContent = result;
}
/*function solve() {

  //# configure event listeners
  // select all buttons 
  // first button ->table generation
  //second button -> buy furniture

  const table = document.querySelector('table.table tbody');

  const [input, output] = Array.from(document.querySelectorAll('textarea'));
  const [generateBtn, buybtn] = Array.from(document.querySelectorAll('button'));

  generateBtn.addEventListener('click', generate);
  buybtn.addEventListener('click', buy);


  // # table generation 
  function generate(e) {
    // readd input JSON and parse it 
    // for every array element, create table row

    const data = JSON.parse(input.value);

    for (let item of data) {
      const row = document.createElement('tr');

      const imgCell = document.createElement('td');
      const nameCell = document.createElement('td');
      const priceCell = document.createElement('td');
      const decFactorCell = document.createElement('td');
      const checkCell = document.createElement('td');

      const img = document.createElement('img');
      img.src = item.img;
      imgCell.appendChild(img);

      const nameP = document.createElement('p');
      nameP.textContent = item.name;
      nameCell.appendChild(nameP);

      const priceP = document.createElement('p');
      priceP.textContent = item.price;
      priceCell.appendChild(priceP);

      const decP = document.createElement('p');
      decP.textContent = item.decFactor;
      decFactorCell.appendChild(decP);

      const check = document.createElement('input');
      check.type = 'checkbox';
      checkCell.appendChild(check);

      row.appendChild(imgCell);
      row.appendChild(nameCell);
      row.appendChild(priceCell);
      row.appendChild(decFactorCell);
      row.appendChild(checkCell);

      table.appendChild(row);

    }
  }

  // # buy furniture

  function buy(e) {
    // select all checked boxes 
    // filter only checked boxes
    // repeat for every selected checkBox 
    // -- select parent row
    // -- read item information 
    // display output

    const furniture = Array
      .from(document.querySelectorAll('input[type = "checkbox"]:checked'))
      .map(b => b.parentElement.parentElement)
      .map(r => ({
        name: r.children[1].textContent,
        price: Number(r.children[2].textContent),
        decFactor: Number(r.children[3].textContent)
      }))

    const names = [];
    let total = 0;
    let decFactor = 0;

    for (let item of furniture) {
      names.push(item.name);
      total += item.price;
      decFactor += item.decFactor;
    }

    const result = `Bought furniture: ${names.join(', ')}
    Total price: ${total.toFixed(2)} 
    Average decoration factor: ${decFactor / furniture.length}`;

    output.value = result;
  }



}
*/

function solve() {
  let [input, output] = Array.from(document.querySelectorAll('textarea'));
 
  let [generate, buy] = Array.from(document.getElementsByTagName('button'));
  let tableTBody = document.querySelector('table.table tbody');
 
  generate.addEventListener('click', showContent);
  buy.addEventListener('click', buyFurniture);
 
  function showContent(e) {
 
    let obj = JSON.parse(input.value);
    for (let item of obj) {
      let row = document.createElement('tr');
      let imgCell = document.createElement('td');
      let nameCell = document.createElement('td');
      let priceCell = document.createElement('td');
      let decFacCell = document.createElement('td');
      let checkboxCell = document.createElement('td');
 
      let img = document.createElement('img');
      img.src = item.img;
      imgCell.appendChild(img);
 
      let name = document.createElement('p');
      name.textContent = item.name;
      nameCell.appendChild(name);
 
      let price = document.createElement('p');
      price.textContent = item.price;
      priceCell.appendChild(price);
 
      let dec = document.createElement('p');
      dec.textContent = item.decFactor;
      decFacCell.appendChild(dec);
 
      let check = document.createElement('input');
      check.type = 'checkbox';
      checkboxCell.appendChild(check);
 
      row.appendChild(imgCell);
      row.appendChild(nameCell);
      row.appendChild(priceCell);
      row.appendChild(decFacCell);
      row.appendChild(checkboxCell);
 
      tableTBody.appendChild(row);
    }
  }
  function buyFurniture(e) {
    let checkedBoxes = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'))
      .map(e => e.parentElement.parentElement)
      .map(r => ({
        name: r.children[1].textContent,
        price: Number(r.children[2].textContent),
        decFactor: Number(r.children[3].textContent)
      }));
    let names = [];
    for (let item of checkedBoxes) {
 
      names.push(item.name);
    }
    let total = checkedBoxes.reduce((acc, el) => acc + el.price, 0);
    let dec = checkedBoxes.reduce((acc, el) => acc + el.decFactor, 0) / checkedBoxes.length;
 
    output.textContent += `Bought furniture: ${names.join(', ')}\n`;
    output.textContent += `Total price: ${total.toFixed(2)}\n`;
    output.textContent += `Average decoration factor: ${dec}`;
  }
}
 

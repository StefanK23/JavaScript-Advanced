function solve(arr) {

    let sortedArr = {};
    arr.forEach((element) => {
        let [productName, price] = element.split(" : ");
        price = Number(price);
        const index = productName[0];

        if (!sortedArr[index]) {
            sortedArr[index] = {};
        }
        sortedArr[index][productName] = price;
        })
        let initialSort = Object.keys(sortedArr).sort((a,b )=> a.localeCompare(b));
        
        for (const key of initialSort) {
            
            let products = Object.entries(sortedArr[key]).sort((a,b) => a[0].localeCompare(b[0]));
            console.log(key);
            products.forEach((el) => {
                console.log(`  ${el[0]}: ${el[1]}`)
            })
    
        }



};

solve(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'])

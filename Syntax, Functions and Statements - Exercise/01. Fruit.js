function buyfruit(fruit, weight, money){// weight in grams and money per kilo!

    const weightInKilo = (weight /1000);
    let price = (money* weightInKilo);

    console.log(`I need $${price.toFixed(2)} to buy ${weightInKilo.toFixed(2)} kilograms ${fruit}.`)

}
buyfruit('orange', 2500, 1.80);
buyfruit('apple', 1563, 2.35);
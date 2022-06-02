function solve4(arr){
  const result = [];

  arr.forEach((element) => {
      let[name, level, items] = element.split(" / ");
      result.push({
          name: name,
          level: Number(level),
          items: items ? items.split(", ") : []  
      })
  });
  console.log(JSON.stringify(result));



}

solve4(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']
)
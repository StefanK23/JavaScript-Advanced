function population(townAsStrings) {

    //iterate over input 
    //parse entries 
    //store data
    //print result
    const towns = {};

    for (const data of townAsStrings) {
        const tokens = data.split(' <-> ');
           const name = tokens[0];
           const popul =Number( tokens[1]);


           if(towns[name]== undefined){
                towns[name]= popul;
           }else{
               towns[name] += popul;
           }
          
    }
     for (const name in towns   ) {
        console.log(`${name} : ${towns[name]}`)
     }

}
population(['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000']
);
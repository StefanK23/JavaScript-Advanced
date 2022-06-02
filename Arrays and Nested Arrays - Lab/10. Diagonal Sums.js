function diagonal(input){

    let firstDiagonal = 0;
    let secondDiagonal = 0;
    let index = 0;
    let secondIndex = input[0].length -1;
    input.forEach(array => {
        firstDiagonal += array[index++];
        secondDiagonal += array[secondIndex--];
    });
 console.log( firstDiagonal + ' ' + secondDiagonal);

}
diagonal([[20, 40],
          [10, 60]]
   )

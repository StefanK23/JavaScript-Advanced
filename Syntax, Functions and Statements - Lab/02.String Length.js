function solve(word1, word2, word3 ){
  let sumlength;
  let averagelength;

  let word1length = word1.length;
  let word2length = word2.length;
  let word3length = word3.length;

  sumlength = word1length + word2length + word3length;
  averagelength = Math.floor(sumlength / 3);

console.log(sumlength);
console.log(averagelength);
}
solve('chocolate','ice cream','cake')

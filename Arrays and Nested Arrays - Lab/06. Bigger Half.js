function solve(input) {
    input.sort((a, b) => a - b);
    let secondHalf = Math.ceil((input.length - 1) / 2);
    let result = input.slice(secondHalf);
    return `[${result.join(", ")}]`;
}





console.log(solve([4, 7, 2, 5]))
console.log(solve([3, 19, 14, 7, 2, 19, 6]))
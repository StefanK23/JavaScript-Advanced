class Stringer {
    constructor(innerString, innerLenght) {

        this.innerString = innerString;
        this.innerLenght = innerLenght;
    }

    increase(value) {
        this.innerLenght += value;
    }
    decrease(value) {
        this.innerLenght -= value;
        if(this.innerLenght <0) {
            this.innerLenght =0;
        }

    }
    toString(){
       if(this.innerString.length > this.innerLenght){
         let innerCopy = this.innerString.substring(0, this.innerLenght);
         innerCopy += '...';
         return innerCopy;
       }
        return this.innerString;
    }

}

let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4);
console.log(test.toString());

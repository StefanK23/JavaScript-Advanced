class SortedList {

    constructor(list = []) {
        this.list = list.sort((a, b) => a - b);
        this.size = this.list.length;
    }
    add(element) {
        this.list.push(element);
        this.list.sort((a, b) => a - b);
        this.size++;
        return;
    }

    remove(index) {
        if (index < 0 || index >= this.list.length) {
            throw new Error(`Index doesn't exist`)
        }else {
            this.list.splice(index, 1);
            this.size--;
            return;
        }

    }

    get(index){
        if(index <0 || index >= this.list.length){
            throw new Error(`Index doesn't exist`);

        }else{
            return this.list[index];
        }
    }
}
let listed = new SortedList();
listed.add(5);
listed.add(6);
listed.add(7);
console.log(listed.get(1)); 
listed.remove(1);
console.log(listed.get(1));

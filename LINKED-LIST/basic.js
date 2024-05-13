
class Node{
    constructor(value){
        this.value = value
        this.next = null;
    }
}

class List {
    constructor() {
        this.head = null;
        this.size = 0
    }
    isEmpty(){
        return this.size === 0
    }
    append(value) {
        let node = new Node(value);
        if(this.isEmpty()){
            this.head = node
        }else{
            let current = this.head
            while(current.next){
                current = current.next
            }
            current.next = node
        }
        this.size++;
    }

    display(){
        let values = ''
        let current = this.head
        while(current) {
            values += current.value + ' '
            current = current.next
        }
        console.log(values)
    }
}

let list = new List()
list.append(1)
list.append(2)
list.append(3)
list.display()
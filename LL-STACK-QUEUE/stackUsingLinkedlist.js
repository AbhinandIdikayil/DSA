
class Node{
    constructor(value){
        this.value = value
        this.next = null;
    }
}

class Stack{
    constructor(){
        this.top = null;
    }
    isEmpty() {
        return this.top === null
    }
    push(value){
        let node = new Node(value);
        if(this.isEmpty()){
            this.top = node
        } else {
            node.next = this.top
            this.top = node
        }
    }
    pop() {
        this.top = this.top.next
    }
    print() {
        let values = ''
        let current = this.top
        while(current) {
            values += current.value + ' '
            current = current.next
        }
        console.log(values)
    }
}
const stack = new Stack()
stack.push(1)
stack.push(2)
stack.push(3)
stack.pop()
console.log(stack)
stack.print()
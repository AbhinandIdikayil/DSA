

class Queue {
    constructor() {
        this.queue = []
    }
    isEmpty() {
        return this.queue.length === 0
    }
    enqueue(value) {
        this.queue.push(value)
    }
    dequeue() {
        if (this.isEmpty()) {
            return null;
        }
        return this.queue.shift()
    }
    print(){
        let  values = ''
        for (let i = 0; i < this.queue.length; i++) {
            values += this.queue[i]  + ' '        
        }
        console.log(values)
    }
}

class Stack{
    constructor(){
        this.q1 = new Queue()
        this.q2 = new Queue()
    }
    push(value){
        this.q1.enqueue(value)
        while(!this.q2.isEmpty()){
            this.q1.enqueue(this.q2.dequeue())
        }
        let temp = this.q1
        this.q1 = this.q2
        this.q2 = temp
    }

    pop() {
        if(this.q2.isEmpty()){
            return null
        }
        return this.q2.dequeue()
    }

    printStack(){
        this.q2.print()
    }
}

const stack = new Stack()
stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
stack.pop()
stack.printStack()
console.log(stack)

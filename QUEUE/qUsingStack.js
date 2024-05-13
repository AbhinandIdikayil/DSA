

class Stack {
    constructor() {
        this.stack = []
    }
    isEmpty() {
        return this.stack.length == 0
    }
    push(value) {
        this.stack.push(value)
    }
    pop() {
        return this.stack.pop()
    }
    print() {
        let values = ''
        for (let i = 0; i < this.stack.length; i++) {
            values += this.stack[i] + ' '
        }
        console.log(values)
    }
}


class Queue {
    constructor() {
        this.s1 = new Stack()
        this.s2 = new Stack()
    }
    enqueue(value) {
        this.s1.push(value)
    }
    dequeue() {
        if (this.s2.isEmpty()) {
            while (!this.s1.isEmpty()) {
                this.s2.push(this.s1.pop())
            }
        }
        return this.s2.pop()
    }
    printQueue(){
        this.s1.print() ?? this.s2.print()
    }
}

const queue = new Queue()
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)
queue.dequeue()
queue.printQueue()
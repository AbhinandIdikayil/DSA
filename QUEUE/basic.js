
class Stack{
    constructor() {
        this.stack = []
    }
    isEmpty() {
        return this.stack.length === 0
    }
    peek() {
        if(this.isEmpty()){
            return null
        } else {
            return this.stack[this.stack.length-1]
        }
    }
    push(value) {
        this.stack.push(value)
    }
    pop(){
        if(this.isEmpty()){
            return null
        } else {
            this.stack.pop()
        }
    }
    
    printStack() {
        if(this.isEmpty()){
            return null
        } else {
            let values = ''
            for(let i=0; i<this.stack.length; i++){
                values += this.stack[i] + ' '
            }
            return values
        }
    }
}
const stack = new Stack();
stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
console.log(stack.printStack())
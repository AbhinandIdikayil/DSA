
class Node{
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class BinarySearchTree{
    constructor() {
        this.root = null
    }
    isEmpty() {
        return this.root === null
    }
    insert(value) {
        let node = new Node(value)
        if(this.isEmpty()){
            this.root = node
        } else {
            this.insertHelper(node,this.root);
        }
    }
    insertHelper(node,root) {
        if(root == null){
            return null
        }
        if(node.value < root.value) {
            if(root.left == null){
                root.left = node
            } else {
                this.insertHelper(node,root.left)
            }
        } else {
            if(root.right == null) {
                root.right = node
            } else {
                this.insertHelper(node,root.right)
            }
        }
    }
    levelOrder() {
        let queue = []
        queue.push(this.root)
        while(queue.length) {
            let curr = queue.shift()
            console.log(curr.value)
            if(curr.left) {
                queue.push(curr.left)
            }
            if(curr.right) {
                queue.push(curr.right)
            }
        }
    }
}
const tree = new BinarySearchTree()
tree.insert(30)
tree.insert(40)
tree.insert(20)
tree.insert(7)
tree.levelOrder()
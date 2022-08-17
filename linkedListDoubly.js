class Node {
    constructor(data, prev = null, next = null){
        this.data = data
        this.prev = prev
        this.next = next
    }
}

class DoublyLinkedList {
    constructor() {
        this.head
        this.tail
    }
    setHead(data) {
        if(!this.head) {
            this.head = new Node(data)
            //this.tail = this.head
            return
        }else {
            //we will create a var that reps old head: null <- [prev:null, data: next: [node]] -> [node]
            let oldHead = this.head
            this.head = new Node(data)
            //redefine the new head's next to old head
            this.head.next = oldHead
            //redefine  the oldHeads prev to point to new head
            oldHead.prev = this.head
            return
        }
    }
    addNode(data) {
        if(!this.head){
            this.head = new Node(data)
        }else {
            let currentNode = this.head
            while(currentNode.next !== null) {
                currentNode = currentNode.next
            }
            //we are now at the last node of dll
            let newNode = new Node(data)
            currentNode.next = newNode
            newNode.prev = currentNode
            return
        }
    }
}

const dLL = new DoublyLinkedList()
dLL.setHead('Irene')

dLL.addNode('Raven')
dLL.addNode('Linda')
dLL.addNode('Nadege')
console.log(dLL)
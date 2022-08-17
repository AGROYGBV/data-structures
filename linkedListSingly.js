//////////node class
class Node {
    constructor(data, next = null){
        this.data = data
        this.next = next
        //this.prev = prev
    }
}

// const node1 = new Node('Irene')
// const node3 = new Node('Amanda')
// const node2 = new Node('Kasem')

// node1.next = node3
// node3.next = node2

// node2.next = null

// console.log(node1)
// console.log(node2)
// console.log(node3)

// console.log('THIS IS NODE3', node3)

////////////singly linkedList class

class SinglyLinkedList {
    constructor() {
        this.head
        this.tail
    }
    setHead(data) {
        //check to see if there's an existing head
        if(!this.head) {
            this.head = new Node(data)
            return
        } else {
            //redefine the head and the references
            let tempHead = this.head
            //set the new head
            this.head = new Node(data)
            //define the new heads reference to the oldhead
            this.head.next = tempHead
            return 
        }
    }
    addNode(data) {
        //traverse linked list
        //redefine last nodes pointer
         //we start at beginning of LL
        let currentNode = this.head
        //create a condition to check if we are at the end
        while(currentNode.next !== null) {
            currentNode = currentNode.next
        }
        currentNode.next = new Node(data)
        return
    }
    // create a function that console logs every node
    printNodes() {
        //we start at the head
        if(!this.head){
            console.log('No nodes in this linked list')
            return
        }else {
            //define our starting point
            let currentNode = this.head
            while(currentNode !== null) {
                //print out the node
                console.log(currentNode)
                //we traverse
                currentNode = currentNode.next
            }
        }
    }
    //create a function that sets a tail(last node)
    setTail(data) {
        if(!this.head) {
            this.head = new Node(data)
            this.tail = this.head
            return
        } else {
            let currentNode = this.head
            while(currentNode.next !== null){
                currentNode = currentNode.next
            }
            let oldTail = currentNode
            oldTail.next = new Node(data)
            this.tail = oldTail.next
            return
        }
    }

    //find node function
    findNode(data) {
        // check to see if there exists a head
        if(!this.head){
            console.log('No nodes in our Linked Lists')
            return false
        }else {
            //traverse through our ll
            let currentNode = this.head
            //check to see if we are not at the end
            while(currentNode !== null) {
                //check to see if the currentNode.data === data //return true return node
                if(currentNode.data === data) {
                    console.log("Node has been found", currentNode)
                    return true
                }
                currentNode = currentNode.next
            } 
            //return false    
            return false
        }
    }
    //insertNodeAtIndex function
    insertNodeAtIdx(idx, data) {
        //we are going to create counter, as we traverse throughthe list, we are goint to increment the counter
        //return the node that matches counter === idx
        //check for head
        if(!this.head) {
            return false
        }else {
            let counter = 0 //should clarify if the head is 1 or 0
            //starting point
            let currentNode = this.head
            while (counter !== idx) {
                //traverse && increment the counter
                currentNode = currentNode.next
                counter++
            }
            //preserve the currentNode.next node
            let tempCurrNext = currentNode.next
            //redefine the next pointer of currentNode to the newNode
            currentNode.next = new Node(data)
            // redefine the newNode's next to the preserved node
            // currentNode.next.next = tempCurrNext
            let newNode = currentNode.next 
            newNode.next = tempCurrNext
        }
    }

    //deleteNodeAtIndex
    deleteNodeAtIdx(idx){
        if(!this.head) {
            return false
        } else {
            let counter = 0
            let currentNode = this.head
            while(counter !== idx - 1) {
                currentNode = currentNode.next
                counter++
            }
            //currentNode.next [2] - delete
            let node1 = currentNode
            let node2 = currentNode.next
            let node3 = currentNode.next.next

            node1.next = node3
            node2.data = null
            node2.next = null
            // delete currentNode.next.data
            // delete currentNode.next.next
            //currentNode [1] -set .next to the following node
            //currentNode.next = currentNode.next.next

            //currentNode.next.next [3]

        }
    }

    ///////////////////challenge////////////////////
    //PROMPT: Write a method that determines if the SSL is the circular (hint: think of what happens when you draw a circle)  //returns a boolean

}

//we want to see what the sigly linked list looks like
const sLL = new SinglyLinkedList()

sLL.setHead('Irene')
sLL.addNode('Yannick')
sLL.addNode('Mark')
sLL.setHead('Anuja')
sLL.setTail('Erica')
sLL.setTail('Ermias')
sLL.findNode('Yannick')
sLL.deleteNodeAtIdx(4)
//sLL.insertNodeAtIdx(3, 'Amanda')

sLL.printNodes()

//console.log(sLL)
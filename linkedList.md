# Linked Lists

### pre-reading
[linked-list](https://medium.com/basecs/whats-a-linked-list-anyway-part-1-d8b7e6508b9d)

## What is a Linked List?
-- a linear data structure that contains data in the form of nodes.


## What are the benefits of using Linked Lists as a data structure? (LL vs. Arrays)
-- contiguous -- side by side (arrays)
-- non-contiguous - (linked lists)

Pro's of linked lists : memory allocation
-- for array's memory allocation is contiguously
-- Linked lists data is stored dynamically

Con's of linked lists: look up time
-- pros for arrays: the look up time is O(1) - constant time
-- linked lists: O(n) - depending how big it is

## What are the parts of a linked list? 
-- head - nodes - tail -> null


## What are the parts of a node? singly vs. doubly
-- singly node 
    [data | next: ]

-- doubly node
    [:prev (reference to previous node) | data | next: (reference to the next node) ]

## What data type will we use to create a linked list?

-- Node -- we will be creating a node class
singly node:
 this.data
 this.next

doubly node:
 this.data
 this.prev
 this.next

-- Linked List:
singly:
 this.head
 (this.tail)
 (this.size) - how many nodes (static)

doubly:
 this.head
 this.tail   
 this.size

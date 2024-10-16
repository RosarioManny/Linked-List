// Class Boilerplate
// class Node{
//     constructor(){
//     }
// }

class Node{
    constructor(inputdata){
        // this. keyword is needed when we don't have the exact information.
        // vv Key name vv what it has
        this.data = inputdata
        // the next thing this node will point to.
        this.next = null
    }
}
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

// const node = new Node(10)
// console.log(node)

class LinkedList{
    constructor(){
        // a Linked List starts with a "head" property intialized as null
        this.head = null;
    }
 //^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    appendNode(data){
        // creates a new node with the given data 
        const node = new Node(data);

        // and adds it to back of the list
        if (this.head === null) {
            this.head = node
            return this;
        };

        // What if you have more than the head. How do you add when you have many nodes
        // Creates a walker to start at the head
        let walker = this.head;

        // This checks the next node to see if there is null at .next.
        while(walker.next) {
            walker = walker.next
        };

        // If null, adds the new node(null is falsy)
        walker.next = node
        return;
    }
 //^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    prependNode(data){
        // creates a new node with the given data 
        const node = new Node(data);

        // and adds it to the front of the list
        if (!this.head) {
            this.head = node;
            return this
        };

        // To not lose track of your list you need the new Node to point to the old Head
        let oldHead = this.head;
        node.next = oldHead
        // and the new Node can become the new Head of the list
        this.head = node
        return;
    }
 //^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    pop(){
        // removes the last node from the list and returns it
        // If the list is empty
        if (!this.head) return null;

        // If only one item is in the list
        if (!this.head.next) {
            let poppedNode = this.head
            this.head = null
            return poppedNode
        };

        let walker = this.head
        // We want to check and get rid of the Node that points to the node w/ null. We then cut that connection
        while(walker.next.next) {
            walker = walker.next
        };

        // Saves the severed node
        let poppedNode = walker.next;

        // Changes the node whose connection was severed to null
        walker.next = null;

        // Displays the severed node
        return poppedNode;
    }
 //^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    removeFromFront(){
        // remove the head node from the list and return it
        // the next node in the list is the new head node
    }
 //^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    insertAt(X, data){
        // insert a new node into the list with the given data
        // place it after X nodes in the list
        // if X exceeds the bounds of the list, put the node at the end
        // insertAt(0, 7) would add the new node as the head
    }
 //^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    removeAt(X){
        // remove the Xth node from the list, considering 0 to be the first node
        // return the node that has been removed
    }
 //^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    search(data){
        // searches the list for a node with the given data
        // if it is found, return the "index" of the node, considering 0 to be the first node
        // if not, return false
    }
 //^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    sort(){
        // sort the Linked List in ascending order of data values
    }
}

module.exports = {
    Node,
    LinkedList
}
/*
too basic linked list implementation
*/

// node stup
function Node(data){
  this.data = data
  this.next = null
}

//insert new node to middle
Node.prototype.insertToMiddle = function(head){
  let current = head,
      prev = "", 
      count = 0,
      nodeLen = printNode(node1).length,
      midIndex = nodeLen%2==0?nodeLen/2:Math.floor(nodeLen/2)
  
  
  while (current) {
  
    if (count == midIndex) {
      prev.next = this
      this.next = current
    }
    
    count++
    prev = current
    current = current.next
  }
  
  return printNode(node1)
}

// get node value and index as an array
printNode = function(head){
  let current = head,
      nodeList = [],
      count = 0
      
  while (current) {
    nodeList.push([current.data, count])
    current = current.next
    count++
  }
  
  return nodeList
}

// delete node by its index
Node.prototype.deleteNode = function(index){
  
  //check invalid indexes, tail and head indexes
  if (index <= 0||index>=printNode(this).length-1) {
    return "index can not be the index of tail, head or out of the nodelist length range"
  }
  
  let current = this,
      prev = "",
      count = 0
      
  while (current) {
    
    if (count == index) {
      //console.log("-------------",prev, current,"-------------")
      prev.next = current.next
      current = current.next
    }
    count++
    prev = current
    current = current.next
  }
  return printNode(node1)
}

// driver codes
const node1 = new Node(10) 
const node2 = new Node(20) 
const node3 = new Node(30)  
const node4 = new Node(40)  
const middleNode = new Node("middle")

// set up linkedlist
node1.next = node2
node2.next = node3
node3.next = node4
//
console.log(printNode(node1))
console.log(middleNode.insertToMiddle(node1))
console.log(node1.deleteNode(-5))


}

// get node value and index as an array
printNode = function(head){
  let current = head,
      nodeList = [],
      count = 0
      
  while (current) {
    nodeList.push([current.data, count])
    current = current.next
    count++
  }
  
  return nodeList
}

// create nodes and linked list
const node1 = new Node(10) 
const node2 = new Node(20) 
const node3 = new Node(30)  
const node4 = new Node(40)  

const middleNode = new Node("middle")

node1.next = node2
node2.next = node3
node3.next = node4

// get nodes
console.log("-nodes->",node1);
// print nodes
console.log(printNode(node1));
// insert middle 
console.log(middleNode.insertToMiddle(node1));

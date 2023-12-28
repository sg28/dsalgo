/*
    Given a linked list, swap every two adjacent nodes and return its head. 
    You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)
*/

let swapNodesInPairs = (head)=>{
    if(!head || head.next === null) return head;

    let v1 = head;
    let v2 = head.next;
    let v3 = head.next.next;

    v2.next = v1;
    v1.next = swapNodesInPairs(v3);

    return v2;
}

console.log(swapNodesInPairs(head));
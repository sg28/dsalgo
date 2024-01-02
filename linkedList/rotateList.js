/*
Given the head of a linked list, rotate the list to the right by k places.
Input: head = [1,2,3,4,5], k = 2
Output: [4,5,1,2,3]

*/
var rotateRight = function(head, k) {
    if (!head || !head.next || k === 0) return head;

    let oldTail = head;
    let newTail = head;
    let length = 1;
    
    while (oldTail.next != null) {  // In this space the oldtail is moved to the end.
        oldTail = oldTail.next;     // And finally oldtail.next = head makes it circular
        length++;                   //
    }                               //
    oldTail.next = head;            //

    for (let i = 0; i < length - k % length - 1; i++) {
        newTail = newTail.next;
    }
    let newHead = newTail.next;
    newTail.next = null;
    return newHead;
};
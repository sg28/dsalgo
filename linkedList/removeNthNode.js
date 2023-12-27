/*
Given the head of a linked list, remove the nth node from the end of the list and return its head.
[] --> [] --> [] --> [] --> [] --> [] --> []
0       1      2     3      4       5      6
n =3 
We need to remove the node at index 4
*/
let removeNthNode =(head, n)=>{
    let fast = head;
    let slow = head;

    for(let i = 0;i < n; i++){
        fast = fast.next;
    }
    if(!fast) return fast.next;
    while(!fast){
        fast = fast.next;
        slow = slow.next;
    }

    slow.next = slow.next.next;

    return head;
}
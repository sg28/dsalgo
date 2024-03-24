/*
Given the head of a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x.
You should preserve the original relative order of the nodes in each of the two partitions.
*/

var partition = function (head, x) {
  let lessHead = new ListNode(0);
  let greaterHead = new ListNode(0);

  let less = lessHead;
  let greater = greaterHead;

  while (head !== null) {
    if (head.val < x) {
      less.next = head;
      less = less.next;
    } else {
      greater.next = head;
      greater = greater.next;
    }
    head = head.next;
  }
  greater.next = null;
  less.next = greaterHead.next;

  return lessHead.next;
};

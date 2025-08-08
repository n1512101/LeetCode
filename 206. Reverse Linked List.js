/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let node = null;

  while (head) {
    const temp = head.next;
    head.next = node;
    node = head;
    head = temp;
  }

  return node;
};

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

console.log(reverseList(new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))))));

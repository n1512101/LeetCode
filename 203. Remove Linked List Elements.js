/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  if (!head) return head;

  head = new ListNode(0, head);
  let copy = head;
  while (copy) {
    while (copy.next?.val === val) {
      copy.next = copy.next.next;
    }
    copy = copy.next;
  }

  return head.next;
};

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

const list = new ListNode(1, new ListNode(2, new ListNode(6, new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6)))))));
const list2 = new ListNode(7, new ListNode(7, new ListNode(7, new ListNode(7))));

console.log(removeElements(list, 6));
console.log(removeElements(list2, 7));
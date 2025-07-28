/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

// 方法1
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  if (!root.left && !root.right) return true;

  function compareLeftAndRight(l, r) {
    if (!(l || r)) return true;
    if (!l && r || l && !r || l.val !== r.val) return false;
    return compareLeftAndRight(l.left, r.right) && compareLeftAndRight(l.right, r.left);
  }

  return compareLeftAndRight(root.left, root.right);
};

function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

const root1 = new TreeNode(1, new TreeNode(2, new TreeNode(3), new TreeNode(4)), new TreeNode(2, new TreeNode(4), new TreeNode(3)));
const root2 = new TreeNode(1, new TreeNode(2, null, new TreeNode(3)), new TreeNode(2, null, new TreeNode(3)));

console.log(isSymmetric(root1));  // true
console.log(isSymmetric(root2));  // false


// 方法2
// /**
//  * @param {TreeNode} root
//  * @return {boolean}
//  */
// var isSymmetric = function(root) {
//     if (!root) return true;

//     const isMirror = (t1, t2) => {
//         if (!t1 && !t2) return true;
//         if (!t1 || !t2) return false;
//         return (t1.val === t2.val) &&
//             isMirror(t1.left, t2.right) &&
//             isMirror(t1.right, t2.left)
//     }

//     return isMirror(root.left, root.right)
// };
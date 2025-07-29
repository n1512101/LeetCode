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
 * @return {number}
 */
var maxDepth = function (root) {
  function res(root, depth) {
    if (!root) return depth;

    depth++;
    let leftDepth = res(root.left, depth);
    let rightDepth = res(root.right, depth);

    return leftDepth > rightDepth ? leftDepth : rightDepth;
  }

  return res(root, 0);
};

function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

const root1 = new TreeNode(3, new TreeNode(9, null, null), new TreeNode(20, new TreeNode(15), new TreeNode(7)));
const root2 = new TreeNode(1, null, new TreeNode(2));

console.log(maxDepth(root1));  // 3
console.log(maxDepth(root2));  // 2
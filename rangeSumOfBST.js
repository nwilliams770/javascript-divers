/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var rangeSumBST = function(root, L, R) {
    //     Because this is a binarty tree
        var answer = 0;
        function depthFirstSearch(node) {
            if (node) {
                if (L <= node.val && node.val <= R) {
                    answer += node.val;
                }
                if (L < node.val) {
                    depthFirstSearch(node.left)
                }
                if (node.val < R) {
                    depthFirstSearch(node.right)
                }
            }
        }
        depthFirstSearch(root);
        return answer;
    };
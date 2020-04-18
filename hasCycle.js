/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
function ListNode(val) {
         this.val = val;
         this.next = null;
    }
var hasCycle = function(head) {
    let index=0;
    let current=head;
    while(current){
        index++;
        current=current.next;
    }
    return pos!==-1&&pos<index 
};
console.log(hasCycle([1,2],0))
function ListNode(val) {
        this.val = val;
        this.next = null;
    }
var removeElements = function(head, val) {
    let newHead=new ListNode();
    newHead.next=head;
    let previous=newHead;;
    let current=head
    while(current){
        if(current.val===val){
            previous.next=current.next;
        }else{
            previous=current;
        }
        current=current.next
        
    }
    return newHead.next
};
console.log(removeElements([1],1))
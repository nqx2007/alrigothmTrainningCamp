var reverseList = function(head) {
    //遍历链表
    let previous=null;
    let current=head;
    while(current){
        let temp=current.next;
        current.next=previous;
        previous=current;
        current=temp;
    }
    console.log(previous)
    return previous;
};

reverseList([1,2,3,4,5])
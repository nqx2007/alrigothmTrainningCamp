//创建一个单独的节点
class linkNode{
    constructor(element){
      this.node=element;
      this.next=null
    }
  }
  //创建一个链表数据结构
  class linkNodeList{
    constructor(){
      this.head=null;
      this.length=0;
    }
    //添加节点
    append(node){
        let element=new linkNode(node)
      if(this.head==null){
        this.head=element;
      }else{
        //遍历链表
        let current=this.head;
        while(current.next){
          current=current.next
        }
        current.next=element;
      }
      this.length+=1
    }
    //删除节点
    removeAt(index){
      //遍历初始
      let i=0;
      let prevEle=null;
      let current=this.head;
      //开始遍历
      while(i<index){
        prevEle=current;
        current=current.next;
        i++;
      }
      prevEle.next=current.next;
      current.next=null
    }
    //打印链表
    print(){
      let current=this.head;
      let arr=[];
      while(current){
        arr.push(current.node)
        current=current.next
      }
      console.log(arr.join("=>"))
    }
  }

  let link=new linkNodeList();
  link.append("嘿嘿")
  link.append("你瞅啥")
  link.append("瞅你咋得")
  link.print()
  link.removeAt(1);
  link.print()
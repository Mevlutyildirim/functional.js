import Node from './node';
export default function LinkedList(){
  let head = null;
  let tail = null;
  
  return {
    append(value){
      const node = Node(value);
      if(head === null){
        head = node;
        tail = node;
        return this;
      }
      tail.next = node;
      tail = tail.next;
      return this;
    },
    prepend(value){
      if(head === null){
        const node = Node(value);
        head = node;
        tail = node;
        return this;
      }
      const node = Node(value, head);
    }, 
  }
}
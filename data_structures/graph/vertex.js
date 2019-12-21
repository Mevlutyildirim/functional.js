

function vertex(value){
  if(value === undefined){
    throw Error("vertex must a value");
  }

  edges = LinkedList();
  
  function addEdge(edge){
    edges.append(edge);
  }
  function deleteEdge(edge){
    edges.delete(edge);
  }
  
  // this yerine ne kullanabilirim bir dusunmeme lazım 
  function getNeighbourHoods(){
    const findEdges = edges.toArray();
    return findEdges.map(node =>{
      return node.value.startVertex === this ? node.value.endVertex: node.value.startVertex;
    })
  }

  function getEdges(){
    return edges.toArray.map(linkedListNode => linkedListNode.value);
  }

  function getDegree(){
    return edges.toArray().length;
  }

  function hasEdges(){
    return edges.length=== 0 ? false: true;
  }
}
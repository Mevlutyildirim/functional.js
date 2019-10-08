

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
  
}
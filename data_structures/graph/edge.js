

function edge(startVertex, endVertex, weight=0){

  function getKey(){
    const start = startVertex.getKey();
    const end = endVertex.getKey();
    return `${start}_${end}`;
  }

  return {
    getKey
  }
}
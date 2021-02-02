
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (matrix === undefined){
        return [];
    }

  return matrix.map((val,idx)=>idx%2?val.reverse():val).flat();
}

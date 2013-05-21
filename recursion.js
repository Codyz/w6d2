var range = function(start , end) {
  var inter = [];

  if((end-start)<=1){
    return [start];
  }

  inter = range(start + 1, end);
  return [start].concat(inter);

};


//console.log(range(1,6));
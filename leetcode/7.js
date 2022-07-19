function OneOccurence(arr){
  var map = {};
  var minkey = '';
  for(let i = 0; i<arr.length;i++)
  {
      var key = arr[i];
      if(!map[key])
      map[key] = 0;
      map[key]++;
      if(minkey =='' || map[key] < map[minkey])
      minkey = key;
  } 
  return minkey; 

}

console.log(OneOccurence([1,1,1,2,9,9]))

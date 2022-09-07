const min = (arr)=>{
  var map = {};
  let res = -1;
  let min = arr.length + 1;
  for(let i = 0; i < arr.length; i++)
  {
  var key = arr[i];
    if(!map[key])
      map[key] = 0;    
      map[key]++;
      
  }
  
 for(let key in  map){
   if(min >= map[key]){
       res = key;
       min = map[key]
   }
     
 }
  return res;
  
}

console.log(min([1,1,4,4,1,1,2,2,2]))
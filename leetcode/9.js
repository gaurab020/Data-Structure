
function TopKFreq(nums,k){
   let res = [];
    var map= {};
    for(var i = 0; i < nums.length; i++)
    {
        var key = nums[i];
        if(!map[key])
        map[key] = 0;
        map[key]++;
        if(map[key] >= k) 
        res.push(key);         
    }
    return res.length ? [...new Set(res)] : nums;
}
console.log(TopKFreq([1,2],2)) //output [1,2,9]



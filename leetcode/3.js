var searchInsert = function(nums, target) {
    let lo = 0, hi = nums.length - 1;

    if (!nums.length) {
        return 0;
    }

    if (target > nums[hi]) {
        return hi+1;
    } 

    if (target <= nums[lo]) {
        return lo;
    }

    while (lo <= hi) {
        let mid = Math.floor((lo + hi) / 2);

        if (nums[mid] === target) {
            return mid;
        } else if (target > nums[mid]) {
            lo = mid + 1;
        } else {
            hi = mid - 1;
        }
    }
    return hi + 1;
};

console.log(searchInsert([1,5,7,9] , 6))
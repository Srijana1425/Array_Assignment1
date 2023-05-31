
let nums = [1,2,3,1]
var duplicate = function(nums) {
    for (let i = 0; i < nums.length; ++ i) {
        for (let j = 0; j < i; ++ j) {
            if (nums[i] == nums[j]) {
                return true;
            }
        }
    }
    return false;
};
console.log(duplicate(nums))

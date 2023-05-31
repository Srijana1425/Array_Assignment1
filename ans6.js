// Q6. Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

    // Example 1:
    // Input: nums = [1,2,3,1]

    // Output: true

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

let nums = [1,2,2,4]
var findErrorNums = function(nums) {
        let sum = (nums.length * (nums.length + 1)) / 2;
        let dup = 0;
        let arr = Array(nums.length).fill(0);
    
        for (let i = 0; i < nums.length; i++) {
            if (arr[nums[i] - 1] === nums[i]) dup = nums[i];
            else {
                arr[nums[i] - 1] = nums[i];
                sum -= nums[i];
            }
        }
    
        return [dup, sum];
    };
console.log(findErrorNums(nums))

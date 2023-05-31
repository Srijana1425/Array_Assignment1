# Array_Assignment1
**Q1.** Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.<br>
**Example:**<br>
Input: nums = [2,7,11,15], target = 9<br>
Output0 [0,1]<br>
**Explanation:** Because nums[0] + nums[1] == 9, we return [0, 1]<br><br>
*Answer* <br>
**Code** [link](https://github.com/Srijana1425/Array_Assignment1/blob/main/ans1.js)
********************************************************************************************************************************************

**Q2.** Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.
Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:
- Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
- Return k.<br>
**Example :**<br>
Input: nums = [3,2,2,3], val = 3<br>
Output: 2, nums = [2,2,_*,_*]<br>
**Explanation:** Your function should return k = 2, with the first two elements of nums being 2. It does not matter what you leave beyond the returned k (hence they are underscores)<br><br>
*Answer* <br>
**Code** [link](https://github.com/Srijana1425/Array_Assignment1/blob/main/ans2.js)
********************************************************************************************************************************************

**Q3.** Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
You must write an algorithm with O(log n) runtime complexity.<br>
**Example 1:**
Input: nums = [1,3,5,6], target = 5<br>
Output: 2<br><br>
*Answer* <br>
**Code** [link](https://github.com/Srijana1425/Array_Assignment1/blob/main/ans3.js)
********************************************************************************************************************************************

**Q4.** You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.
Increment the large integer by one and return the resulting array of digits.<br>
**Example 1:**
Input: digits = [1,2,3]<br>
Output: [1,2,4]<br>
**Explanation:** The array represents the integer 123.<br>
Incrementing by one gives 123 + 1 = 124.<br>
Thus, the result should be [1,2,4].<br><br>
*Answer* <br>
**Code** [link](https://github.com/Srijana1425/Array_Assignment1/blob/main/ans4.js)
********************************************************************************************************************************************

**Q5.** You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.
Merge nums1 and nums2 into a single array sorted in non-decreasing order.
The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.<br>
**Example 1:**<br>
Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3<br>
Output: [1,2,2,3,5,6]<br>
**Explanation:** The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.<br><br>
*Answer* <br>
**Code** [link](https://github.com/Srijana1425/Array_Assignment1/blob/main/ans5.js)
********************************************************************************************************************************************

**Q6.** Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.<br>
**Example 1:**<br>
Input: nums = [1,2,3,1]<br>
Output: true<br><br>
*Answer* <br>
**Code** [link](https://github.com/Srijana1425/Array_Assignment1/blob/main/ans6.js)
********************************************************************************************************************************************

**Q7.** Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the nonzero elements.
Note that you must do this in-place without making a copy of the array.<br>
**Example 1:**<br>
Input: nums = [0,1,0,3,12]<br>
Output: [1,3,12,0,0]<br><br>
*Answer* <br>
**Code** [link](https://github.com/Srijana1425/Array_Assignment1/blob/main/ans7.js)
********************************************************************************************************************************************

**Q8.** You have a set of integers s, which originally contains all the numbers from 1 to n. Unfortunately, due to some error, one of the numbers in s got duplicated to another number in the set, which results in repetition of one number and loss of another number.
You are given an integer array nums representing the data status of this set after the error.
Find the number that occurs twice and the number that is missing and return them in the form of an array.<br>
**Example 1:**<br>
Input: nums = [1,2,2,4]<br>
Output: [2,3]<br><br>
*Answer* <br>
**Code** [link](https://github.com/Srijana1425/Array_Assignment1/blob/main/ans8.js)

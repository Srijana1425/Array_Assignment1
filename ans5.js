
let nums1 = [1,2,3,0,0,0],m = 3, nums2 = [2,5,6], n = 3;
    var merge = function(nums1, m, nums2, n) 
    {
        let Length1 = m-1;
        let Length2 = n-1;
        
        for(let i=nums1.length-1; i>=0; i--)
        {
            if(nums1[Length1]>=nums2[Length2])
            {
                nums1[i] = nums1[Length1];
                Length1--;
            }
            else if(Length2>=0)
            {
                nums1[i] = nums2[Length2];
                Length2--;
            }
        }
      };
      merge(nums1, m, nums2, n);
      console.log(nums1);

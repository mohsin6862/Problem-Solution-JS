var singleNumber = function(nums) {
    for (var i = 0; i < nums.length; i++) {
      if (i === 0) {
        nums[0] = 0 ^ nums[0];
        /* console.log(nums[0]); */
      } else {
        nums[0] ^= nums[i];
        /* console.log(nums[0]); */
      }
  
    }
    console.log(nums[0]);
    return nums[0];
  
  
  };
  
  singleNumber([2, 2, 3, 3, 4]);
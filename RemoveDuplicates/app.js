var removeDuplicates = function (nums) {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        if (i < nums.length - 1 && nums[i] == nums[i + 1]) {
            continue;
        }else{
            nums[count] = nums[i];
            count++;
        }
     }
    return count;
};
console.log(removeDuplicates([1,1,2]));
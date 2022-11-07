var getConcatenation = function(nums) {
    let ans = [];
    ans.push(nums);
    return nums.concat(...ans);
    
};
console.log(getConcatenation([1,3,2,1]));
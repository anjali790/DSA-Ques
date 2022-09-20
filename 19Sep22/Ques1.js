// let nums = [1,3,5,6], target = 7;
function searchInsert(nums, target){
    for(let i=0; i<nums.length; i++){
        if(nums.includes(target)){
            res = (nums.indexOf(target));
        }else if(!nums.includes(target)){
            nums.push(target);
            nums.sort(function(a, b){return a - b});
            res = (nums.indexOf(target));
        }
    }
    return (res);
}
console.log(searchInsert([1,3,5,6],7))
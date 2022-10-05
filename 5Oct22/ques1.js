// function twoSum (nums,target){
//     let start = 0;
//     let end = nums.length-1;
//     let result=[];
    
//     while(start<end){
//         let sum = nums[start]+nums[end];
//         if(sum == target){
//             result[0] = start+1;
//             result[1] = end+1;
//             break;
//         }else if(sum<target){
//             start++;
//         }else{
//             end--;
//         }
//     }
//     return result;
// }
// console.log(twoSum([2,4,6,1],8));




let twoSum = function (nums,target){
    let comp ={};
    for(let i=0; i<nums.length; i++){
        if(comp[nums[i]]>=0){
            return [comp[nums[i]], i]
        }
        comp[target-nums[i]]=i
    }
};
console.log(twoSum([2,5,6,1],8));
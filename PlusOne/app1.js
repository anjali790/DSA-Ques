// function merge( A, m,  B,n) {
//     let insertIndex = m+n-1;
//     let indexA = m-1,indexB = n-1;
    
//     while(indexB>=0){
//         if(indexA<0){
//             A[insertIndex--] = B[indexB--];
//         }else{
//             if(B[indexB]>=A[indexA]){
//                 A[insertIndex--] = B[indexB--];
//             }else{
//                 A[insertIndex--] = A[indexA--];
//             }
//         }
//     }
//     return insertIndex
// }
// console.log(merge([1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3))
let merge = function (nums1, m, nums2, n) {
    let i = m - 1,//i=2
        j = n - 1,//j=2
        k = m + n - 1;//k=5
    while (j >= 0) {
        if (i >= 0 && nums1[i] > nums2[j]) {
            nums1[k--] = nums1[i--];
        } else {
            nums1[k--] = nums2[j--];
        }
    }
    return nums1;
};
console.log(merge([1,2,3,0,0,0], 3,[2,5,6],3));





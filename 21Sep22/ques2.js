//You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
//Find two lines that together with the x-axis form a container, such that the container contains the most water.
//Return the maximum amount of water a container can store.

function maxArea(height) {
    let area = 0;
    for (let i = 0; i < height.length; i++) {
        for (let j = i + 1; j < height.length; j++) {
            area = Math.max(area, Math.min(height[j], height[i]) * (j - i));
        }
    }
    return area;
}
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
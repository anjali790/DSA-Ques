let maxArea = function(height) {
    let length = 0;
    let breadth = height.length -1;
    let area = 0;
 
    while (length < breadth){
        area = Math.max(area, Math.min(height[length],height[breadth]) * (breadth-length));
            if (height[length] < height[breadth])
            length += 1;
        else
        breadth -= 1;
    }
    return area;
};
console.log(maxArea([1,8,6,2,5,4,8,3,7]))
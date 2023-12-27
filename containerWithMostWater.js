let containerWithMostWater =(height)=>{
      let left = 0;
      let right = height.length;
      let res = 0;
      while(left < right){
        let smallerSide = Math.min(height[left], height[right]); // height
        let width = right - left; // width;
        let area = smallerSide * width; // height * width

        if(area > res ) res = area;
        
        if(height[left]  < height[right]) left++;
        else right--;
      } 
      return res; 
}
let height = [1,8,6,2,5,4,8,3,7];
let res = console.log(containerWithMostWater(height));
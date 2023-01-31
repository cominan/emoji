export default function Twosum (nums, target) {
    let number = []
    for(let i =0; i< nums.length; i++) {
        for(let j = 0; j< nums.length; j++) {
            let num = nums[j] + nums[i]
            if(num === target) {
                return number.push(i,j)
            }
        }
    }
    console.log(number);
    return number
};
//Rest operator (...):collects multiple values into an array.
function sum(...nums){
    return nums.reduce((acc , val)=> acc + val , 0)
}
console.log(sum(1,2,3))
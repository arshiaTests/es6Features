//Rest operator (...):collects multiple values into an array.
function sum(...nums){
    return nums.reduce((acc , val)=> acc + val , 0)
}
console.log(sum(1,2,3))

//تمرین 1: محاسبه میانگین اعداد با Rest Operator

function average(...nums) {
    const sum = nums.reduce((acc, val) => acc + val, 0);
    return sum / nums.length;
}

console.log(average(1, 2, 3, 4)); // 2.5
console.log(average(10, 20, 30)); // 20

//تمرین 2: پیدا کردن بزرگ‌ترین عدد با Rest Operator

function findMax(...nums) {
    return Math.max(...nums);
}

console.log(findMax(1, 5, 3, 9, 2)); // 9
console.log(findMax(-1, -5, -3));    // -1
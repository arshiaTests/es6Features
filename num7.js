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

//تمرین 3: ترکیب Rest Operator با پارامترهای دیگر

function greet(greeting, ...names) {
    return `${greeting}, ${names.join(', ')}!`;
}

console.log(greet("Hello", "arshia", "ali", "reza")); // Hello, arshia, ali, reza!

//تمرین 4: استفاده از Rest Operator در Arrow Functions

const multiply = (multiplier, ...nums) => {
    return nums.map(num => num * multiplier);
};

console.log(multiply(2, 1, 2, 3)); // [2, 4, 6]

//تمرین 5: جمع اعداد زوج با Rest Operator

function sumEven(...nums) {
    return nums.filter(num => num % 2 === 0).reduce((acc, val) => acc + val, 0);
}

console.log(sumEven(1, 2, 3, 4, 5, 6)); // 12

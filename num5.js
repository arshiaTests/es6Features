//5 destructuring : extact values from arrays/objects easily.
const user ={ name: "arshia",age :25};
const {name , age}= user;
console.log(name,age)

//تمرین 1: Destructuring با آرایه



const numbers = [1, 2, 3];
const [first, second, third] = numbers;
console.log(first, second, third); // 1 2 3

//تمرین 2: Destructuring با مقادیر پیش‌فرض

const userr = { namee: "arshia" };
const { namee, agee = 30 } = userr;
console.log(namee, agee); // arshia 30

//تمرین 3: Destructuring با تغییر نام متغیرها


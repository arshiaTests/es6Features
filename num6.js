//6spread operator(...) : expands elements from an array/object.
const arr =[1,2,3,4,5];
const array = [...arr , 6,7]
console.log(array);

//تمرین 1: ترکیب دو آرایه با Spread Operator

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combinedArray = [...arr1, ...arr2];
console.log(combinedArray); // [1, 2, 3, 4, 5, 6]

//تمرین 2: کپی یک آرایه با Spread Operator

const originalArray = [10, 20, 30];
const copiedArray = [...originalArray];
console.log(copiedArray); // [10, 20, 30]

//تمرین 3: اضافه کردن عناصر به ابتدا و انتهای آرایه

const arrr = [2, 3, 4];
const newArray = [1, ...arrr, 5];
console.log(newArray); // [1, 2, 3, 4, 5]

//تمرین 4: استفاده از Spread Operator با توابع

const sum = (a, b, c) => a + b + c;
const numbers = [1, 2, 3];
console.log(sum(...numbers)); // 6

//تمرین 5: Spread Operator با اشیاء

const obj1 = { name: "arshia", age: 25 };
const obj2 = { ...obj1, city: "Tehran" };
console.log(obj2); // { name: "arshia", age: 25, city: "Tehran" }

//تمرین 6: ترکیب دو شیء با Spread Operator

const user = { name: "arshia", age: 25 };
const address = { city: "Tehran", country: "Iran" };
const combinedObject = { ...user, ...address };
console.log(combinedObject); // { name: "arshia", age: 25, city: "Tehran", country: "Iran" }

//تمرین 7: استفاده از Spread Operator برای رشته‌ها

const str = "hello";
const chars = [...str];
console.log(chars); /// ['h', 'e', 'l', 'l', 'o']


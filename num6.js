// 1. ادغام آرایه‌ها
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const mergedArray = [...arr1, ...arr2];
console.log("ادغام آرایه‌ها:", mergedArray); 

// 2. کپی کردن آرایه‌ها و اشیاء
const originalArray = [10, 20, 30];
const copiedArray = [...originalArray]; 
copiedArray.push(40);
console.log("آرایه اصلی:", originalArray); 
console.log("آرایه کپی شده:", copiedArray); 
const originalObject = { name: "عرشیا", age: 25 };
const copiedObject = { ...originalObject };
copiedObject.city = "تهران"; 
console.log("شیء اصلی:", originalObject); 
console.log("شیء کپی شده:", copiedObject); 
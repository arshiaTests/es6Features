let name = "arshia";
const age = 30;

console.log(name); // خروجی: arshia
console.log(age); // خروجی: 30

name = "ali"; // تغییر مقدار متغیر let
console.log(name); // خروجی: ali

// age = 31; // این خط باعث خطا می‌شود، زیرا const غیرقابل تغییر است.
// console.log(age); // خطا: Assignment to constant variable.

if (true) {
  let city = "Tehran";
  console.log(city); // خروجی: Tehran
}

// console.log(city); // این خط باعث خطا می‌شود، زیرا city فقط در بلوک if تعریف شده است.
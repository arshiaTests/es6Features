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


const userrr = { name: "arshia", age: 25 };
const { name: fullName, age: userAge } = userrr;
console.log(fullName, userAge); // arshia 25

//تمرین 4: Destructuring در توابع

const printUserInfo = ({ name, age }) => {
    console.log(`Name: ${name}, Age: ${age}`);
};

const u = { name: "arshia", age: 25 };
printUserInfo(u); // Name: arshia, Age: 25

//تمرین 5: Destructuring با آرایه‌های تو در تو

const numbersss = [1, [2, 3], 4];
const [firsttt, [seconddd, thirddd], fourth] = numbersss;
console.log(firsttt, seconddd, thirddd, fourth); // 1 2 3 4

//تمرین 6: Destructuring با اشیاء تو در تو

const userrrr = {
    name: "arshia",
    age: 25,
    address: {
        city: "Tehran",
        country: "Iran"
    }
};

const { naame, aage, address: { city, country } } = userrrr;
console.log(name, age, city, country); // arshia 25 Tehran Iran


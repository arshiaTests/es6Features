//4.default parameters : set default values in functions
function some (name = "arshia"){
    console.log(`hello ${name}`)
}
some() 

// ========= تمرین‌ها | Exercises =========

// تمرین 1: تابع سفارش قهوه
// Exercise 1: Coffee Order Function
const orderCoffee = (size = "medium", type = "latte", sugar = true) => {
    return `سفارش شما: قهوه ${type} با سایز ${size}${sugar ? ' با شکر' : ' بدون شکر'}`;
};

// Test
console.log(orderCoffee());                    // سفارش شما: قهوه latte با سایز medium با شکر
console.log(orderCoffee("large"));             // سفارش شما: قهوه latte با سایز large با شکر
console.log(orderCoffee("small", "espresso")); // سفارش شما: قهوه espresso با سایز small با شکر


// تمرین 2: محاسبه حقوق ماهانه
// Exercise 2: Calculate Monthly Salary
const calculateSalary = (baseSalary = 5000000, overtime = 0, tax = 10) => {
    const overtimePay = overtime * 100000;
    const totalBeforeTax = baseSalary + overtimePay;
    const taxAmount = (totalBeforeTax * tax) / 100;
    return totalBeforeTax - taxAmount;
};

// Test
console.log(calculateSalary());                // 4500000
console.log(calculateSalary(6000000));         // 5400000
console.log(calculateSalary(6000000, 10));     // 6300000


// تمرین 3: ایجاد پروفایل کاربر
// Exercise 3: Create User Profile
const createUserProfile = (
    name = "کاربر ناشناس",
    age = "نامشخص",
    city = "نامشخص",
    hobby = "نامشخص"
) => {
    return {
        name,
        age,
        city,
        hobby,
        createdAt: new Date().toLocaleDateString()
    };
};

// Test
console.log(createUserProfile());
console.log(createUserProfile("علی"));
console.log(createUserProfile("مریم", 25, "تهران"));


// تمرین 4: فرمت‌کننده متن
// Exercise 4: Text Formatter
const formatText = (
    text = "",
    color = "black",
    size = "medium",
    bold = false
) => {
    return {
        content: text,
        style: {
            color,
            fontSize: size,
            fontWeight: bold ? "bold" : "normal"
        }
    };
};

// Test
console.log(formatText("سلام"));
console.log(formatText("خوش آمدید", "blue", "large", true));


// تمرین 5: محاسبه اقساط وام
// Exercise 5: Calculate Loan Payments
const calculateLoan = (
    amount = 10000000,
    months = 12,
    interestRate = 12
) => {
    const monthlyInterest = interestRate / 12 / 100;
    const monthlyPayment = amount * (monthlyInterest * Math.pow(1 + monthlyInterest, months)) 
                          / (Math.pow(1 + monthlyInterest, months) - 1);
    return {
        monthlyPayment: Math.round(monthlyPayment),
        totalPayment: Math.round(monthlyPayment * months),
        totalInterest: Math.round((monthlyPayment * months) - amount)
    };
};

// Test
console.log(calculateLoan());
console.log(calculateLoan(20000000));
console.log(calculateLoan(20000000, 24)); 

//تمرین ترکیبی پیشرفته: سیستم مدیریت سفارشات رستوران



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

// 1. تعریف توابع با پارامترهای پیش‌فرض
const createOrder = (
    customerName = "مهمان",
    items = [],
    delivery = false,
    discount = 0,
    taxRate = 9
  ) => {
    // محاسبه قیمت کل
    const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    
    // محاسبه تخفیف
    const discountAmount = subtotal * (discount / 100);
    
    // محاسبه مالیات
    const taxAmount = (subtotal - discountAmount) * (taxRate / 100);
    
    // هزینه ارسال
    const deliveryFee = delivery ? 20000 : 0;
    
    // قیمت نهایی
    const total = subtotal - discountAmount + taxAmount + deliveryFee;
    
    return {
      customer: customerName,
      orderItems: items,
      orderDetails: {
        subtotal,
        discount: discountAmount,
        tax: taxAmount,
        delivery: deliveryFee,
        total
      },
      orderDate: new Date().toLocaleString('fa-IR')
    };
  };
  
  // 2. تابع نمایش رسید با template literals
  const showReceipt = (order) => {
    const { customer, orderDetails } = order;
    
    return `
  📋 رسید سفارش رستوران
  ----------------------------
  👤 مشتری: ${customer}
  📅 تاریخ: ${order.orderDate}
  
  📦 جزئیات سفارش:
  مبلغ کل سفارش: ${orderDetails.subtotal.toLocaleString()} تومان
  تخفیف: ${orderDetails.discount.toLocaleString()} تومان
  مالیات: ${orderDetails.tax.toLocaleString()} تومان
  هزینه ارسال: ${orderDetails.delivery.toLocaleString()} تومان
  ----------------------------
  💰 مبلغ قابل پرداخت: ${orderDetails.total.toLocaleString()} تومان
  
  با تشکر از انتخاب شما!
  `;
  };
  
  // 3. تابع کمکی برای ایجاد آیتم‌های منو
  const createMenuItem = (name, price, quantity = 1) => ({
    name,
    price,
    quantity
  });
  
  // 4. نمونه سفارش‌ها
  const order1 = createOrder(
    "علی محمدی",
    [
      createMenuItem("پیتزا مخصوص", 120000, 2),
      createMenuItem("نوشابه", 15000),
      createMenuItem("سالاد سزار", 45000)
    ],
    true,
    10
  );
  
  const order2 = createOrder(
    undefined, // استفاده از مقدار پیش‌فرض
    [
      createMenuItem("همبرگر ویژه", 85000),
      createMenuItem("سیب زمینی سرخ کرده", 30000)
    ],
    false,
    5
  );
  
  // 5. نمایش رسیدها
  console.log(showReceipt(order1));
  console.log(showReceipt(order2));
  
  // 6. تابع جستجوی سفارشات
  const findOrdersByPriceRange = (orders, minPrice, maxPrice) =>
    orders.filter(order => {
      const total = order.orderDetails.total;
      return total >= minPrice && total <= maxPrice;
    });
  
  // 7. تست سیستم
  const allOrders = [order1, order2];
  console.log("سفارشات بین 100,000 تا 200,000 تومان:");
  console.log(findOrdersByPriceRange(allOrders, 100000, 200000));
  
  // 8. مدیریت خطا
  try {
    // تست سفارش بدون آیتم
    const emptyOrder = createOrder("رضا اکبری");
    console.log(showReceipt(emptyOrder));
  } catch (error) {
    console.error("خطا در پردازش سفارش:", error);
  }

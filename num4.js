// نمایش اطلاعات کاربر
const showUserInfo = (name = "ناشناس", age = "نامشخص", city = "نامشخص") => {
    console.log(`
    اطلاعات کاربر:
    - نام: ${name}
    - سن: ${age}
    - شهر: ${city}
    `);
  };
  showUserInfo("عرشیا", 25, "تهران");
  showUserInfo(); 
  
//تابع محاسبه حقوق کارمند 
const calculateSalary = (baseSalary, bonus = 0) => {
    const totalSalary = baseSalary + bonus;
    console.log(`حقوق کل: ${totalSalary} تومان`);
  };
  calculateSalary(5000000, 1000000); // حقوق پایه و پاداش وارد شده است

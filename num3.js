// پیام خوش امد گویی 
let user = (name,age) => {
    console.log(`hello ${name} wellcome to ${age}`)
}

/////ساخت کارت اطلاعات کاربر 
user("arshia",25)
const createUserCard = (name, age, job, city) => {
    console.log(`
    ==========================
    | نام: ${name}           
    | سن: ${age}             
    | شغل: ${job}            
    | شهر: ${city}           
    ==========================
    `);
  };
  createUserCard("عرشیا", 25, "برنامه‌نویس", "تهران");

  //// عملیات ریاضی 
  const calculateNumbers = (num1, num2) => {
    console.log(`
    نتیجه عملیات‌ها:
    - جمع: ${num1 + num2}
    - تفریق: ${num1 - num2}
    - ضرب: ${num1 * num2}
    - تقسیم: ${(num1 / num2).toFixed(2)}
    `);
  };
  
  calculateNumbers(10, 3);

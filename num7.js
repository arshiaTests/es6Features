// 1. محاسبه مجموع اعداد
const sum = (...nums) => {
    return nums.reduce((acc, val) => acc + val, 0);
  };
  console.log("مجموع اعداد:", sum(1, 2, 3, 4, 5)); 

  // 2. محاسبه میانگین اعداد
const average = (...nums) => {
    const total = nums.reduce((acc, val) => acc + val, 0);
    return total / nums.length;
  };
  console.log("میانگین اعداد:", average(10, 20, 30, 40)); 
  
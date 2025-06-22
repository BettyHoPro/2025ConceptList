// explode 功能示範 - 字串分割

// 1. 基本字串分割
const sentence = "蘋果,香蕉,橘子,葡萄";
const fruits = sentence.split(",");
console.log("分割後的水果陣列:", fruits);
// 輸出: ["蘋果", "香蕉", "橘子", "葡萄"]

// 2. 用空格分割
const words = "Hello World JavaScript";
const wordArray = words.split(" ");
console.log("分割後的單字:", wordArray);
// 輸出: ["Hello", "World", "JavaScript"]

// 3. 分割成字元
const text = "程式設計";
const characters = text.split("");
console.log("分割後的字元:", characters);
// 輸出: ["程", "式", "設", "計"]

// 4. 限制分割數量
const data = "A,B,C,D,E,F";
const limitedSplit = data.split(",", 3);
console.log("限制分割數量:", limitedSplit);
// 輸出: ["A", "B", "C"]

// 5. 實際應用 - 處理 CSV 資料
const csvData = "姓名,年齡,城市\n小明,25,台北\n小華,30,高雄";
const lines = csvData.split("\n");
console.log("CSV 行數:", lines.length);

lines.forEach((line, index) => {
  if (index > 0) { // 跳過標題行
    const fields = line.split(",");
    console.log(`第 ${index} 行資料:`, fields);
  }
}); 
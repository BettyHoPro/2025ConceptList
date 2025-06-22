// toLowerCase() 方法示範

// 1. 基本用法
const text1 = "Hello World";
const lowerText1 = text1.toLowerCase();
console.log("原始字串:", text1);
console.log("轉換後:", lowerText1);
// 輸出: hello world

// 2. 混合大小寫
const text2 = "JaVaScRiPt";
const lowerText2 = text2.toLowerCase();
console.log("混合大小寫:", text2);
console.log("轉換後:", lowerText2);
// 輸出: javascript

// 3. 包含數字和符號
const text3 = "HELLO123!@#";
const lowerText3 = text3.toLowerCase();
console.log("包含數字符號:", text3);
console.log("轉換後:", lowerText3);
// 輸出: hello123!@#

// 4. 中文和英文混合
const text4 = "Hello 世界 WORLD";
const lowerText4 = text4.toLowerCase();
console.log("中英混合:", text4);
console.log("轉換後:", lowerText4);
// 輸出: hello 世界 world

// 5. 實際應用 - 字串比較
const userInput = "YES";
const correctAnswer = "yes";

if (userInput.toLowerCase() === correctAnswer.toLowerCase()) {
  console.log("答案正確！");
} else {
  console.log("答案錯誤！");
}

// 6. 實際應用 - 搜尋功能
const products = ["iPhone", "iPad", "iMac", "MacBook"];
const searchTerm = "IPHONE";

const found = products.find(product => 
  product.toLowerCase().includes(searchTerm.toLowerCase())
);
console.log("搜尋結果:", found);

// 7. 實際應用 - 資料清理
const userNames = ["John", "JANE", "mike", "SARA"];
const normalizedNames = userNames.map(name => name.toLowerCase());
console.log("標準化後的名字:", normalizedNames);

// 8. 檢查是否為小寫
function isLowerCase(str) {
  return str === str.toLowerCase();
}

console.log("'hello' 是否為小寫:", isLowerCase("hello")); // true
console.log("'Hello' 是否為小寫:", isLowerCase("Hello")); // false 
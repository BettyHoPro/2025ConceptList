// Stack Trace 示範
function level3() {
  // 故意製造錯誤
  let undefinedVar;
  console.log(undefinedVar.nonExistentMethod()); // 這裡會出錯
}

function level2() {
  console.log("進入 level2");
  level3(); // 呼叫 level3
}

function level1() {
  console.log("進入 level1");
  level2(); // 呼叫 level2
}

function main() {
  console.log("程式開始執行");
  level1(); // 呼叫 level1
}

// 執行主程式
main(); 
let a = parseFloat(prompt("Nhập số a:"));
let b = parseFloat(prompt("Nhập số b:"));

let operation = prompt("Nhập phép tính (+, -, *, /):");

let result;

if(operation ===`+`){
  result = a + b;
}else if (operation === "-") {
  result = a - b;
}else if (operation === "*") {
  result = a * b;
}else if (operation === "/") {
  result = a / b;
if(b === 0){
  result = `Không thể chia cho 0`;
}else {
  result = a / b;
}
}else {
  result = `"Phép tính không hợp lệ`;
}

alert("Kết quả: " + result);

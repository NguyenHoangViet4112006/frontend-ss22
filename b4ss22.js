let input = prompt("Nhập 1 dãy số:");

if (/^\d+$/.test(input)) {
    let numbers = input.split("").join(" "); 
    let maxNumber = Math.max(...numbers.split(" ")); 
    alert("Số lớn nhất là: " + maxNumber);
} else {
    alert("Dãy số không hợp lệ!");
}
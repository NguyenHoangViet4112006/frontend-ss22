let arr = [3, 4, 2, 8, 9];

let soChan=0;
let soLe=0;
for (let i = 0; i < arr.length; i++){
    if (arr[i] % 2 !== 0) {
        soChan += arr[i];
    }else{
        soLe += arr[i];
    }
}
document.write("Tong cac so le" + soChan);
document.write("Tong cac so chan" + soLe);
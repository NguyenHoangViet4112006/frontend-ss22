let arr=[3,3,3,4,4,6,2,6,4,2];
let num = parseInt(prompt("Nhap 1 so nguyen"), 10);
let count = 0;
for (let i = 0; i<arr.length; i++){
    if (arr[i]===num){
        count++;
    }
}
if(count >0){
    document.write("So" + num + "xuat hien trong mang"+count+"lan");
}else{
    document.write("So"+num+"khong ton tai");
}
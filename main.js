//BÀI1:
function sort() {
  var num1 = document.getElementById("inNum1").value;
  var num2 = document.getElementById("inNum2").value;
  var num3 = document.getElementById("inNum3").value;
  var result = 0;
  if (num1 > num2) {
    if (num2 > num3) {
      result = num1 + " > " + num2 + " > " + num3;
      console.log(result);
    } else if (num1 > num3) {
      result = num1 + " >" + num3 + " > " + num2;
      console.log(result);
    } else {
      result = num3 + " > " + num1 + " > " + num2;
      console.log(result);
    }
  } else if (num2 < num3) {
    result = num3 + " > " + num2 + " > " + num1;
    console.log(result);
  } else if (num1 > num3) {
    result = num2 + " > " + num1 + " > " + num3;
    console.log(result);
  } else {
    result = num2 + " > " + num3 + " > " + num1;
    console.log(result);
  }
  document.getElementById("result__b1").innerHTML = result;
}
document.getElementById("btnNum").onclick = sort;

//BÀI2:
function sayHello() {
  var list = document.getElementById("memBer").value;
  var result = 0;
  if (list == "member") {
    result = "Bạn";
  } else if (list == "dad") {
    result = "Bố";
  } else if (list == "mom") {
    result = "Mẹ";
  } else if (list == "brother") {
    result = "Anh trai";
  } else {
    result = "Em gái";
  }

  document.getElementById("result__b2").innerHTML = "Xin chào " + result + "!";
}

document.getElementById("btnMember").onclick = sayHello;

//BÀI 3:
function count(){
  var num1 = document.getElementById("inNum1").value;
  var num2 = document.getElementById("inNum2").value;
  var num3 = document.getElementById("inNum3").value;
  var countC = 0;
  var countL = 0;
  console.log(num1, num2, num3, countC, countL);
  if(num1 % 2 == 0){
      countC++;
      console.log(countC);
  }else{
      countL++;
      console.log(countL);
  }
  if(num2 % 2 == 0){
      countC++;
      console.log(countC);
  }else{
      countL++;
      console.log(countL);
  }
  if(num3 % 2 == 0){
      countC++;
      console.log(countC);
  }else{
      countL++;
      console.log(countL);
  }
  document.getElementById("result__b3").innerHTML = "Có " + countC +" số chẵn," + countL + " số lẻ";
}

document.getElementById("btnCL").onclick = count;

//Bài 4:
function triangle(){
  var canh1 = document.getElementById("inNum1").value;
  var canh2 = document.getElementById("inNum2").value;
  var canh3 = document.getElementById("inNum3").value;
  var result = 0;
  
  if(canh1 == canh2 && canh1 == canh3){
    result ="Hình tam giác đều";
  }else if(canh1 == canh2 || canh1 == canh3 || canh2 == canh3){
    result = "Hình tam giác cân";
  }else if(Math.pow(canh1,2) == Math.pow(canh2,2) + Math.pow(canh3,2) || Math.pow(canh2,2) == Math.pow(canh1,2) + Math.pow(canh3,2) || Math.pow(canh3,2) == Math.pow(canh2,2) + Math.pow(canh1,2)){
    result ="Hình tam giác vuông";
  }else{
    result = "Một loại tam giác nào đó";
  }

  document.getElementById("btnTri").innerHTML = result;
}

document.getElementById("txtTriangle").onclick = triangle;
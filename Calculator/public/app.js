function getData(value){
    var input1 = document.getElementById("input1")
    input1.value += value;
}
function clearScreen(){
    var input2 = document.getElementById("input1")
    input2.value = "";

}
function deleteOneNumber(){
    var input3 = document.getElementById("input1");    
   input3.value = input.value.slice(0, -1);
}
function screenDisplay(){
    var input4 = document.getElementById("input1");
    var result = eval(input4.value);
    input4.value = result;
}
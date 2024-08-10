

function getNumber(element) {
  var inputValue = document.getElementById("data");
  inputValue.value += element.innerText;
}



function getResult(){
  var inputValue = document.getElementById("data");
  inputValue.value = eval(inputValue.value);
}

function clearValue(){
  var inputValue = document.getElementById("data");
  inputValue.value = "";
}


function deleteOneNum(){
  var inputValue = document.getElementById("data");
  inputValue.value = (inputValue.value.toString().slice(0,-1));
}
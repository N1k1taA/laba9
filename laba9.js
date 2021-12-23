var input = document.getElementById('input'),
  seven = document.getElementById('seven'),
  eight = document.getElementById('eight'),
  nine = document.getElementById('nine'),
  divide = document.getElementById('divide'),
  clear = document.getElementById('clear'),
  four = document.getElementById('four'),
  five = document.getElementById('five'),
  six = document.getElementById('six'),
  multiply = document.getElementById('multiply'),
  remove = document.getElementById('remove'),
  one = document.getElementById('one'),
  two = document.getElementById('two'),
  three = document.getElementById('three'),
  minus = document.getElementById('minus'),
  zero = document.getElementById('zero'),
  dоt = document.getElementById('dоt'),
  plus = document.getElementById('plus'),
  equal = document.getElementById('equal'),
  isEndEqual = true;

one.onclick = function() {
   if (isEndEqual) {
     isEndEqual = false;
     input.value = "1";
   }
   else {
     input.value += "1";
   }
}

two.onclick = function() {
   if (isEndEqual) {
     isEndEqual = false;
     input.value = "2";
   }
   else {
     input.value += "2";
   }
}

three.onclick = function() {
   if (isEndEqual) {
     isEndEqual = false;
     input.value = "3";
   }
   else {
     input.value += "3";
   }
}

four.onclick = function() {
   if (isEndEqual) {
     isEndEqual = false;
     input.value = "4";
   }
   else {
     input.value += "4";
   }
}

five.onclick = function() {
   if (isEndEqual) {
     isEndEqual = false;
     input.value = "5";
   }
   else {
     input.value += "5";
   }
}

six.onclick = function() {
   if (isEndEqual) {
     isEndEqual = false;
     input.value = "6";
   }
   else {
     input.value += "6";
   }
}

seven.onclick = function() {
   if (isEndEqual) {
     isEndEqual = false;
     input.value = "7";
   }
   else {
     input.value += "7";
   }
}

eight.onclick = function() {
   if (isEndEqual) {
     isEndEqual = false;
     input.value = "8";
   }
   else {
     input.value += "8";
   }
}

nine.onclick = function() {
   if (isEndEqual) {
     isEndEqual = false;
     input.value = "9";
   }
   else {
     input.value += "9";
   }
}

clear.onclick = function(){
  input.value = "0";
  isEndEqual = true;
}

remove.onclick = function(){
  if (input.value[input.value.length-1] === ' '){
    input.value = input.value.slice(0, -2);
  }
  input.value = input.value.slice(0, -1);
}

plus.onclick = function(){
  if (input.value[input.value.length-1] !== ' ' && !isEndEqual){
    input.value += " + ";
  }
}

minus.onclick = function(){
  if (input.value[input.value.length-1] !== ' ' && !isEndEqual){
    input.value += " - ";
  }
}

multiply.onclick = function(){
  if (input.value[input.value.length-1] !== ' ' && !isEndEqual){
    input.value += " * ";
  }
}

divide.onclick = function(){
  if (input.value[input.value.length-1] !== ' ' && !isEndEqual){
    input.value += " / ";
  }
}

equal.onclick = function(){
  input.value = eval(input.value);
  isEndEqual = true;
}

dоt.onclick = function(){
  if (input.value === '0' || input.value[input.value.length-1] !== ' '){
    input.value += '.';
    isEndEqual = false;
  }
}

//input.value.addEventListener("change", changeText, false);

function changeText(){

}

add.onclick = function() {
  var key = document.createElement('input'),
      value = document.createElement('input'),
      up = document.createElement('input'),
      down = document.createElement('input'),
      del = document.createElement('input'),
      elem = document.createElement('div');
  elem.className = "buttons";
  key.type = "text";
  value.type = "text";
  up.type = "button";
  down.type = "button";
  del.type = "button";
  up.value = String.fromCharCode(8593);
  down.value = String.fromCharCode(8595);
  del.value = "X";
  del.addEventListener('click', removeElem);
  up.addEventListener('click', upElem);
  down.addEventListener('click', downElem);
  elem.append(key);
  elem.append(value);
  elem.append(up);
  elem.append(down);
  elem.append(del);
  var elems = document.getElementById('Elems');
  elems.append(elem);
}

save.onclick = function() {
  var elems = document.getElementById('Elems');
  var result = "{";
  Array.prototype.slice.call(elems.children).forEach(elem => {
      result += '"' + elem.children[0].value + '":"' + elem.children[1].value + '",'
  });
  if (result !== "{")
    result = result.slice(0, -1);
  result += '}'
  var resultElem = document.getElementById("Result");
  resultElem.innerText = result;
}

function removeElem(){
  var elem = this.parentElement;
  var elems = elem.parentElement;
  elems.removeChild(elem);
}

function upElem(){
  var elem = this.parentElement;
  var elems = elem.parentElement;
  var index = Array.prototype.slice.call(elems.children).indexOf(elem);
  elems.insertBefore(elems.children[index], elems.children[index-1])
}

function downElem(){
  var elem = this.parentElement;
  var elems = elem.parentElement;
  var index = Array.prototype.slice.call(elems.children).indexOf(elem);
  elems.insertBefore(elems.children[index+1], elems.children[index])
}
// Add interest list section
let inputBox = document.querySelector(".form-control");
let btn      = document.querySelector(".btn");
let listWrap = document.querySelector(".list-group");

function addSkill(){
  let li = document.createElement("li");
  let remove = document.createElement('span');
  remove.appendChild(document.createTextNode("X"));
  li.appendChild(document.createTextNode(inputBox.value));
  li.appendChild(remove);
  listWrap.appendChild(li).classList.add('list-group-item');
  inputBox.value = "";
  remove.addEventListener('click',function(){
    li.style.display = "none";
  })
} 
function skillOnButton(){
  if(inputBox.value.length > 0) {
    addSkill();
  }
}
function skillOnKeypress(e){
  if(inputBox.value.length > 0 && e.keyCode === 13) {
    addSkill();
  }
}
btn.addEventListener('click', skillOnButton);
inputBox.addEventListener('keypress', skillOnKeypress);

// number spinner
let plus  = document.querySelector(".plus");
let minus = document.querySelector(".minus");
let quantity = document.querySelector(".qty");

plus.addEventListener("click",function(){
  if(quantity.value < 10){
    quantity.value ++;
  }
});
minus.addEventListener("click",function(){
  if(quantity.value > 0){
    quantity.value --;
  }
});

// Limit letter type
let letterBox = document.querySelector("#input_box");
let digit = document.querySelector("#digit");
let maxlength = 20;
 
letterBox.addEventListener("keyup",function(){
  digit.textContent = maxlength - this.value.length;
});
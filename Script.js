const button = document.querySelectorAll("button");
const result = document.getElementById("result");

for(let i =0; i<button.length; i++){
button[i].addEventListener("click", () =>
{
const buttonValue = button[i].textContent;
if(buttonValue === "C")
{
  clearResult();
}
else if(buttonValue === "=" && result.value !== "" ){

       calculateResult();
}
else if(buttonValue === "DE"){
    DeleteElement();
}
else 
{
  appendValue(buttonValue);
}
});
}

function clearResult()
{
  result.value="";
}
function DeleteElement(){
    result.value=result.value.slice(0,-1)
}
function calculateResult()
{
  result.value =eval(result.value);
}

function appendValue(buttonValue)
{
  result.value = result.value + buttonValue;
}
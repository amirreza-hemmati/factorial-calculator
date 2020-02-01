const btnNumber = document.getElementsByClassName("number");
const btnClear = document.getElementById("clear");
const btnBack = document.getElementById("back");
const resultElement = document.getElementById("result");
const btnFactorial = document.getElementById("factorial");
const successAlert = document.getElementById("success-alert");
const dangerAlert = document.getElementById("danger-alert");

for (let index = 0; index < btnNumber.length; index++) {
  const element = btnNumber[index];

  element.addEventListener("click", () => {
    resultElement.innerText += String(element.innerText).trim();
  });
}

btnClear.addEventListener("click", () => {
  resultElement.innerText = "";
  successAlert.classList.add("success-alert");
});

btnBack.addEventListener("click", () => {
  const elementStr = resultElement.innerText;
  let str = "";
  for (let index = 0; index < elementStr.length; index++) {
    if (index === elementStr.length - 1) {
      continue;
    }
    str += elementStr[index];
  }
  resultElement.innerText = str;
  successAlert.classList.add("success-alert");
});

btnFactorial.addEventListener("click", () => {
  const txt = resultElement.innerText;
  if(txt === ""){
	  dangerAlert.classList.remove("success-alert");
	  
	  setTimeout(() => {
		  dangerAlert.classList.add("success-alert");
	  } ,4000);
	  
	  return;
  }
  
  const factorial = new Factorial();
  const buildArray = factorial.buildArray(txt);
  const result = factorial.factorial(buildArray);

  resultElement.innerText = result;

  successAlert.classList.remove("success-alert");
  
  setTimeout(() => {
	  successAlert.classList.add("success-alert");
  } ,4000);
  
});

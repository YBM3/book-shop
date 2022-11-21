let inputName = document.getElementById("name");

inputName.onblur = function(){
    if(inputName.value.length<4 || inputName.value.includes(" ") || /\d/.test(inputName.value)){
      isValid = false;
        inputName.classList.add("error");
        errorName.innerHTML = 'Please, eneter full name (not less than 4 characters)';
    }
}
inputName.onfocus = function() {
    if (this.classList.contains('error')) {
       this.classList.remove('error');
      errorName.innerHTML = "";
    }
  };
  let inputSurname = document.getElementById("Surname");

  inputSurname.onblur = function(){
    if(inputSurname.value.length<5 || inputSurname.value.includes(" ") || /\d/.test(inputSurname.value)){
      isValid = false;
        inputSurname.classList.add("error");
        errorSurname.innerHTML = 'Please, eneter full last name (not less than 5 characters)'
    }
}
inputSurname.onfocus = function() {
    if (this.classList.contains('error')) {
       this.classList.remove('error');
      errorSurname.innerHTML = "";
    }
  };

let today = new Date();
let tommorow = new Date(today);
tommorow.setDate(today.getDate() + 1);
console.log(tommorow);


let tomorrowString = tommorow.toString();
tomorrowForDate = Number(tomorrowString.slice(8,10));
let monthForDate = tomorrowString.slice(4,7);

let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

for(let i=0; i<months.length; i++){
  if (monthForDate == months[i]){
   monthForDate = Number(i+1);
}}

console.log(monthForDate);
let inputDate = document.getElementById("date");
inputDate.setAttribute('min', `2022-${monthForDate}-${tomorrowForDate}`);


let inputStreet = document.getElementById("Street");

inputStreet.onblur = function(){
  if(inputStreet.value.length<5){
    isValid = false;
    inputStreet.classList.add("error");
    errorStreet.innerHTML = 'Please, eneter full street name (not less than 5 characters)'
  }
  }
inputStreet.onfocus = function() {
  if (this.classList.contains('error')) {
     this.classList.remove('error');
     errorStreet.innerHTML = "";
  }
};

let inputHouse = document.getElementById("HouseNumber");

inputHouse.onblur = function(){
  if(inputHouse.value < 0 || inputHouse.value.length < 1 || inputHouse.value.startsWith("e")){
    isValid = false;
    inputHouse.classList.add("error");
      errorHouseNumber.innerHTML = 'The field is invalid. Please, eneter numbers only'
  }
  }
inputHouse.onfocus = function() {
  if (this.classList.contains('error')) {
     this.classList.remove('error');
    errorHouseNumber.innerHTML = "";
  }
}
let inputFlat = document.getElementById("Flat")

inputFlat.onblur = function(){
for(let char of inputFlat.value){

     if (char.charCodeAt() != 45  && char.charCodeAt() > 31 && (char.charCodeAt() < 47 || char.charCodeAt() > 57)){
      isValid = false;
     inputFlat.classList.add("error");
     error5.innerHTML = 'The field is invalid. Please, eneter numbers, "-", "/" signs only, starting from number'}}
    if(inputFlat.value.length < 1  || inputFlat.value.startsWith("-") || inputFlat.value.startsWith("/")){
      inputFlat.classList.add("error");
      errorFlat.innerHTML = 'The field is invalid. Please, eneter numbers, "-", "/" signs only, starting from number'
     }
     }


inputFlat.onfocus = function() {
  if (this.classList.contains('error')) {
     this.classList.remove('error');
    errorFlat.innerHTML = "";
  }
}

let validPay=false;
let paymentCash = document.getElementById("cash");
let paymentCard = document.getElementById("card");

paymentCard.addEventListener("change", function () {
      if (paymentCard.checked) {
        validPay = true;
        }});

paymentCash.addEventListener("change", function () {
          if (paymentCash.checked) {
            validPay = true;
            }});

            let checks = document.querySelectorAll(".gift-check");
            let max = 2;
            for (let i = 0; i < checks.length; i++) checks[i].onclick = chosenGifts;
            function chosenGifts(event) {
              let checkedChecks = document.querySelectorAll(".gift-check:checked");
              if (checkedChecks.length >= max + 1) {
                return false;
              }
            }



let resultDiv = document.querySelector(".result");

function createOrderResult(){
  let divResult = document.createElement("div");
  divResult.classList.add("result-info")
  let resultName = document.createElement("div");
  resultName.innerHTML = `Name: ${inputName.value}`;
  let resultSurname = document.createElement("div");
  resultSurname.innerHTML = `Surname: ${inputSurname.value}`;
  let resultAdress = document.createElement("div");
  resultAdress.innerHTML = `Street: ${inputStreet.value}, house: ${inputHouse.value}, flat: ${inputFlat.value}`;
  let resultDeliveryDate = document.createElement("div");
  resultDeliveryDate.innerHTML = `Delivery date: ${inputDate.value}`;
  let thanks = document.createElement("div");
  thanks.classList.add("result-title");
  let closeBtn = document.createElement("button");
  closeBtn.classList.add("close-btn");
  closeBtn.innerHTML = "Close";
  closeBtn.addEventListener("click", (event)=>{
  event.preventDefault();
  resultDivToShow.removeAttribute("class",
  "show-result");
  orderPage.classList.remove("order-hidden");
  document.location.reload();
})

  divResult.append(resultName);
  divResult.append(resultSurname);
  divResult.append(resultAdress);
  divResult.append(resultDeliveryDate);
  divResult.append(thanks);
  divResult.append(closeBtn);
  resultDiv.append(divResult);
}



let resultDivToShow = document.querySelector(".hide-result");
let resultDivShow = document.querySelector(".result");
  let submitBtn = document.querySelector(".submit-btn");
  let orderPage = document.querySelector(".order-show");
  submitBtn.addEventListener("click", showResult)
  function showResult(event){
    event.preventDefault();
    resultDivToShow.classList.toggle("show-result");
    orderPage.classList.add("order-hidden");
    resultDivShow.innerHTML = "";
    createOrderResult();
  }


  function enableSubmit(){
    let inputs = document.querySelectorAll('.valid-inputs');
    let btn = document.querySelector('.submit-btn');

    let isValid = true;

    for (let i of inputs){
    if (i.value.trim() === "" || i.value === "" || !validPay){
    isValid = true;
    btn.disabled;
    btn.style.cursor = "not-allowed";
    }
     btn.disabled = !isValid;

    }
     if(isValid){
      btn.style.cursor = "pointer";}
  }

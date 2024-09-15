const cardName=document.querySelector("#cardName");
const cardNumber=document.querySelector("#cardNumber");
const cardExp=document.querySelector("#cardExp");
const cardCvc=document.querySelector("#cardCvc");
function fillTheCard(e){
    e.stopPropagation();
    e.preventDefault();
    const form=document.querySelector("form");
    let formData=new FormData(form);
    formData=Object.fromEntries(formData);
    cardName.innerHTML=formData.holderName;
    cardNumber.innerHTML=formData.cardNumber;
    cardExp.innerHTML=formData.expDateMonth+"/"+formData.expDateYear;
    cardCvc.innerHTML=formData.cvc;
    createThankYou();
    return false;
}
function createForm(){
    cardReset();
    document.querySelector("#formArea").innerHTML=`
    <form onsubmit="fillTheCard(event)">
    <div id="formHolderName">
     <label for="holderName">CARDHOLDER NAME</label>
     <input type="text" name="holderName"
     pattern="\\w+\\s\\w+"
     required
      placeholder="e.g. Jane Appleseed">
    </div>
    <div id="formNumber">
     <label for="cardNumber">CARD NUMBER</label>
     <input type="text" name="cardNumber" 
     pattern="\\d{4}\\s\\d{4}\\s\\d{4}\\s\\d{4}"
     required
      placeholder="e.g. 1234 5678 9123 0000">
    </div>
    <div id="formExpirationAndCvc">
     <div id="formExp">
     <label for="expDate">EXP. DATE (MM/YY)</label>
     <div id="formDate">
     <input type="text" name="expDateMonth" placeholder="MM" 
     pattern="(0[1-9]|1[0,1,2])"
       required>
     <input type="text" name="expDateYear" placeholder="YY"
     pattern="\\d{2,2}"
      required>
     </div>
     </div>
     <div id="formCvc">
     <label for="cvc">CVC</label>
     <input type="text" name="cvc" 
     pattern="\\d{3,3}"
     placeholder="e.g. 123"  required>
     </div>
    </div>
    <button type="submit" >confirm</button>

  </form>
    `;
}
function createThankYou(){
    document.querySelector("#formArea").innerHTML=`
    <div id="thankYou">
    <div id="thankYouIcon">
    <img src="./images/icon-complete.svg">
    </div>
    <div id="thankYouMsg">
    THANK YOU!
    </div>
    <div>
    we've added your card details
    </div>
    <button id="thankYouBtn" onclick="createForm()">
    Continue</button>
    </div>
    `;
}
function cardReset(){
  cardNumber.innerHTML=" 0000&nbsp;0000&nbsp;0000&nbsp;0000";
  cardName.innerHTML="JANE &nbsp;APPLESEED";
  cardExp.innerHTML="  00/00";
  cardCvc.innerHTML="000";
}
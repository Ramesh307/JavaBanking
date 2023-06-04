// Get Transaction Type:
const transactType = document.querySelector("#transact-type");

// Get Transaction Forms:
const paymentCard = document.querySelector(".payment-card");
const transferCard = document.querySelector(".transfer-card");
const depositCard = document.querySelector(".deposit-card");
const withdrawCard = document.querySelector(".withdraw-card");
console.log(transactType)
// Check For Transaction Type Evenet Listener:
if(transactType){
transactType.addEventListener("change",() =>{

    // Check For Transaction Type and Display Form:
    switch(transactType.value){
        case "payment":
            paymentCard.style.display = "block";
            paymentCard.nextElementSibling.style.display = "none";
            depositCard.style.display = "none";
            withdrawCard.style.display = "none";
        break;

        case "transfer":
            transferCard.previousElementSibling.style.display = "none";
            transferCard.style.display = "block";
            transferCard.nextElementSibling.style.display = "none";
            withdrawCard.style.display = "none";
        break;
  
    }
    // End Of Check For Transaction Type and Display Form.

});}
// End Of Check For Transaction Type Evenet Listener.
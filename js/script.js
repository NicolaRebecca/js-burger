

var createSum = document.getElementById ('calculate');
var resultSumElement = document.getElementById ('totale');
alert("Benvenuto! usa il codice promo JUNE20 per ricevere il 20% di sconto")

createSum.addEventListener('click', function() {

var resultSumInt = 0;
var ceckNum = document.getElementsByClassName('add-element');

for (var i = 0; i < ceckNum.length; i++){
    if (ceckNum[i].checked) {
        resultSumInt += parseInt(ceckNum[i].value)
    }
}

    resultSumElement.innerHTML = 50 + parseInt(resultSumInt);

    var discount = document.getElementById("coupon").value;
    var fullprice = 50;
    if(discount === "JUNE20"){
        var discountValue = (fullprice / 100) * 20;
        resultSumElement.innerHTML = fullprice + resultSumInt - discountValue ;
    }


})





// var totalPrice = resultSumInt + (resultSumInt * sale);





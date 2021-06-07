var createSum = document.getElementById ('calculate');
var resultSumElement = document.getElementById ('totale');

createSum.addEventListener('click', function() {

var resultSumInt = 0;
var ceckNum = document.getElementsByClassName('add-element');

for (var i = 0; i < ceckNum.length; i++){
    if (ceckNum[i].checked) {
        resultSumInt += parseInt(ceckNum[i].value)
    }
}

resultSumElement.innerHTML = parseInt("50") + resultSumInt;

})
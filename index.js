
function calculate(){
    let billAmt = parseFloat(document.getElementById("bill_amt").value);
    let percent = document.getElementById("quality").value;
    let persons = parseFloat(document.getElementById("number").value);

    if(isNaN(billAmt) || isNaN(persons)){
        alert("please enter a valid number...");
        return;
    }
    let tip = (billAmt*percent)/persons;

    let printTip = document.getElementById("result");
    printTip.innerHTML = `Tip Amount ${tip.toFixed(2)} rupees each` 

}
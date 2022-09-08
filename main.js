function decimalToBinary(theNum) {
    const num = theNum.trim();

    let val = 1;
    const values = [1];
    let size = 1;

    while (val < num) {
        val *= 2;

        if (val < num) {
            values[size] = val;
            size++;
        }
    }

    let bin = 0;
    let binary = "";

    for (var j = size - 1; j >= 0; j--) {
        if ((bin + values[j]) > num) {
            binary += "0";
            continue;
        }

        binary += "1";
        bin += values[j];
    }

    return binary;
}

function binaryToDecimal(num) {
    let strVal = num.trim();
    const strArr = strVal.split("");
    const intArr = [];

    for (var i = 0; i < strArr.length; i++) {
        intArr[i] = parseInt(strArr[i]);
    }

    let val = 1;
    let decimal = 0;

    for (var j = intArr.length - 1; j >= 0; j--) {

        if (intArr[j] == 0) {
            val *= 2;
            continue;
        }

        decimal += val;
        val *= 2;
    }

    return decimal;
}
function containsOnlyNumbers(testString) {
    return /^\d+$/.test(testString);
}

function isValidBinary(checkNum) {

    if (checkNum === "") return "Binary input can only contains 1's and 0's";

    const binInput = checkNum.trim();

    const theArr = binInput.split("");

    for (var i = 0; i < theArr.length; i++) {
        if (parseInt(theArr[i]) !== 0 && parseInt(theArr[i]) !== 1) {
            return "Binary input can only contains 1's and 0's";
        }
    }

    return "";
}

const m = document.getElementById('message');

document.getElementById('options').addEventListener('change', function() {
    m.textContent = "";

    if (this.value === "DecToBin") {
        document.getElementById("valToConvert").textContent = "Decimal Number:";
        document.getElementById("convertedVal").textContent = " Binary Number:";
        
        document.getElementById("valToConvert").style.left = "482px";
        document.getElementById("convertedVal").style.left = "493px";

    } else {
        document.getElementById("valToConvert").textContent = " Binary Number:";
        document.getElementById("convertedVal").textContent = "Decimal Number:";
       
        document.getElementById("valToConvert").style.left = "489px";
        document.getElementById("convertedVal").style.left = "483px";
    }

});

document.getElementById('convert').addEventListener('click', function() {

    const theChoice = document.getElementById('options').value;
    
    if (theChoice === "BinToDec") {
        const binInput = document.getElementById('theInput').value;

        m.textContent = "";

        if (isValidBinary(binInput) === "") {
            document.getElementById('theOutput').value = binaryToDecimal(binInput);
        } else {
            alert(isValidBinary(binInput));
        }

    } else {
        const decInput = document.getElementById('theInput').value;

        if (containsOnlyNumbers(decInput)) {
            m.textContent = (isValidBinary(decInput) === "") ? "Did you mean to convert from binary to decimal?" : "";
        
            setTimeout(function () {
                m.textContent = '';
            }, 3100); 

            document.getElementById('theOutput').value = decimalToBinary(decInput);

        } else {
            alert("Decimal input can only contain integers");
        }
    }
});

const theInput = document.getElementById('theInput');

theInput.addEventListener('keydown', function() {

    if (document.getElementById('theInput').value === "") {
        document.getElementById('theOutput').value = "";
    }
   
});
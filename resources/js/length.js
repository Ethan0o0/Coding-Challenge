document.addEventListener("DOMContentLoaded", function() {

    function convertLength() {

        // console.log("MADE IT TO CONVERTOR");
        const inputLength = document.getElementById("input");
        const outputLength = document.getElementById("output");
        const fromUnit = document.getElementById("from");
        const toUnit = document.getElementById("to");
        // console.log(inputWeight.value);

        if (fromUnit.value == "Pounds" && toUnit.value == "Kilograms" ) {
            // console.log(inputWeight);
            outputLength.innerHTML = "Output: " + (inputLength.value / 2.205).toFixed(4);
            // console.log(outputWeight.innerHTML);
        }
        else if (fromUnit.value == "Pounds" && toUnit.value == "Ounces") {
            outputLength.innerHTML = "Output: " + (inputLength.value * 16).toFixed(4);
        }
        else if (fromUnit.value == "Pounds" && toUnit.value == "Gram") {
            outputLength.innerHTML = "Output: " + (inputLength.value * 453.6).toFixed(4);
        }
        else if (fromUnit.value == "Pounds" && toUnit.value == "Milligram") {
            outputLength.innerHTML = "Output: " + (inputLength.value * 453600).toFixed(4);
        }
        else if (fromUnit.value == "Pounds" && toUnit.value == "Pounds") {
            outputLength.innerHTML = "Output: " + inputLength.value;
        }

    }

    let initialChange = document.getElementById("set");
    initialChange.addEventListener("click", convertLength);


})
document.addEventListener("DOMContentLoaded", function() {

    function convertWeight() {

        // console.log("MADE IT TO CONVERTOR");
        const inputWeight = document.getElementById("input");
        const outputWeight = document.getElementById("output");
        const fromUnit = document.getElementById("from");
        const toUnit = document.getElementById("to");
        // console.log(inputWeight.value);

        if (fromUnit.value == "Pounds" && toUnit.value == "Kilograms" ) {
            // console.log(inputWeight);
            outputWeight.innerHTML = "Output: " + (inputWeight.value / 2.205).toFixed(4);
            // console.log(outputWeight.innerHTML);
        }
        else if (fromUnit.value == "Pounds" && toUnit.value == "Ounces") {
            outputWeight.innerHTML = "Output: " + (inputWeight.value * 16).toFixed(4);
        }
        else if (fromUnit.value == "Pounds" && toUnit.value == "Gram") {
            outputWeight.innerHTML = "Output: " + (inputWeight.value * 453.6).toFixed(4);
        }
        else if (fromUnit.value == "Pounds" && toUnit.value == "Milligram") {
            outputWeight.innerHTML = "Output: " + (inputWeight.value * 453600).toFixed(4);
        }
        else if (fromUnit.value == "Pounds" && toUnit.value == "Pounds") {
            outputWeight.innerHTML = "Output: " + inputWeight.value;
        }

    }

    let initialChange = document.getElementById("set");
    initialChange.addEventListener("click", convertWeight);


})
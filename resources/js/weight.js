document.addEventListener("DOMContentLoaded", function() {

    function convertWeight() {

        // console.log("MADE IT TO CONVERTOR");
        const inputWeight = document.getElementById("input");
        const outputWeight = document.getElementById("output");
        const fromUnit = document.getElementById("from");
        const toUnit = document.getElementById("to");
        // console.log(inputWeight.value);

        if (fromUnit.value == "Pounds") {
            if (toUnit.value == "Kilograms") {
                outputWeight.innerHTML = "Output: " + (inputWeight.value / 2.205).toFixed(4);
            }
            else if (toUnit.value == "Ounces") {
                outputWeight.innerHTML = "Output: " + (inputWeight.value * 16);
            }
            else if (toUnit.value == "Gram") {
                outputWeight.innerHTML = "Output: " + (inputWeight.value * 453.6).toFixed(2);
            }
            else if (toUnit.value == "Milligram") {
                outputWeight.innerHTML = "Output: " + (inputWeight.value * 453600);
            }
            else if (toUnit.value == "Pounds") {
                outputWeight.innerHTML = "Output: " + inputWeight.value;
            }
        }

    }

    let initialChange = document.getElementById("set");
    initialChange.addEventListener("click", convertWeight);


})
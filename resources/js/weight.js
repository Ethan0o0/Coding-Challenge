import * as convert from "./conversions.js";

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
                outputWeight.innerHTML = "Output: " + convert.lbs_to_kg(inputWeight.value);
            }
            else if (toUnit.value == "Ounces") {
                outputWeight.innerHTML = "Output: " + convert.lbs_to_o(inputWeight.value);
            }
            else if (toUnit.value == "Gram") {
                outputWeight.innerHTML = "Output: " + convert.lbs_to_g(inputWeight.value);
            }
            else if (toUnit.value == "Milligram") {
                outputWeight.innerHTML = "Output: " + convert.lbs_to_mg(inputWeight.value);
            }
            else if (toUnit.value == "Pounds") {
                outputWeight.innerHTML = "Output: " + inputWeight.value;
            }
        }

    }

    let initialChange = document.getElementById("set");
    initialChange.addEventListener("click", convertWeight);


})
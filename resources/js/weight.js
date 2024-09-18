import * as convert from "./conversions.js";

document.addEventListener("DOMContentLoaded", function() {

    function convertWeight() {

        // console.log("MADE IT TO CONVERTOR");
        const inputWeight = document.getElementById("input");
        const outputWeight = document.getElementById("output");
        const fromUnit = document.getElementById("from");
        const toUnit = document.getElementById("to");
        // console.log(inputWeight.value);

        const conversionRates = {
            "Pounds": {
                "Kilograms": { to: convert.lbs_to_kg },
                "Ounces": { to: convert.lbs_to_o },
                "Milligram": { to: convert.lbs_to_mg },
                "Gram": { to: convert.lbs_to_g }
            },
            "Kilograms": {
                "Pounds": { to: convert.kg_to_lb },
                "Ounces": { to: convert.kg_to_o },
                "Milligram": { to: convert.kg_to_mg },
                "Gram": { to: convert.kg_to_g }
            },
            "Ounces": {
                "Pounds": { to: convert.o_to_lbs },
                "Kilograms": { to: convert.o_to_kg },
                "Milligram": { to: convert.o_to_mg },
                "Gram": { to: convert.o_to_g }
            },
            "Milligram": {
                "Pounds": { to: convert.mg_to_lbs },
                "Kilograms": { to: convert.mg_to_kg },
                "Ounces": { to: convert.mg_to_o },
                "Gram": { to: convert.mg_to_g }
            },
            "Gram": {
                "Pounds": { to: convert.g_to_lbs },
                "Kilograms": { to: convert.g_to_kg },
                "Milligram": { to: convert.g_to_mg },
                "Ounces": { to: convert.g_to_o }
            }
        }

        if (conversionRates[fromUnit.value] && conversionRates[fromUnit.value][toUnit.value]) {
            const { to } = conversionRates[fromUnit.value][toUnit.value];
            // console.log(to);
            outputWeight.innerHTML = "Output: " + to(inputWeight.value);
        }
        else {
            outputWeight.innerHTML = "Conversion not applicable";
        }


    }

    let initialChange = document.getElementById("set");
    initialChange.addEventListener("click", convertWeight);


})
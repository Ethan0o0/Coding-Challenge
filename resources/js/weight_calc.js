import * as convert from "./conversions.js";

document.addEventListener("DOMContentLoaded", function() {

    function weightCalc() {

        const option1 = document.getElementById("option1");
        const option2 = document.getElementById("option2");
        const input1 = document.getElementById("input1");
        const input2 = document.getElementById("input2");
        const oput1 = document.getElementById("add_output");
        const oput2 = document.getElementById("sub_output");
        // let add_val_1 = 0;
        // let add_val_2 = 0;
        // let sub_val_1 = 0;
        // let sub_val_2 = 0;

        // //turning inputs into numbers
        const value1 = parseFloat(input1.value);
        const value2 = parseFloat(input2.value);

        const conversionRates = {
            "Pounds": {
                "Kilograms": { to: convert.kg_to_lb, from: convert.lbs_to_kg, unit1: "lbs", unit2: "kgs" },
                "Ounces": { to: convert.o_to_lbs, from: convert.lbs_to_o, unit1: "lbs", unit2: "ounces" },
                "Milligram": { to: convert.mg_to_lbs, from: convert.lbs_to_mg, unit1: "lbs", unit2: "mgs" },
                "Gram": { to: convert.g_to_lbs, from: convert.lbs_to_g, unit1: "lbs", unit2: "gs" }
            },
            "Kilograms": {
                "Pounds": { to: convert.lbs_to_kg, from: convert.kg_to_lb, unit1: "kgs", unit2: "lbs" },
                "Ounces": { to: convert.o_to_kg, from: convert.kg_to_o, unit1: "kgs", unit2: "ounces" },
                "Milligram": { to: convert.mg_to_kg, from: convert.kg_to_mg, unit1: "kgs", unit2: "mgs" },
                "Gram": { to: convert.g_to_kg, from: convert.kg_to_g, unit1: "kgs", unit2: "gs" }
            },
            "Ounces": {
                "Pounds": { to: convert.lbs_to_o, from: convert.o_to_lbs, unit1: "ounces", unit2: "lbs" },
                "Kilograms": { to: convert.kg_to_o, from: convert.o_to_kg, unit1: "ounces", unit2: "kilograms" },
                "Milligram": { to: convert.mg_to_o, from: convert.o_to_mg, unit1: "ounces", unit2: "mgs" },
                "Gram": { to: convert.g_to_o, from: convert.o_to_g, unit1: "ounces", unit2: "gs" }
            },
            "Milligram": {
                "Pounds": { to: convert.lbs_to_mg, from: convert.mg_to_lbs, unit1: "mgs", unit2: "lbs" },
                "Kilograms": { to: convert.kg_to_mg, from: convert.mg_to_kg, unit1: "mgs", unit2: "kilograms" },
                "Ounces": { to: convert.o_to_mg, from: convert.mg_to_o, unit1: "mgs", unit2: "mgs" },
                "Gram": { to: convert.g_to_mg, from: convert.mg_to_g, unit1: "mgs", unit2: "gs" }
            },
            "Gram": {
                "Pounds": { to: convert.lbs_to_g, from: convert.g_to_lbs, unit1: "gs", unit2: "lbs" },
                "Kilograms": { to: convert.kg_to_g, from: convert.g_to_kg, unit1: "gs", unit2: "kilograms" },
                "Ounces": { to: convert.o_to_g, from: convert.g_to_o, unit1: "gs", unit2: "mgs" },
                "Milligram": { to: convert.mg_to_g, from: convert.g_to_mg, unit1: "gs", unit2: "gs" }
            },
        };

        if (conversionRates[option1.value] && conversionRates[option1.value][option2.value]) {
            const { to, from, unit1, unit2 } = conversionRates[option1.value][option2.value];
            const add_val_1 = value1 + to(value2);
            const add_val_2 = value2 + from(value1);
            const sub_val_1 = value1 - to(value2);
            const sub_val_2 = value2 - from(value1);

            oput1.innerHTML = `Addition Output: ${add_val_1} ${unit1} or ${add_val_2} ${unit2}`;
            oput2.innerHTML = `Subtraction Output: ${sub_val_1} ${unit1} or ${sub_val_2} ${unit2}`;
        } else {
            oput1.innerHTML = "Conversion not supported.";
            oput2.innerHTML = "";
        }

    }

    let add_button = document.getElementById("addbutton");
    add_button.addEventListener("click", weightCalc);

    // let sub_button = document.getElementById("subbutton");
    // sub_button.addEventListener("click", weightCalc);


})
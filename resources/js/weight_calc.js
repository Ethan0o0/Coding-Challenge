import * as convert from "./conversions.js";

document.addEventListener("DOMContentLoaded", function() {

    function weightCalc() {

        const option1 = document.getElementById("option1");
        const option2 = document.getElementById("option2");
        const input1 = document.getElementById("input1");
        const input2 = document.getElementById("input2");
        const oput1 = document.getElementById("add_output");
        const oput2 = document.getElementById("sub_output");
        let add_val_1 = 0;
        let add_val_2 = 0;
        let sub_val_1 = 0;
        let sub_val_2 = 0;

        //turning inputs into numbers
        const value1 = parseFloat(input1.value);
        const value2 = parseFloat(input2.value);

        if (option1.value == "Pounds") {
            if (option2.value == "Kilograms") {
                add_val_1 = value1 + (convert.kg_to_lb(value2));
                add_val_2 = value2 + (convert.lbs_to_kg(value1));
                sub_val_1 = value1 - (convert.kg_to_lb(value2));
                sub_val_2 = value1 - (convert.lbs_to_kg(value1));

                oput1.innerHTML = "Addition Output: " + add_val_1 + "lbs or " + add_val_2 + "kgs";
                oput2.innerHTML = "Subtraction Output: " + sub_val_1 + "lbs or " + sub_val_2 + "kgs";
            }
        }
    }

    let add_button = document.getElementById("addbutton");
    add_button.addEventListener("click", weightCalc);

    // let sub_button = document.getElementById("subbutton");
    // sub_button.addEventListener("click", weightCalc);


})
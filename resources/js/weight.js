// import * as convert from "./conversions.js";


    async function setResponse(inputWeight, fromUnit, toUnit, outputWeight) {
        const response = await fetch("/api/convert", {method: "POST", body: JSON.stringify({"inputWeight": parseFloat(inputWeight), "fromUnit": String(fromUnit), "toUnit": String(toUnit)}),
        headers: {"Content-Type": "application/json"}});

        const data = await response.json();

        if (response.ok) {
            outputWeight.innerHTML = "Output: " + data.finalUnit;
        }
        else {
             outputWeight.innerHTML = "Error Occured";
        }
    }


    let initialChange = document.getElementById("set");
    initialChange.addEventListener("click", async function() {

        const inputWeight = document.getElementById("input").value;
        const fromUnit = document.getElementById("from").value;
        const toUnit = document.getElementById("to").value;
        const outputWeight = document.getElementById("output");

        try {
            await setResponse(inputWeight, fromUnit, toUnit, outputWeight);
        } catch(error) {
            outputWeight.innerText = 'An error occurred';
        }


    })
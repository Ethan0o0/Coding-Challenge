document.addEventListener("DOMContentLoaded", function() {

    function convertWeight() {

        // console.log("MADE IT TO CONVERTOR");
        const inputWeight = document.getElementById("input");
        const outputWeight = document.getElementsByClassName("label-3");
        const fromUnit = document.getElementById("from");
        const toUnit = document.getElementById("to");
        // console.log(inputWeight.value);

        if (fromUnit.value == "Pounds" && toUnit.value == "Kilograms" ) {
            // console.log(inputWeight);
            outputWeight.innerHTML = "Output: " + (inputWeight.value / 2.205).toFixed(4);
            // console.log(outputWeight.innerHTML);
        }

    }

    let initialChange = document.getElementsByClassName("set");
    initialChange.addEventListener("click", convertWeight);


})
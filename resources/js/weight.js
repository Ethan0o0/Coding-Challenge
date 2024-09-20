
    //a function used to send data to the server for conversions and data collecting
    async function setResponse(inputWeight, fromUnit, toUnit, outputWeight) {
        //used a post method to send a json full of units needed to convert
        const response = await fetch("/api/convert", {method: "POST", body: JSON.stringify({"inputWeight": parseFloat(inputWeight), "fromUnit": String(fromUnit), "toUnit": String(toUnit)}),
        headers: {"Content-Type": "application/json"}});

        //contains a json from the server that has the converted unit
        const data = await response.json();

        if (response.ok) {
            //updates the frontend to show the calculated data from the server
            outputWeight.innerHTML = "Output: " + data.finalUnit;
        }
        else {
            //an error statement incase the response is not a success
             outputWeight.innerHTML = "Error Occured";
        }
    }

    //setting an eventlistener for the button
    //This button triggers the data set in the input to be
    //sent to the backend so that we may convert units
    let initialChange = document.getElementById("set");
    initialChange.addEventListener("click", async function() {

        //initial data that we collect from the user
        const inputWeight = document.getElementById("input").value;
        const fromUnit = document.getElementById("from").value;
        const toUnit = document.getElementById("to").value;
        const outputWeight = document.getElementById("output");

        try {
            //using the intial inputs and throwing it in our function
            //that sends data to the backend
            await setResponse(inputWeight, fromUnit, toUnit, outputWeight);
        } catch(error) {
            outputWeight.innerText = 'An error occurred';
        }


    })
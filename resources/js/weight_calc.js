//This js file is connected directly to the weight_calc.pug


//gathering outputs directly to update later
const oput1 = document.getElementById("add_output");
const oput2 = document.getElementById("sub_output");


//A function to send data to the front end where we 
//do additions and subtractions of two different units
async function setResponse(option1, option2, input1, input2) {
    //Sending original input data to the backend
    const response = await fetch("/api/calcConvert", {method: "POST", body: JSON.stringify({"option1": String(option1), "option2": String(option2)
    ,"input1": parseFloat(input1), "input2": parseFloat(input2), "oput1": oput1, "oput2": oput2 }),
    headers: {"Content-Type": "application/json"}});

    const data = await response.json();
    //data contains the calculated outputs from the backend
    if (response.ok) {
        //updating the front end to put in the new values
        oput1.innerHTML = `Addition Output: ${data.add_val_1} ${data.unit1} or ${data.add_val_2} ${data.unit2}`;
        oput2.innerHTML = `Subtraction Output: ${data.sub_val_1} ${data.unit1} or ${data.sub_val_2} ${data.unit2}`;
    }
    else {
        oput1.innerHTML = "Error Occured";
        oput2.innerHTML = "";
    }
}

//Creating a eventlistener on a button so that we can
//trigger calculations
let add_button = document.getElementById("addbutton");
add_button.addEventListener("click", async function()  {

    //direct inputs from the frontend that we get from the user
    const option1 = document.getElementById("option1").value;
    const option2 = document.getElementById("option2").value;
    const input1 = document.getElementById("input1").value;
    const input2 = document.getElementById("input2").value;

    try {
        //calls our function so that we can send data to backend
        await setResponse(option1, option2, input1, input2);
    } catch(error) {
        //error handling
        console.log("Error");
        oput1.innerHTML = "Error Occured";
        oput2.innerHTML = "";
    }
});


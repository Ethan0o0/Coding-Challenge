function lbs_to_kg(pounds) {
    let final = (pounds / 2.205).toFixed(4);
    return parseFloat(final);
}

function lbs_to_o(pounds) {
    return parseFloat(pounds * 16);
}

function lbs_to_g(pounds) {
    let final = (pounds * 453.6).toFixed(2);
    return parseFloat(final);
}

function lbs_to_mg(pounds) {
    return parseFloat(pounds * 453600);
}

function kg_to_lb(kilos) {
    let final = (kilos *  2.205).toFixed(4);
    return parseFloat(final);
}

function kg_to_o(kilos) {
    let final = (kilos * 35.274).toFixed(4);
    return parseFloat(final);
}

function kg_to_mg(kilos) {
    return parseFloat(kilos * 1000000);
}

function kg_to_g(kilos) {
    return parseFloat(kilos * 1000);
}

function o_to_lbs(ounces) {
    let final = (ounces / 16).toFixed(1);
    return parseFloat(final);
}

function o_to_kg(ounces) {
    let final = (ounces / 35.274).toFixed(4);
    return parseFloat(final);
}

function o_to_mg(ounces) {
    return parseFloat(ounces * 28350);
}

function o_to_g(ounces) {
    let final = (ounces * 28.35).toFixed(4);
    return parseFloat(final);
}

function mg_to_lbs(mg) {
    let final = (mg / 453600).toFixed(6);
    return parseFloat(final);
}

function mg_to_kg(mg) {
    let final = (mg/1000000).toFixed(4);
    return parseFloat(final);
}

function mg_to_o(mg) {
    let final = (mg/28350).toFixed(4);
    return parseFloat(final);
}

function mg_to_g(mg) {
    return parseFloat(mg / 1000);
}

function g_to_lbs(g) {
    let final = (g / 453.6).toFixed(4);
    return parseFloat(final);
}

function g_to_kg(g) {
    return parseFloat(g / 1000);
}

function g_to_o(g) {
    let final = (g /  28.35).toFixed(4);
    return parseFloat(final);
}

function g_to_mg(g) {
    return parseFloat(g * 1000);
}

export function weightCalc(option1, option2, input1, input2) {

    const conversionRates = {
        "Pounds": {
            "Kilograms": { to: kg_to_lb, from: lbs_to_kg, unit1: "lbs", unit2: "kgs" },
            "Ounces": { to: o_to_lbs, from: lbs_to_o, unit1: "lbs", unit2: "ounces" },
            "Milligram": { to: mg_to_lbs, from: lbs_to_mg, unit1: "lbs", unit2: "mgs" },
            "Gram": { to: g_to_lbs, from: lbs_to_g, unit1: "lbs", unit2: "gs" }
        },
        "Kilograms": {
            "Pounds": { to: lbs_to_kg, from: kg_to_lb, unit1: "kgs", unit2: "lbs" },
            "Ounces": { to: o_to_kg, from: kg_to_o, unit1: "kgs", unit2: "ounces" },
            "Milligram": { to: mg_to_kg, from: kg_to_mg, unit1: "kgs", unit2: "mgs" },
            "Gram": { to: g_to_kg, from: kg_to_g, unit1: "kgs", unit2: "gs" }
        },
        "Ounces": {
            "Pounds": { to: lbs_to_o, from: o_to_lbs, unit1: "ounces", unit2: "lbs" },
            "Kilograms": { to: kg_to_o, from: o_to_kg, unit1: "ounces", unit2: "kilograms" },
            "Milligram": { to: mg_to_o, from: o_to_mg, unit1: "ounces", unit2: "mgs" },
            "Gram": { to: g_to_o, from: o_to_g, unit1: "ounces", unit2: "gs" }
        },
        "Milligram": {
            "Pounds": { to: lbs_to_mg, from: mg_to_lbs, unit1: "mgs", unit2: "lbs" },
            "Kilograms": { to: kg_to_mg, from: mg_to_kg, unit1: "mgs", unit2: "kilograms" },
            "Ounces": { to: o_to_mg, from: mg_to_o, unit1: "mgs", unit2: "mgs" },
            "Gram": { to: g_to_mg, from: mg_to_g, unit1: "mgs", unit2: "gs" }
        },
        "Gram": {
            "Pounds": { to: lbs_to_g, from: g_to_lbs, unit1: "gs", unit2: "lbs" },
            "Kilograms": { to: kg_to_g, from: g_to_kg, unit1: "gs", unit2: "kilograms" },
            "Ounces": { to: o_to_g, from: g_to_o, unit1: "gs", unit2: "mgs" },
            "Milligram": { to: mg_to_g, from: g_to_mg, unit1: "gs", unit2: "gs" }
        },
    };

    if (conversionRates[option1] && conversionRates[option1][option2]) {
        const { to, from, unit1, unit2 } = conversionRates[option1][option2];
        const add_val_1 = input1 + to(input2);
        const add_val_2 = input2 + from(input1);
        const sub_val_1 = input1 - to(input2);
        const sub_val_2 = input2 - from(input1);

        const final = {"add_val_1": add_val_1, "add_val_2": add_val_2, "sub_val_1": sub_val_1, "sub_val_2": sub_val_2, "unit1": unit1, "unit2": unit2};
        return final;
    } else {
        return "Conversion not supported";
    }

}


export function convertWeight(inputWeight, fromUnit, toUnit) {

    const conversionRates = {
        "Pounds": {
            "Kilograms": { to: lbs_to_kg },
            "Ounces": { to: lbs_to_o },
            "Milligram": { to: lbs_to_mg },
            "Gram": { to: lbs_to_g }
        },
        "Kilograms": {
            "Pounds": { to: kg_to_lb },
            "Ounces": { to: kg_to_o },
            "Milligram": { to: kg_to_mg },
            "Gram": { to: kg_to_g }
        },
        "Ounces": {
            "Pounds": { to: o_to_lbs },
            "Kilograms": { to: o_to_kg },
            "Milligram": { to: o_to_mg },
            "Gram": { to: o_to_g }
        },
        "Milligram": {
            "Pounds": { to: mg_to_lbs },
            "Kilograms": { to: mg_to_kg },
            "Ounces": { to: mg_to_o },
            "Gram": { to: mg_to_g }
        },
        "Gram": {
            "Pounds": { to: g_to_lbs },
            "Kilograms": { to: g_to_kg },
            "Milligram": { to: g_to_mg },
            "Ounces": { to: g_to_o }
        }
    }

    if (conversionRates[fromUnit] && conversionRates[fromUnit][toUnit]) {
        const { to } = conversionRates[fromUnit][toUnit];
        return to(inputWeight);
    }
    else {
        return 0;
    }


}
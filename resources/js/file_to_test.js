//A file used for my unit test file
//This file was exported to my test file not using modules as 
//it was not compatible

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
    let final = (ounces / 16).toFixed(4);
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
    let final = (mg/1000000).toFixed(6);
    return parseFloat(final);
}

function mg_to_o(mg) {
    let final = (mg/28350).toFixed(5);
    return parseFloat(final);
}

function mg_to_g(mg) {
    return parseFloat(parseFloat(mg / 1000).toFixed(3));
}

function g_to_lbs(g) {
    let final = (g / 453.6).toFixed(4);
    return parseFloat(final);
}

function g_to_kg(g) {
    return parseFloat(parseFloat(g / 1000).toFixed(3));
}

function g_to_o(g) {
    let final = (g /  28.35).toFixed(4);
    return parseFloat(final);
}

function g_to_mg(g) {
    return parseFloat(g * 1000);
}

module.exports = {lbs_to_o, lbs_to_g, lbs_to_kg, lbs_to_mg, kg_to_lb, kg_to_o, kg_to_mg, kg_to_g, o_to_lbs, o_to_kg, o_to_mg, o_to_g, 
    mg_to_lbs, mg_to_kg, mg_to_o, mg_to_g, g_to_lbs, g_to_kg, g_to_o, g_to_mg };
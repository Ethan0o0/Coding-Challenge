function lbs_to_kg(pounds) {
    let final = (pounds / 2.205).toFixed(4);
    return final;
}

function lbs_to_o(pounds) {
    return pounds * 16;
}

function lbs_to_g(pounds) {
    let final = (pounds * 453.6).toFixed(2);
    return final;
}

function lbs_to_mg(pounds) {
    return pounds * 453600;
}

function kg_to_lb(kilos) {
    let final = (kilos *  2.205).toFixed(4);
    return final;
}

function kg_to_o(kilos) {
    let final = (kilos * 35.274).toFixed(4);
    return final;
}

function kg_to_mg(kilos) {
    return kilos * 1000000;
}
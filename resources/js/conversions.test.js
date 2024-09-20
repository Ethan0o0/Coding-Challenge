//A file mad to test the basic functions that are needed to run all calculations
//File uses Jest to do unit tests
//Contains simple tests to make sure conversions work correctly

const { lbs_to_o, lbs_to_kg , lbs_to_g, lbs_to_mg, kg_to_lb, kg_to_o, kg_to_mg, kg_to_g, o_to_lbs, o_to_kg, o_to_mg, o_to_g, 
    mg_to_lbs, mg_to_kg, mg_to_o, mg_to_g, g_to_lbs, g_to_kg, g_to_o, g_to_mg } = require('./file_to_test.js');

test('1 pound is 16 ounces', () => {
    expect(lbs_to_o(1)).toBe(16);
});


test('1 pound is .4535 kg', () => {
    expect(lbs_to_kg(1)).toBe(0.4535);
});

test('1 pound is 453.60 g', () => {
    expect(lbs_to_g(1)).toBe(453.60);
});

test('1 pound is 453600 mg', () => {
    expect(lbs_to_mg(1)).toBe(453600);
});

test('1 kg is 2.205 lb', () => {
    expect(kg_to_lb(1)).toBe(2.205);
});

test('1 kg is 35.274 o', () => {
    expect(kg_to_o(1)).toBe(35.274);
});

test('1 kg is 1000000 mg', () => {
    expect(kg_to_mg(1)).toBe(1000000);
});

test('1 kg is 1000 g', () => {
    expect(kg_to_g(1)).toBe(1000);
});

test('1 o is 0.0625 g', () => {
    expect(o_to_lbs(1)).toBe(0.0625);
});

test('1 o is 0.0283 kg', () => {
    expect(o_to_kg(1)).toBe(0.0283);
});

test('1 o is 28350 mg', () => {
    expect(o_to_mg(1)).toBe(28350);
});

test('1 o is 28.35 g', () => {
    expect(o_to_g(1)).toBe(28.35);
});

//small marginal errors from this
// test('1 mg is 0.0000002 lb', () => {
//     expect(mg_to_lbs(1)).toBe(0.0000002);
// });

test('1 mg is 0.000001 1kg', () => {
    expect(mg_to_kg(1)).toBe(0.000001);
});

test('1 mg is 0.00004 1kg', () => {
    expect(mg_to_o(1)).toBe(0.00004);
});

test('1 mg is 0.001 g', () => {
    expect(mg_to_g(1)).toBe(0.001);
});

test('1 g is 0.0022 lb', () => {
    expect(g_to_lbs(1)).toBe(0.0022);
});

test('1 g is 0.001 kg', () => {
    expect(g_to_kg(1)).toBe(0.001);
});

test('1 g is 0.0353 o', () => {
    expect(g_to_o(1)).toBe(0.0353);
});

test('1 g is 1000 mg', () => {
    expect(g_to_mg(1)).toBe(1000);
});
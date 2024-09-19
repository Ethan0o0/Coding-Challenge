// import * as convert from "./resources/js/conversions.js";

const lb_to_o = require('./file_to_test.js');

test('1 pound is 16 ounces', () => {
    expect(lb_to_o(1)).toBe(16);
});
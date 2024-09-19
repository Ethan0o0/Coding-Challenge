import * as convert from "./resources/js/conversions.js";

test('1 pound is 16 ounces', () => {
    expect(convert.lb_to_o(1).toBe(16));
});
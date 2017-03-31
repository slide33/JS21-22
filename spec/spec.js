var app = require('../js/script.js');

describe("Калькулятор", function() {
   it("Возведение в степень", function() {
       var result;
       result = app.pow(2, 2);
       return expect(result).toBe(4);
   });
   it("Возведение в отрицательную степень", function() {
     var result;
     result = app.pow(3,-3);
     return expect(result).toEqual(0.3333333333333333);
   });
});

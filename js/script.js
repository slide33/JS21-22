var calc = {
    pow: function(x, n) {
        var result = 1;
        if (n < 0) {
            for (var i = 0; i < Math.abs(n); i++) {
                result = 1 / (result * x);
            }
        } else {
            for (var i = 0; i < n; i++) {
                result = result * x;
            }
        }
        return result;
    }

};

module.exports = calc;

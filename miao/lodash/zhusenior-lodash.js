var zhusenior = {
    chunk: function(array, [size = 1]) {
        if (!array) return null;
    },

    compact: function(array) {
        if (!array) return [];
        var res = [];
        for (var ary of array) {
            if (ary) {
                res.push(ary);
            }
        }
        return res;
    },

    difference: function(array, ...values) {
        if (array == []) return [];
        var res = [];
        var value = [];
        for (var i = 0; i < values.length; i++) {
            value.push(...values[i]);
        }
        for (var ary of array) {
            var flag = true;
            for (var val of value) {
                if (ary == val) {
                    flag = false;
                }
            }
            if (flag) {
                res.push(ary);
            }
        }
        return res;
    },

    drop: function(array, n = 1) {
        if (n == 0) return array;

        var res = [];
        for (var i = n; i < array.length; i++) {
            res.push(array[i]);
        }
        return res;
    },

    dropRight: function(array, n = 1) {
        if (!array) return [];

        if (n > array.length + 1) return [];
        if (n == 0) return array;
        var res = [];
        for (var i = 0; i < array.length - n; i++) {
            res.push(array[i]);
        }
        return res;
    },
    fill: function(array, value, start = 0, end = array.length) {
        var res = [];
        for (var i = 0; i < start; i++) {
            res.push(array[i]);
        }
        for (var i = start; i < end; i++) {
            res.push(value);
        }
        for (var i = end; i < array.length; i++) {
            res.push(array[i]);
        }
        return res;
    },
    flatten: function(arr) {
        var res = [];
        for (var item of arr) {
            if (Array.isArray(item)) {
                res.push(...item);
            } else {
                res.push(item);
            }
        }
        return res;
    },

    dropWhile: function() {

    }

}
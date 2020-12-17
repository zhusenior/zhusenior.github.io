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
    flattenDeep: function(array) {
        let res = [];

        function deep(array) {
            for (let i = 0; i < array.length; i++) {
                if (Array.isArray(array[i])) {
                    deep(array[i]);
                } else {
                    res.push(array[i]);
                }
            }
        }
        deep(array);
        return res;
    },
    fromPairs: function(paris) {
        var obj = {};
        for (var key of paris) {
            obj[key[0]] = key[1];
        }
        return obj;
    },
    head: function(array) {
        return array[0];
    },
    indexOf: function(array, value, fromIndex = 0) {
        if (fromIndex < 0) {
            for (let i = array.length; i > 0; i--) {
                if (array[i] == value) {
                    return i;
                }
            }
        } else {
            for (let i = fromIndex; i < array.length; i++) {
                if (array[i] == value) {
                    return i;
                }
            }
        }
    },
    initial: function(array) {
        return array.slice(0, array.length - 1);
    },
    intersection: function intersection(...arrs) {
        var res = arrs[0];
        for (var i = 0; i < arrs.length; i++) {
            res = res.filter((val) => arrs[i].includes(val));
        }
        return res;
    },
    join: function(array, separator = ",") {
        var res = "";
        for (let i = 0; i < array.length; i++) {
            if (i == array.length - 1) {
                res += array[i];
            } else {
                res += array[i] + "" + separator;
            }
        }
        return res;
    },
    last: function(array) {
        return array[array.length - 1];
    },
    lastIndexOf: function(array, value, fromIndex = array.length - 1) {
        if (fromIndex < 0 || fromIndex >= array.length) {
            return -1;
        }
        for (let i = fromIndex; i > 0; i--) {
            if (array[i] == value) {
                return i;
            }
        }
    },
    nth: function(array, n = 0) {
        if (n < 0) {
            n = array.length + n;
        }
        return array[n];
    },


    dropWhile: function() {

    }

}
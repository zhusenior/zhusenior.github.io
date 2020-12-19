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
        while (fromIndex < 0) {
            fromIndex = array.length + fromIndex;
        }

        for (let i = fromIndex; i < array.length; i++) {
            if (array[i] == value) {
                return i;
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
    pull: function(array, ...values) {
        var result = [];
        array.forEach((element) => {
            var flag = 1;
            values.forEach((val) => {
                if (val == element) {
                    flag = 0;
                }
            });
            if (flag) {
                result.push(element);
            }
        });
        return result;
    },
    reverse: function(array) {
        var stack = [];
        array.forEach((element) => {
            stack.unshift(element);
        });
        return stack;
    },
    sortedIndex: function(array, value) {
        value = value.toString(2);
        console.log(value);
        for (let i = 0; i < array.length; i++) {
            console.log(array[i].toString(2));
            if (value <= array[i].toString(2)) {
                return i + 1;
            }
        }
        return array.length;
    },
    union: function(...arrays) {
        var result = [];
        arrays.forEach((elements) => {
            elements.forEach((element) => {
                if (result.includes(element) == false) {
                    result.push(element);
                }
            });
        });
        return result;
    },
    uniq: function(array) {
        var result = [];
        array.forEach((element) => {
            if (result.includes(element) == false) {
                result.push(element);
            }
        });
        return result;
    },
    without: function(array, ...values) {
        var result = [];
        array.forEach((element) => {
            if (values.includes(element) == false) {
                result.push(element);
            }
        });
        return result;
    },
    xor: function(...arrays) {
        var map = {};
        var result = [];
        arrays.forEach((array) => {
            array.forEach((ary) => {
                if (ary in map) {
                    map[ary]++;
                } else {
                    map[ary] = 1;
                }
            });
        });
        for (var key in map) {
            if (map[key] == 1) {
                result.push(Number(key));
            }
        }
        return result;
    },
    zip: function(...arrays) {
        var res = [];
        for (let i = 0; i < arrays[0].length; i++) {
            var mid = [];
            for (let j = 0; j < arrays.length; j++) {
                mid.push(arrays[j][i]);
            }
            res.push(mid);
        }
        return res;
    },


    dropWhile: function() {

    }

}
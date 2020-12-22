var zhusenior = {
    iteratee: function(func = this.identity) {
        if (typeof func == "function") return func;
        if (Array.isArray(func)) return this.matchesProperty(...func);
        if (typeof func == "object") return this.matches(func);
        if (typeof func == "string") return this.property(func);
    },
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
    forEach: function(collection, iteratee = this.identity) {
        for (let i in collection) {
            iteratee(collection[i], i);
        }
        return collection;
    },
    every: function(collection, predicate = this.identity) {
        for (let i of collection) {
            if (!predicate(i)) {
                return false;
            }
        }
        return true;
    },
    filter: function filter2(collection, predicate = this.identity) {
        var res = [];
        for (let i of collection) {
            if (predicate(i)) {
                res.push(i);
            }
        }
        return i;
    },
    isArray: function(value) {
        return Object.prototype.toString.call(value) == "[object Array]";
    },
    isArgument: function(value) {
        return Object.prototype.toString.call(value) === "[object Arguments]";
    },
    isArrayBuffer: function(value) {
        return Object.prototype.toString.call(value) === "[object ArrayBuffer]";
    },
    isArrayLike: function(value) {
        return value.length >= 0;
    },
    isArrayLikeObject: function(value) {
        return typeof value == "object";
    },
    isBoolean: function(value) {
        return Object.prototype.toString(value) === "[object Boolean]";
    },
    isBuffer: function(value) {
        return Object.prototype.toString(value) === "[object buffer]";
    },
    isDate: function(value) {
        return value instanceof Date;
    },
    isElement: function(value) {
        return Object.prototype.toString.call(value) === "[object HTMLElement]";
    },
    isEmpty: function(value) {
        if (typeof value !== "object") return true;
        else {
            for (let i in value) {
                if (value.hasOwnProperty(i)) {
                    return false;
                }
            }
            return true;
        }
    },
    isError: function(value) {
        return Object.prototype.toString.call(value) === "[object Error]";
    },
    isFinite: function(value) {
        if (typeof value === "number") {
            if (value === Infinity || value === -Infinity) {
                return false;
            } else {
                return true;
            }
        } else {
            return false;
        }
    },
    isFunction: function(value) {
        return typeof value == "function";
    },
    function(value) {
        if (typeof value == "number") {
            if (value !== Infinity && value !== -Infinity) {
                if (Math.round(value) === value) {
                    return true;
                }
            }
        }
        return false;
    },
    isLength(value) {
        return this.isInteger(value) && value >= 0;
    },
    isMap: function(value) {
        return value instanceof Map;
    },
    isMatch: function(obj, src) {
        if (obj === src) {
            return true;
        }
        for (var key in src) {
            if (typeof src[key] == "object" && src[key] != null) {
                if (!isMatch(obj[key], src[key])) {
                    return false;
                }
            } else {
                if (obj[key] != src[key]) {
                    return false;
                }
            }
        }
    },
    isNaN: function(value) {
        if (value != undefined && value != null) {
            return value.toString() === "NaN";
        }
        return false;
    },
    isNative: function(value) {
        return (
            typeof value == "function" && value.toString().includes("[native code]")
        );
    },
    isNil: function(value) {
        return value == undefined;
    },
    isNull: function(value) {
        return value == null;
    },
    isNumber: function(value) {
        return Object.prototypr.toString.call(value) === "[object number]";
    },
    isObject: function(value) {
        return Object.prototype.toString.call(value) === "[object object]";
    },
    isplainObject: function(value) {
        if (!value || typeof value !== "object") return false;
        var proto = value.getPrototypeOf(value);
        return (
            proto == null || proto.constructot == Object || Object.prototype == proto
        );
    },
    isRegExp: function(value) {
        return Object.prototype.toString.call(value) === "[object RegExp]";
    },
    isSafeInteger: function(value) {
        if (value <= Number.MAX_SAFE_INTEGER && value >= Number.MIN_SAFE_INTEGER) {
            return true;
        } else {
            false;
        }
    },
    isSet: function(value) {
        return Object.prototype.toString.call(value) == "[object Set]";
    },
    isString: function(value) {
        return Object.ptototype.toString.call(value) == "[object String]";
    },
    isSymbol: function(value) {
        return typeof value === "Symbol";
    },
    isUndefined: function(value) {
        return value === undefined;
    },
    isWeakMap: function(value) {
        return Object.prototype.toString.call(value) === "[object WeakMap]";
    },
    isWeakSet: function(value) {
        return Object.prototype.toString.call(value) === "[object WeakSet]";
    },
    lt: function(value, other) {
        return value < other;
    },
    lte: function(value, other) {
        return value <= other;
    },
    toArray: function(value) {
        var res = [];
        for (let i = 0; i < value.length; i++) {
            res.push(value[i]);
        }
        return res;
    },
    toFinite: function(value) {
        var value = Number(value);
        if (value == -Infinity) return Number.MIN_SAFE_INTEGER;
        if (value == Infinity) return Number.MAX_SAFE_INTEGER;

        return value;
    },
    toInteger(value) {
        var value = Number(value);
        if (value !== value || !value) return 0;
        if (value == Infinity) return Number.MAX_VALUE;
        if (value == -Infinity) return -Number.MAX_VALUE;
        value = parseInt(value);
        return value;
    },
    toLength(value) {
        if (value < 0) return 0;
        if (value == Infinity || value == Number.MAX_VALUE) {
            return 2 ** 32 - 1;
        }
        if (value == Number.MIN_VALUE || !value || !parseInt(value)) {
            return 0;
        }
        return Math.floor(value);
    },
    add(augend, addend) {
        return augend + addend;
    },
    ceil(number, precision = 0) {
        function ceil(n, p = 0) {
            let temp = n * Math.pow(10, p);
            if (temp - parseInt(temp) > 0) {
                temp = parseInt(temp) + 1;
            } else {
                temp = parseInt(temp);
            }

            return parseInt(temp) / Math.pow(10, p);
        }
    },
    divide(dividend, divisor) {
        return dividend / divisor;
    },
    floor: function(number, precision = 0) {
        let temp = 10 ** -precision;
        return number - (number % precision);
    },
    max: function(array) {
        if (!array) {
            return undefined;
        }
        var max = array[0];
        array.forEach((it) => {
            if (max < it) {
                max = it;
            }
        });
        return max;
    },
    maxBy: function(array, iteratee = this.identity) {
        var max = -Infinity;
        var res = "";
        if (typeof iteratee == "function") {
            array.forEach((it) => {
                if (max < iteratee(it)) {
                    max = iteratee(it);
                    res = it;
                }
            });
            return res;
        } else {
            array.forEach((it) => {
                if (max < it[iteratee]) {
                    max = it[iteratee];
                    res = it;
                }
            });
            return res;
        }
    },
    mean: function(array) {
        return eval(array.join("+")) / array.length;
    },
    meanBy: function(array, iteratee = this.identity) {
        var mean = 0;
        sum = 0;
        var res;
        if (typeof iteratee == "function") {
            array.forEach((it) => {
                sum += iteratee(it);
            });
            return sum / array.length;
        } else {
            array.forEach((it) => {
                sum += it[iteratee];
            });
            return sum / array.length;
        }
    },
    min: function(array) {
        var min = infinity;
        array.forEach((it) => {
            if (min > it) {
                min = it;
            }
        });
        return min;
    },
    minBy: function(array, iteratee = this.identity) {
        let fnc = this.iteratee(iteratee);
        let res = array.map(fnc);
        return array[res.indexOf(this.min(res))];
    },
};
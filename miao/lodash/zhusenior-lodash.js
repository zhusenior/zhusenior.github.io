var zhusenior = {
  iteratee: function (func = this.identity) {
    if (typeof func == "function") return func;
    if (Array.isArray(func)) return this.matchesProperty(...func);
    if (typeof func == "object") return this.matches(func);
    if (typeof func == "string") return this.property(func);
  },
  matches: function (source) {
    return function (obj) {
      for (let i in source) {
        if (source[i] !== obj[i]) return false;
      }
      return true;
    };
  },

  matchesProperty: function (path, srcValue) {
    return function (obj) {
      if (obj[path] === srcValue) return true;
      else return false;
    };
  },

  property: function (path) {
    return function (obj) {
      return obj[path];
    };
  },
  chunk: function (array, [size = 1]) {
    if (!array) return null;
  },

  compact: function (array) {
    if (!array) return [];
    var res = [];
    for (var ary of array) {
      if (ary) {
        res.push(ary);
      }
    }
    return res;
  },

  difference: function (array, ...values) {
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

  drop: function (array, n = 1) {
    if (n == 0) return array;

    var res = [];
    for (var i = n; i < array.length; i++) {
      res.push(array[i]);
    }
    return res;
  },

  dropRight: function (array, n = 1) {
    if (!array) return [];

    if (n > array.length + 1) return [];
    if (n == 0) return array;
    var res = [];
    for (var i = 0; i < array.length - n; i++) {
      res.push(array[i]);
    }
    return res;
  },
  fill: function (array, value, start = 0, end = array.length) {
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
  flatten: function (arr) {
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
  flattenDeep: function (array) {
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
  fromPairs: function (paris) {
    var obj = {};
    for (var key of paris) {
      obj[key[0]] = key[1];
    }
    return obj;
  },
  head: function (array) {
    return array[0];
  },
  indexOf: function (array, value, fromIndex = 0) {
    while (fromIndex < 0) {
      fromIndex = array.length + fromIndex;
    }

    for (let i = fromIndex; i < array.length; i++) {
      if (array[i] == value) {
        return i;
      }
    }
  },

  initial: function (array) {
    return array.slice(0, array.length - 1);
  },
  intersection: function intersection(...arrs) {
    var res = arrs[0];
    for (var i = 0; i < arrs.length; i++) {
      res = res.filter((val) => arrs[i].includes(val));
    }
    return res;
  },
  join: function (array, separator = ",") {
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
  last: function (array) {
    return array[array.length - 1];
  },
  lastIndexOf: function (array, value, fromIndex = array.length - 1) {
    if (fromIndex < 0 || fromIndex >= array.length) {
      return -1;
    }
    for (let i = fromIndex; i > 0; i--) {
      if (array[i] == value) {
        return i;
      }
    }
  },
  nth: function (array, n = 0) {
    if (n < 0) {
      n = array.length + n;
    }
    return array[n];
  },
  pull: function (array, ...values) {
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
  reverse: function (array) {
    var stack = [];
    array.forEach((element) => {
      stack.unshift(element);
    });
    return stack;
  },
  sortedIndex: function (array, value) {
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
  union: function (...arrays) {
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
  uniq: function (array) {
    var result = [];
    array.forEach((element) => {
      if (result.includes(element) == false) {
        result.push(element);
      }
    });
    return result;
  },
  without: function (array, ...values) {
    var result = [];
    array.forEach((element) => {
      if (values.includes(element) == false) {
        result.push(element);
      }
    });
    return result;
  },
  xor: function (...arrays) {
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
  zip: function (...arrays) {
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
  forEach: function (collection, iteratee = this.identity) {
    for (let i in collection) {
      iteratee(collection[i], i);
    }
    return collection;
  },
  every: function (collection, predicate = this.identity) {
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
  isArray: function (value) {
    return Object.prototype.toString.call(value) == "[object Array]";
  },
  isArgument: function (value) {
    return Object.prototype.toString.call(value) === "[object Arguments]";
  },
  isArrayBuffer: function (value) {
    return Object.prototype.toString.call(value) === "[object ArrayBuffer]";
  },
  isArrayLike: function (value) {
    return value.length >= 0;
  },
  isArrayLikeObject: function (value) {
    return typeof value == "object";
  },
  isBoolean: function (value) {
    return Object.prototype.toString(value) === "[object Boolean]";
  },
  isBuffer: function (value) {
    return Object.prototype.toString(value) === "[object buffer]";
  },
  isDate: function (value) {
    return value instanceof Date;
  },
  isElement: function (value) {
    return Object.prototype.toString.call(value) === "[object HTMLElement]";
  },
  isEmpty: function (value) {
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
  isError: function (value) {
    return Object.prototype.toString.call(value) === "[object Error]";
  },
  isFinite: function (value) {
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
  isFunction: function (value) {
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
  isMap: function (value) {
    return value instanceof Map;
  },
  isMatch: function (obj, src) {
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
  isNaN: function (value) {
    if (value != undefined && value != null) {
      return value.toString() === "NaN";
    }
    return false;
  },
  isNative: function (value) {
    return (
      typeof value == "function" && value.toString().includes("[native code]")
    );
  },
  isNil: function (value) {
    return value == undefined;
  },
  isNull: function (value) {
    return value == null;
  },
  isNumber: function (value) {
    return Object.prototypr.toString.call(value) === "[object number]";
  },
  isObject: function (value) {
    return Object.prototype.toString.call(value) === "[object object]";
  },
  isplainObject: function (value) {
    if (!value || typeof value !== "object") return false;
    var proto = value.getPrototypeOf(value);
    return (
      proto == null || proto.constructot == Object || Object.prototype == proto
    );
  },
  isRegExp: function (value) {
    return Object.prototype.toString.call(value) === "[object RegExp]";
  },
  isSafeInteger: function (value) {
    if (value <= Number.MAX_SAFE_INTEGER && value >= Number.MIN_SAFE_INTEGER) {
      return true;
    } else {
      false;
    }
  },
  isSet: function (value) {
    return Object.prototype.toString.call(value) == "[object Set]";
  },
  isString: function (value) {
    return Object.ptototype.toString.call(value) == "[object String]";
  },
  isSymbol: function (value) {
    return typeof value === "Symbol";
  },
  isUndefined: function (value) {
    return value === undefined;
  },
  isWeakMap: function (value) {
    return Object.prototype.toString.call(value) === "[object WeakMap]";
  },
  isWeakSet: function (value) {
    return Object.prototype.toString.call(value) === "[object WeakSet]";
  },
  lt: function (value, other) {
    return value < other;
  },
  lte: function (value, other) {
    return value <= other;
  },
  toArray: function (value) {
    var res = [];
    for (let i = 0; i < value.length; i++) {
      res.push(value[i]);
    }
    return res;
  },
  toFinite: function (value) {
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
  floor: function (number, precision = 0) {
    let temp = 10 ** -precision;
    return number - (number % precision);
  },
  max: function (array) {
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
  maxBy: function (array, iteratee = this.identity) {
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
  mean: function (array) {
    return eval(array.join("+")) / array.length;
  },
  meanBy: function (array, iteratee = this.identity) {
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
  min: function (array) {
    var min = infinity;
    array.forEach((it) => {
      if (min > it) {
        min = it;
      }
    });
    return min;
  },
  minBy: function (array, iteratee = this.identity) {
    let fnc = this.iteratee(iteratee);
    let res = array.map(fnc);
    return array[res.indexOf(this.min(res))];
  },
  multiply: function (multiplier, multiplicand) {
    return multiplier * multiplicand;
  },
  subtract: function (minuend, subtranhend) {
    return minued - subtranhend;
  },
  sum: function (array) {
    return eval(array.join("+"));
  },
  sumBy: function (array, iteratee = this.identity) {
    var fnc = this.iteratee(iteratee);
    var sum = 0;
    for (let i = 0; i < array.length; i++) {
      sum += fnc(array[i]);
    }
    return sum;
  },
  clamp: function (number, lower, upper) {
    if (number < lower) return lower;
    if (number > upper) return upper;
    return number;
  },
  inRange: function (number, start = 0, end = 0) {
    if (start >= end) {
      end = end - start;
      start = end + start;
      end = start - end;
    }
    if (number >= start && number < end) {
      return true;
    } else {
      return false;
    }
  },
  assignIn: function (object, ...sources) {
    for (source of sources) {
      for (key in source) {
        object[key] = source[key];
      }
    }
    return object;
  },
  defaults: function (object, ...sources) {
    for (var source of sources) {
      for (var key in source) {
        if (!(key in object)) {
          object[key] = source[key];
        }
      }
    }
    return object;
  },
  defaultsDeep: function (object, sources) {
    for (var i in object) {
      for (var j in sources) {
        if (i == j && typeof object[i] == "object") {
          this.defaultsDeep(object[i], sources[j]);
        } else {
          this.defaults(object, sources);
        }
      }
    }
    return object;
  },

  findKey: function (object, predicate = this.identity) {
    var fnc = this.iteratee(predicate);

    for (var key in object) {
      if (fnc(object[key])) {
        return key;
      }
    }
  },
  findLastKey: function (object, predicate = this.identity) {
    var fnc = this.iteratee(predicate);
    var keys = Object.keys(object);
    for (var i = keys.length - 1; i >= 0; i--) {
      if (fnc(object[keys[i]])) {
        return keys[i];
      }
    }
  },
  forIn: function (object, iteratee = this.identify) {
    for (key in object) {
      iteratee(object[key], key, object);
    }
    return object;
  },
  forInright: function (object, iteratee = this.identity) {
    var keys = Object.keys(object);
    for (var i = keys.length; i >= 0; i++) {
      iteratee(object[keys(i)], keys[i], object);
    }
    return object;
  },
  forOwn: function (object, iteratee = this.identify) {
    var keys = Object.keys(object);
    for (var i = 0; i <= keys.length - 1; i++) {
      iteratee(object[keys[i]], keys[i], object);
    }
    return object;
  },
  forOwnRight: function (object, iteratee = this.identity) {
    var keys = Object.keys(object);
    for (var i = keys.length - 1; i >= 0; i--) {
      iteratee(object[keys[i]], keys[i], object);
    }
    return object;
  },
  functions: function (object) {
    return Object.keys(object);
  },
  functionsIn: function (object) {
    var res = [];
    for (var key in object) {
      res.push(key);
    }
    return res;
  },
  get: function (object, path, defaultValue) {
    if (typeof path == "string") {
      var temp = "";
      for (var i of path) {
        if (i === "[" || i === ".") {
          temp += ",";
        } else if (i === "]") {
          continue;
        } else {
          temp += i;
        }
      }
      temp = temp.split(",");
    }
    if (typeof path === "object") {
      temp = path;
    }
    var value = object;
    for (i of temp) {
      if (value[i] !== undefined) {
        value = value[i];
      } else {
        return defaultValue;
      }
    }
    return value;
  },

  has: function (object, path) {
    var hasown = Object.prototype.hasOwnProperty;
    if (typeof path === "string") {
      path = path.split(".");
    }

    for (var i = 0; i < path.length; i++) {
      if (!hasown.call(object, path[i])) {
        return false;
      }
      object = object[path[i]];
    }
    return true;
  },
  hasIn: function (object, path) {
    var a = object;
    if (typeof path == "string") {
      path = path.split(".");
    }

    for (var i = 0; i < path.length; i++) {
      if (!(path[i] in a)) {
        return false;
      }
      a = a[path[i]];
    }

    return true;
  },
  invert: function (object) {
    var entries = Object.entries(object);
    var res = {};
    entries.forEach((it) => {
      res[it[1]] = it[0];
    });
    return res;
  },
  invertBy: function (object, iteratee = this.identity) {
    var iteratee = this.iteratee(this.identity);
    var entries = Object.entries(object);
    var res = {};

    entries.forEach((entry) => {
      let k = iteratee(entry[1]);
      if (Object.prototype.hasOwnProperty.call(this.res, k)) {
        res[k].push(entry[0]);
      } else {
        res[k] = entry[0];
      }
    });
    return res;
  },
  keys: function (object) {
    let res = [];
    for (let i in object) {
      if (object.hasOwnProperty(i)) {
        res.push(i);
      }
    }
  },
  keysIn: function (object) {
    var res = [];
    for (var key in object) {
      res.push(key);
    }
    return res;
  },
  mapkeys: function (object, iteratee = this.identify) {
    var res = {};
    for (var key in object) {
      var value = object[key];
      res[iteratee(value, key, object)] = value;
    }
    return res;
  },
  mapValues: function (object, iteratee = this.identify) {
    var iterator = this.iteratee(iteratee);
    var res = {};
    for (var key in object) {
      var value = object[key];
      res[key] = iterator(value, key, object);
    }
    return res;
  },
  merge: function (object, ...sources) {
    sources.forEach((src) => {
      for (const key in src) {
        if (!(key in object)) {
          object[key] = src[key];
        } else if (
          key in object &&
          typeof src[key] === "object" &&
          typeof object[key] === "object" &&
          src[key] !== null &&
          object[key] !== null
        ) {
          this.merge(object[key], src[key]);
        }
      }
    });
    return object;
  },
  omit: function (object, ...props) {
    var props = props.flat();
    for (var prop of props) {
      delete object[prop];
    }

    return object;
  },
  omitBy: function (object, predicate = this.identify) {
    var res = {};
    for (var key in object) {
      if (!predicate(object[key], key)) {
        res[key] = object[key];
      }
    }
    return res;
  },
  pick: function (object, ...props) {
    var props = props.flat();
    var res = {};
    for (var key of props) {
      res[key] = object[key];
    }
    return res;
  },
  pickBy: function (object, predicate = this.identify) {
    var res = {};
    for (var key in object) {
      if (predicate(object[key], key)) {
        res[key] = object[key];
      }
    }
    return res;
  },
  result: function (object, path, defaultValue) {
    var val = this.get(object, path);
    if (typeof val == "function") {
      return val();
    } else if (val == undefined) {
      if (typeof defaultValue === "function") {
        return defaultValue();
      } else {
        return defaultValue;
      }
    } else {
      return val;
    }
  },
  set: function (object = {}, path, value) {
    if (typeof path == "string") {
      path = path.split(/\[|\]\.|\]\[|\.|\]/);
    }
    var pre = object;
    var ary = [];
    for (var i = 0; i < path.length; i++) {
      if (path[i] !== "") {
        ary.push(path[i]);
      }
    }
    path = ary;
    for (var i = 0; i < path.length - 1; i++) {
      if (!pre[path[i]]) {
        if (+path[i + 1] >= 0) {
          pre[path[i]] = [];
        } else {
          pre[path[i]] = {};
        }
      }
      pre = pre[path[i]];
    }
    pre[path[i]] = value;
    return object;
  },
  setWith: function (obiect, path, value, customizer) {
    if (customizer == undefined || customizer() == undefined) {
      return this.set(obiect, path, value);
    }
    if (typeof path == "string") {
      path = path.split(/\[|\]\.|\]\[|\.|\]/);
    }
    var pre = obiect;
    var ary = [];
    for (var i = 0; i < path.length; i++) {
      if (path[i] !== "") {
        ary.push(path[i]);
      }
    }
    path = ary;
    var i = 0;
    for (i = 0; i < path.length - 2; i++) {
      if (!pre[path[i]]) {
        if (+path[i + 1] >= 0) {
          pre[path[i]] = [];
        } else {
          pre[path[i]] = {};
        }
      }
      pre = pre[path[i]];
    }
    pre[path[i]] = customizer();
    pre = pre[path[i]];
    pre[path[i + 1]] = value;
    return obiect;
  },
  toPairs: function (object) {
    var res = [];
    for (var key in object) {
      if (Object.prototype.hasOwnProperty.call(object, key)) {
        var temp = [];
        temp.push(key, object[key]);
        res.push(temp);
      }
    }

    return res;
  },
  toPairsIn: function (object) {
    var res = [];
    for (var key in object) {
      var temp = [];
      temp.push(key, object[key]);
      res.push(temp);
    }
    return res;
  },
  transform: function (
    object,
    iteratee = this.identity,
    accumulator = Object.create(Object.getPrototypeOf(object))
  ) {
    var iterator = this.iteratee(iteratee);
    for (let key of Object.keys(object)) {
      if (iterator(accumulator, object[key], key, object) === false) break;
    }
    return accumulator;
  },
  unset: function (object, path) {
    var pre = object;
    if (typeof path == "string") {
      var p = path.split(/\[|\]\[|\]\.|\]|\./);
      var ary = [];
      p.forEach((it) => {
        if (it !== "") {
          ary.push(it);
        }
      });
      path = ary;
    }
    for (var i = 0; i < path.length - 1; i++) {
      if (pre[path[i]] == undefined) {
        return false;
      }
      pre = pre[path[i]];
    }
    if (pre[path[i]] == undefined) {
      return false;
    }
    delete pre[path[i]];
    return true;
  },
  update: function (
    object,
    path,
    updater = (it) => {
      it;
    }
  ) {
    var pre = object;
    if (typeof path == "string") {
      var p = path.split(/\[|\]\[|\]\.|\]|\./);

      var ary = [];
      p.forEach((it) => {
        if (it !== "") {
          ary.push(it);
        }
      });
      path = ary;
    }

    for (var i = 0; i < path.length - 1; i++) {
      if (pre[path[i]] == undefined) {
        return false;
      }
      pre = pre[path[i]];
    }
    if (pre[path[i]] == undefined) {
      return false;
    }
    pre[path[i]] = updater(pre[path[i]]);
    return pre[path[i]];
  },
  updateWith: function (object, path, updater, customizer) {
    if (customizer == undefined) {
      return this.update(object, path, updater);
    }
    var val = this.get(object, path);
    this.setWith(object, path, updater(val), customizer);
    return object;
  },
  values: function (object) {
    return Object.values(object);
  },
  valuesIn: function (object) {
    var res = [];
    for (var key in object) {
      res.push(object[key]);
    }
    return res;
  },
  camelCase: function (string = "") {
    var strArr = string.match(/[a-zA-Z]+/g);

    return strArr
      .map(
        (item, index) =>
          (index ? item[0].toUpperCase() : item[0].toLowerCase()) +
          item.slice(1).toLowerCase()
      )
      .join("");
  },
  capitalize: function (string) {
    return string[0].toUpperCase() + string.slice(1).toLowerCase();
  },
  endsWith: function (string = "", target, position = string.length) {
    return string.slice(position - target.length, position) === target;
  },
  escape: function (string = "") {
    return string
      .replace("&", "&amp")
      .replace("<", "&lt")
      .replace(">", "&gt")
      .replace('"', "&quot")
      .replace("'", "&apos");
  },
  escapeRegExp: function (string = "") {
    var re = /[\^\$\ \.\*\+\?\(\"\,\"\)\[\"\,\"\]\,\|]/g;
    return string.replace(re, `\\$&`);
  },

  kebabCase: function (string = "") {
    var reg = /(?<=[\w]*)([a-zA-Z]+)(?=[\w]*)/g;
    var ary = string.match(reg);
    if (ary.length == 1) {
      let str = "";
      for (var ele of ary[0]) {
        if (ele == ele.toUpperCase()) {
          str = str + "-" + ele;
        } else {
          str += ele;
        }
      }
      return str.toLowerCase();
    }
    return ary.join("-").toLowerCase();
  },
  lowerCase: function (string = "") {
    return string
      .toLowerCase()
      .match(/[a-z]{1,3}/g)
      .join(" ");
  },
  lowerfirst: function (string = "") {
    return (string = string[0].toLowerCase() + string.slice(1));
  },
  pad: function (string = "", length = 0, chars = " ") {
    var count = 0;
    while (string.length < length) {
      count++;
      if (count % 2) {
        string += chars;
      } else {
        string = chars + string;
      }
      while (string.length > length) {
        string = string.slice(0, -1);
      }
    }

    return string;
  },
  padEnd: function (string = "", length = 0, chars = " ") {
    let count = 0;
    while (string.length < length) {
      string += chars;
      while (string.length > length) {
        string = string.slice(0, -1);
      }
    }
    return string;
  },
  padStart: function (string = "", length = 0, chars = " ") {
    var str = "";
    while (string.length > length) {
      string = string.slice(1);
    }
    if (string.length < length) {
      len = length - string.length;

      while (str.length < len) {
        str += chars;
        {
          while (str.length > len) {
            str = str.slice(0, -1);
          }
        }
      }
    }
    return str + string;
  },
  parseInt: function (string, radix) {
    if (radix === undefined || radix === 0 || arguments.length > 2) radix = 10;
    if (string.slice(0, 2) === "0x") radix = 16;
    return parseInt(string, radix);
  },
  repeat: function (string = "", n = 1) {
    var count = 0;
    var str = "";
    while (count < n) {
      str += string;
      count++;
    }
    return str;
  },
  replace: function (string = "", pattern = "", replacement = "") {
    var re = new RegExp(/[a-zA-Z]+/, "g");
    console.log(re);
    var str = string.match(re);
    console.log(str);
    var res = "";
    for (var ele of str) {
      console.log(ele);
      if (ele == pattern) {
        res += " " + replacement;
      } else {
        res += " " + ele;
      }
    }
    return res.slice(1);
  },
  snakeCase: function (string = "") {
    var re = string.match(/[A-Za-z][a-z]+|[A-Z]+/g);
    return re.map((it) => it.toLowerCase()).join("_");
  },
  split: function (string = "", sepatator, limit) {
    var re = new RegExp("[A-Za-z]" + "\\" + separator, "g");
    var res = re;
    for (var i = 0; i < res.length; i++) {
      res[i] = res[i].slice(0, -1);
    }
    res.length = limit;
    return res;
  },
  startCase: function (string = "") {
    return string
      .match(/[A-Za-z][a-z]+|[A-Z]+/g)
      .map((it) => it[0].toUpperCase() + it.slice(1))
      .join(" ");
  },
  startsWith: function (string = " ", target, position = 0) {
    {
      let str = string.slice(position);
      return str[0] == target ? true : false;
    }
  },

  toLower: function (string = "") {
    return string.toLowerCase();
  },
  toUpper: function (string = " ") {
    return string.toUpperCase();
  },
  trim: function (string = " ", chars = "\\s") {
    var res = string;
    var charsArr = chars.split("");
    for (var i = 0; i < charsArr.length; i++) {
      var reg = new RegExp(`[${chars}]`, "g");
      var res = res.replace(reg, "");
    }
    return res;
  },
  trimEnd: function (string = "", chars = "\\s") {
    var reg = new RegExp(`[${chars}]`);
    for (var i = string.length - 1; i > 0; i--) {
      if (!reg.test(string[i])) {
        break;
      }
    }
    return string.slice(0, i - 1);
  },
  trimStart: function (string = "", chars = "\\s") {
    var reg = new RegExp(`[${chars}]`);
    for (var i = 0; i < string.length; i++) {
      if (!reg.test(string[i])) {
        break;
      }
    }
    return string.slice(i);
  },
  unescape: function (string = "") {
    var map = {
      "&amp": "&",
      "&lt": "<",
      "&gt": ">",
      "&quos": '"',
      "&apos": "'",
    };
    for (var key in map) {
      if (string.includes(key)) {
        string.replace(key, map[key]);
      }
    }
    return string;
  },
  upperCase: function (string = " ") {
    return string
      .match(/[A-Za-z][a-z]+|[A-Z]+/g)
      .join(" ")
      .toUpperCase();
  },
  upperFirst: function (string = " ") {
    return string[0].toUpperCase() + string.slice(1);
  },
  words: function (string = " ", pattern = /\w+/g) {
    return string.match(pattern);
  },
  defaultTo: function (value, defaultValue = " ") {
    if (value !== value) {
      return defaultValue;
    } else if ((value === null) | (value === undefined)) {
      return defaultValue;
    } else return value;
  },
  range: function (start = 0, end, step) {
    if (end == undefined) {
      (end = start), (start = 0);
    }
    if (step == undefined) {
      step = end < start ? -1 : 1;
    }
    if (step === 0) {
      return Array(Math.ceil(end - start)).fill(start);
    }

    const res = [];

    for (var i = start; (i - start) * (end - i) >= 0 && i !== end; i += step) {
      res.push(i);
    }
    return res;
  },
  rangeRight: function (...args) {
    return this.range(...args).reverse();
  },
  times: function (n, iteratee = this.identity) {
    const res = [];
    for (let i = 0; i < n; i++) {
      res.push(iteratee(i));
    }
    return res;
  },
  toPath: function (path) {
    return Array.isArray(path) ? path : String(path).match(/\w+/g);
  },
  cloneDeep: function (value) {
    //*标
    if (Array.isArray(value)) {
      let re = [];
      value.forEach((item) => {
        re.push(this.cloneDeep(item));
      });
      return re;
    } else if (typeof value == "object") {
      if (value instanceof RegExp) {
        return new RegExp(value, value.flags);
      } else if (value instanceof Error) {
        return new Error(value.message);
      } else {
        let re = {};
        for (let key in value) {
          re[key] = this.cloneDeep(value[key]);
        }
      }
    }
  },
  identify: function (...value) {
    return value[0];
  },
  concat: function (array, ...values) {
    return [...array, ...values.flat()];
  },
  pullAt: function (array, ...indexes) {
    var ary = [],
      temp = 0;
    if (isArray(indexes[0])) indexes = flattenDeep(indexes);

    for (var i of indexes) {
      ary.push(array[i - temp++]);
      temp--;
      array.splice(i - temp++, 1);
    }
    return ary;
  },
  ary: function (func, n = func.length) {
    return function (...arg) {
      return func(...arg.slice(0, n));
    };
  },
  unary: function (f) {
    return ary(f, 1);
  },
  negate: function (f) {
    return function (...arg) {
      return !f(...arg);
    };
  },
  once: function (func) {
    let res;
    let isExecuted = false;
    return (...args) => {
      if (!isExecuted) {
        res = func(...args);
        isExecuted = true;
      }
      return res;
    };
  },
  spread: function (f) {
    return function (arr) {
      return f(...arr);
    };
  },
  curry: function (f) {
    if (f.length == 0) return f();
    return function (...arg) {
      return curry(f.bind(null, ...arg));
    };
  },
  flip: function (f) {
    return function (...arg) {
      return f(...arg.reverse());
    };
  },
  constant: function (val) {
    return function () {
      return val;
    };
  },
  flow: function (funcs) {
    return (...args) => {
      let res = funcs[0](...args);
      for (let i = 1; i < funcs.length; i++) {
        res = funcs[i](res);
      }
      return res;
    };
  },

  method: function (path, ...args) {
    if (typeof path === "string") path = this.toPath(path);
    return (object) => path.reduce((res, it) => res[it], object)(...args);
  },
  methodOf: function (object, ...args) {
    return (path) => {
      if (typeof path === "string") path = this.toPath(path);
      return path.reduce((res, it) => res[it], object)(...args);
    };
  },
  nthArg: function (n) {
    return (...args) => {
      n = n > 0 ? n : args.length + n;
      return args[n];
    };
  },
  propertyOf: function (object) {
    return (path) => this.toPath(path).reduce((res, it) => res[it], object);
  },
};

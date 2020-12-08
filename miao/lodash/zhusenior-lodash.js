var zhusenior = {
  chunk : function(array, [size = 1]) {
      if (!array)  return null;
  },

   compact : function (array) {
      if (!array) return [];
      var res = [];
      for (var ary of array) {
        if (ary) {
          res.push(ary);
        }
      }
      return res;
    },

  difference : function(array, ...values) {
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

     drop : function (array, n = 1) {
      if (n == 0) return array;

      var res = [];
      for (var i = n; i < array.length; i++) {
        res.push(array[i]);
      }
      return res;
    },

      dropRight:  function (array, n = 1) {
      if (!array) return [];

      if (n > array.length + 1) return [];
      if (n == 0) return array;
      var res = [];
      for (var i = 0; i < array.length - n; i++) {
        res.push(array[i]);
      }
      return res;
    }
}

https://zhusenior:jfHz7pgVpVyf@github.com/zhusenior/https://github.com/zhusenior/zhusenior.github.io.git


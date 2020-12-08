var zhusenior = {
  chunk : function(array, [size = 1]) {
      if (!array)  return null;
  },

   compact : function (array) {
      if (!array) return [];
      let res = [];
      for (let ary of array) {
        if (ary) {
          res.push(ary);
        }
      }
      return res;
    },

  difference : function(array, ...values) {
      if (array == []) return [];
      let res = [];
      let value = [];
      for (let i = 0; i < values.length; i++) {
        value.push(...values[i]);
      }
      for (let ary of array) {
        let flag = true;
        for (let val of value) {
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

      let res = [];
      for (let i = n; i < array.length; i++) {
        res.push(array[i]);
      }
      return res;
    },

      dropRight:  function (array, n = 1) {
      if (!array) return [];

      if (n > array.length + 1) return [];
      if (n == 0) return array;
      let res = [];
      for (let i = 0; i < array.length - n; i++) {
        res.push(array[i]);
      }
      return res;
    },
      fill : function (array, value, start = 0, end = array.length) {
      let res = [];
      for (let i = 0; i < start; i++) {
        res.push(array[i]);
      }
      for (let i = start; i < end; i++) {
        res.push(value);
      }
      for (let i = end; i < array.length; i++) {
        res.push(array[i]);
      }
      return res;
    },
   
    dropWhile :function(){

    }

}



